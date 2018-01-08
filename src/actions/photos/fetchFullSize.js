import axios from "axios"

import { LOAD_ERROR } from "../loading"
import { apiKey } from "../../apiKey"

export const FETCHED_PHOTOS = "FETCHED_PHOTOS"

export default photoKey => {
  return dispatch => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${photoKey}&format=json&nojsoncallback=1`
      )
            .then(result => {
              let data = {
                ImageSizes: result.data.sizes.size[10].source
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
