import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
    <Image
        style={styles.stretch}
        source={('https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg')}
      />
      <TextInput
        style={styles.input}
      />
      <TextInput
        style={styles.input}
      />
      <View>
        <Button title='Login' />
        <Button title='Forgot Password? Reset here' />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <Text>Or login with</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <Text>Don't have account</Text>
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
    border: '#e8b404',
    backgroundColor: '#e8e4e4',
    height: 40,
  }
});
