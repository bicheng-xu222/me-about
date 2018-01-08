import { FETCHED_PHOTOS } from "../actions/photos/fetchPhotos"
import { RESET_PHOTOS } from "../actions/photos/resetPhotos"

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_PHOTOS:
      return state.concat([payload])

    case RESET_PHOTOS:
      return []

    default:
      return state
  }
}
