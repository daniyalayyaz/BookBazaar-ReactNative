import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

export default function App() {
  return (
    <View>
    <Image
        style={styles.stretch}
        source={('https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg')}
      />
      <View style={styles.title}>
        <Text style={styles.logintext}>
          Login
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username or email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <View>
        <Button title='Login' style={styles.btn} color="white" borderColor='#e8b404' />
        <Button title='Forgot Password? Reset here' />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          borderColor: '#e8b404'
        }}
      />
      <Text style={styles.loginsubtext}>Or login with</Text>
      <IconButton
    icon="camera"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
   <IconButton
    icon="camera"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          borderColor: '#e8b404'

        }}
      />
      <Text style={styles.loginsubtext}>Don't have account</Text>
      <Button title='Sign up here'/>    </View>
  );
}

const styles = StyleSheet.create({

  stretch: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
  },
  input: {
    width: '90%',
    borderRadius: 25,
    margin: 10,
    borderColor:'#e8b404',
    borderWidth: 2,
    backgroundColor: '#e8e4e4',
    height: 40,
    paddingLeft: 18,

  },
  title: {
    width: '50%',
    textAlign: 'center',
    borderColor:'#e8b404',
    borderWidth: 5,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: '25px',
    },
  btn: {
    borderRadius: '25px',
    backgroundColor: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
    width: '80%',
    borderColor:'#e8b404',
    borderWidth: 5,
  },
logintext: {
  fontSize: 24,
  fontWeight: 'bold'
},
loginsubtext: {
  fontSize: 20,
  fontWeight: 'bold'
}
});
