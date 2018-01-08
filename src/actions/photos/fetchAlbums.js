import axios from "axios"

import { LOAD_ERROR } from "../loading"
import { apiKey } from "../../apiKey"
import { user_id } from "../../apiKey"

export const FETCHED_ALBUMS = "FETCHED_ALBUMS"



const url =
  `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${user_id}&format=json&nojsoncallback=1`
export default () => {
  return dispatch => {
    axios
      .get(
        url
      )
      .then(result => {
        let data = result.data.photosets.photoset.map(album => {
          return {
            uriName: album.title._content,
            nodeId: album.server,
            key: album.id,
            title: album.title._content,
            lastUpdated: album.date_update,
            description: album.description._content,
            keywords: album.title._content,
            uri: album.Uri,
            imagesUri: album.id,
            higlightImage: album.primary
          }
        })

        dispatch({
          type: FETCHED_ALBUMS,
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
