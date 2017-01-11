import { LAUNCH_CAMERA, CLOSE_CAMERA, PICTURE_TAKEN } from '../Actions/CameraActions'

const initialState = {
  cameraState: 'closed',
  pictureUri: ''
}

export const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAUNCH_CAMERA:
      return {
        ...state,
        cameraState: 'opened',
      }
      break;
    case CLOSE_CAMERA:
      return {
        ...state,
        cameraState: 'closed',
      }
      break;
    case PICTURE_TAKEN:
      return {
        ...state,
        pictureUri: action.payload,
      }
      break
    default:
      return state
  }
}
