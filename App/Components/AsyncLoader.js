import React from 'react'
import Modal from 'react-native-simple-modal'
import { Spinner, Text, View } from 'native-base'

export default PickerSelector = ({modalOpen}) => {
  return (
    <Modal
       open={modalOpen}
       offset={0}
       modalDidOpen={() => console.log('modal did open')}
       modalDidClose={() => console.log('modal did open')}
       style={{paddingBottom: 15}}>
      <View style={{alignItems: 'center'}}>
        <Spinner color='blue' />
        <Text note>Processing operation, please wait..</Text>
      </View>
    </Modal>
  )
}
