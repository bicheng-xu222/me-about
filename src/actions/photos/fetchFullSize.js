import axios from "axios"

import { LOAD_ERROR } from "../loading"
import { user_id, apiKey } from "../../apiKey"

export const FETCHED_PHOTOS = "FETCHED_PHOTOS"

export default ({ photoKey, albumKey }) => {

  function getPhotoAddress() {
    return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${photoKey}&format=json&nojsoncallback=1`);
  }

  function getAlbumTitle() {
    return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${albumKey}&user_id=${user_id}&format=json&nojsoncallback=1`);
  }

  return dispatch => {
    axios.all([getPhotoAddress(), getAlbumTitle()])
            .then(result => {
              console.log(result);
              let data = {
                ImageSizes: result[0].data.sizes.size[10].source,
                title: result[1].data.photoset.title,
                preview: result[0].data.sizes.size[0].source
              }
              dispatch({
                type: FETCHED_PHOTOS,
                payload: data
              })
            })
      .catch(error => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
