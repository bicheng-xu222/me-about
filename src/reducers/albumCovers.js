import { FETCHED_ALBUM_COVERS } from "../actions/photos/fetchAlbumCovers"
import { RESET_ALBUM_COVERS } from "../actions/photos/resetAlbumCovers"

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_ALBUM_COVERS:
      return state.concat([payload])

    case RESET_ALBUM_COVERS:
      return []

    default:
      return state
  }
}
