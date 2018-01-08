import { FETCHED_ALBUMS } from "../actions/photos/fetchAlbums"

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case FETCHED_ALBUMS:
      return payload

    default:
      return state
  }
}
