import React from 'react'
import { Container,
   Content,
   Thumbnail,
   List,
   ListItem,
   InputGroup,
   Icon,
   Text,
   View,
   Button,
   Spinner,
   Input } from 'native-base'
import { TouchableHighlight, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  list: {
    paddingRight: 45,
    paddingLeft: 30
  }
})

export default Login = ({login, register, ...props}) => {

  let loginButton =(
            <Button
              onPress={() => login('', '')}
              block
              style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
              Login
            </Button>)

  if (props.auth.isProcessing) {
    loginButton = (<View style={{alignItems: 'center'}}><Spinner color='blue'/></View>)
  }

  return (
    <Container>
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
        <Content>
          <Text style={{fontSize: 52, textAlign: 'center', padding: 15, color: '#0A69FE'}}>Ikigai</Text>
          <List style={style.list}>
            <ListItem>
              <InputGroup>
                  <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                  <Input placeholder="Email"
                    onChangeText={(text) => props.handleChangeText({text}.text, 'userEmail')} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="Password"
                  secureTextEntry
                  onChangeText={(text) => props.handleChangeText({text}.text, 'passwd')} />
              </InputGroup>
            </ListItem>
          </List>
          {loginButton}
          <Text onPress={() => register()} style={{ alignSelf: 'center'}}>New here?</Text>
        </Content>
      </View>
    </Container>
  )
}
