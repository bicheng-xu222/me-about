import axios from "axios"

import { LOAD_ERROR } from "../loading"
import { apiKey } from "../../apiKey"
import { user_id } from "../../apiKey"

export const FETCHED_PHOTOS = "FETCHED_PHOTOS"

export default albumKey => {
  return dispatch => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${albumKey}&user_id=${user_id}&format=json&nojsoncallback=1`
      )
      .then(result => {
        var album_title = result.data.photoset.title
        result.data.photoset.photo.map(photo =>
          axios
            .get(
              `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${photo.id}&format=json&nojsoncallback=1`
            )
            .then(result => {
              let data = {
                title: photo.title,
                caption: album_title,
                key: photo.id,
                lastUpdated: photo.id,
                ImageSizes: result.data.sizes.size[6].source,
                preview: result.data.sizes.size[1].source
              }
              dispatch({
                type: FETCHED_PHOTOS,
                payload: data
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
