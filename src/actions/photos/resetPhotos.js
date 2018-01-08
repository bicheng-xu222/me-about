export const RESET_PHOTOS = "RESET_PHOTOS"

export default () => {
  return dispatch => {
    dispatch({
      type: RESET_PHOTOS
    })
  }
}
