export const LAUNCH_CAMERA = 'LAUNCH_CAMERA'
export const CLOSE_CAMERA = 'CLOSE_CAMERA'
export const PICTURE_TAKEN = 'PICTURE_TAKEN'

export function launchCamera() {
  return {
    type: LAUNCH_CAMERA
  }
}

export function closeCamera() {
  return {
    type: CLOSE_CAMERA
  }
}

export function pictureTaken(pictureUri) {
  return {
    type: PICTURE_TAKEN,
    payload: pictureUri
  }
}
