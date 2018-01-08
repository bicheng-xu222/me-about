import { GOT_ALBUM } from "../actions/photos/getAlbum"

export default (state = null, { type, payload } = {}) => {
  // console.log(payload);
  switch (type) {
    case GOT_ALBUM:
      return payload

    default:
      return state
  }
}
