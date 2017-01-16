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
   Input } from 'native-base'
import { TouchableHighlight } from 'react-native'

export default Login = ({login, register}) => {
  return (
    <Container>
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
        <Content>
          <Text style={{fontSize: 52, textAlign: 'center', padding: 15, color: '#0A69FE'}}>Ikigai</Text>
          <List>
            <ListItem>
              <InputGroup>
                  <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                  <Input placeholder="EMAIL" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="PASSWORD" secureTextEntry />
              </InputGroup>
            </ListItem>
          </List>
          <Button
            onPress={() => login('', '')}
            block
            style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
            Login
          </Button>
            <Text onPress={() => register()} style={{ alignSelf: 'center'}}>New here?</Text>
        </Content>
      </View>
    </Container>
  )
}
