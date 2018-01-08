import axios from "axios"

import { LOAD_ERROR } from "../loading"
import { apiKey } from "../../apiKey"
import { user_id } from "../../apiKey"

export const GOT_ALBUM = "GOT_ALBUM"

export default key => {
  return dispatch => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${key}&user_id=${user_id}&format=json&nojsoncallback=1`
      )
      .then(result => {
        dispatch({
          type: GOT_ALBUM,
          payload: result.data.photoset.photo
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
