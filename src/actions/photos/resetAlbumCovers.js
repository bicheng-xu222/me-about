export const RESET_ALBUM_COVERS = "RESET_ALBUM_COVERS"

export default () => {
  return dispatch => {
    dispatch({
      type: RESET_ALBUM_COVERS
    })
  }
}
