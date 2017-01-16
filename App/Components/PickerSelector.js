import React from 'react'
import Modal from 'react-native-simple-modal'
import { TouchableHighlight, TouchableOpacity, Text } from 'react-native'

export default PickerSelector = ({handleNewPicture, closeModal, ...props}) => {
  console.log(props)
  return (
    <Modal
       open={props.modalOpen}
       offset={-100}
       modalDidOpen={() => console.log('modal did open')}
       modalDidClose={() => console.log('modal did open')}
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
