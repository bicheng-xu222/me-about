import axios from "axios"

import { LOAD_ERROR } from "../loading"
import { apiKey } from "../../apiKey"
import { user_id } from "../../apiKey"

export const FETCHED_ALBUM_COVERS = "FETCHED_ALBUM_COVERS"

const url =
  `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${user_id}&format=json&nojsoncallback=1`
export default () => {
  return dispatch => {
    axios
      .get(url)
      .then(result => {
        result.data.photosets.photoset.map(album =>
          axios
            .get(
              `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${album.id}&user_id=${user_id}&per_page=1&page=1&format=json&nojsoncallback=1`
            )
            .then(result => {
              axios
                .get(
                  `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${result.data.photoset.primary}&format=json&nojsoncallback=1`
                )
                .then(result => {
                  let images = {
                    albumId: album.id,
                    images: result.data.sizes.size[6].source,
                    preview: result.data.sizes.size[1].source
                  }
                  dispatch({
                    type: FETCHED_ALBUM_COVERS,
                    payload: images
                  })
                })
            })
        )
      })
      .catch(error => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
