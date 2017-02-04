import React from 'react'
import Modal from 'react-native-simple-modal'
import { TouchableOpacity, Text } from 'react-native'

const PickerSelector = ({handleNewPicture, closeModal, modalOpen}) => {
  return (
    <Modal
      open={modalOpen}
      offset={-100}
      style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 10, textAlign: 'center'}}>Add picture</Text>
      <TouchableOpacity onPress={() => handleNewPicture('camera')}>
        <Text style={{fontSize: 14, textAlign: 'center', padding: 5}}>Take a picture...</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNewPicture('gallery')}>
        <Text style={{fontSize: 14, textAlign: 'center', padding: 5}}>From gallery...</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => closeModal()}>
        <Text style={{fontSize: 14, textAlign: 'center', padding: 5}}>Cancel</Text>
      </TouchableOpacity>
    </Modal>
  )
}

export default PickerSelector
