import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity , ToastAndroid, Alert} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

export default function login() {
  const navigation = useNavigation();

  const move=()=>{
    navigation.navigate('SignUp')
  }
  const handleFormSubmit=(values)=>{
console.log(values);
axios.post('http://localhost:3000/api/users/login', { email: values.email,
password: values.password}).
 then(data => {
  console.log(data);



  navigation.navigate('Home')
  alert('Login successfully!');

}).catch((e)=>{
  console.log(e.response.data.error);
  alert(e.response.data.error);
});
  }
  return (
    <View>
      <Image
        style={styles.stretch}
        source={('https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg')}
      />
      <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', textAlign: 'center'}}>
      <View style={styles.title}>
        <Text style={styles.logintext}>
          Login
        </Text>
      </View>
      </View>
      <Formik
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
      password: Yup.string().required("Password is required")
     
    })}
    onSubmit={handleFormSubmit}
    initialValues={{ email: "", password: "" }}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
      <TextInput
        style={styles.input}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        placeholder="Username or email"
      />
        <ErrorMessage name="email" />
      <TextInput

        style={styles.input}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        placeholder="Password"
        secureTextEntry={true}
      />
        <ErrorMessage name="password" />
      <View style={{display: 'flex', flexDirection:'column', alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={handleSubmit} style={{ color: 'black', fontWeight: 'bold', borderColor: '#e8b404', borderWidth: 4, borderRadius: '20px', textAlign: 'center', width: "40%", margin: '10px' }}>Login</TouchableOpacity>
        <TouchableOpacity style={{
          color: '#0000EE', textDecorationLine: 'underline', margin: '10px'
        }}>Forgot Password? Reset here</TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          borderColor: '#e8b404',
          margin: '20px'
        }}
      />
      <Text style={styles.loginsubtext} >Or login with</Text>
      
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          borderColor: '#e8b404',
          margin: '20px'

        }}
      />
      <Text style={styles.loginsubtext}>Don't have account</Text>
      <TouchableOpacity  onPress={()=>move()}  style={{
          color: '#0000EE', textDecorationLine: 'underline', margin: '10px', fontSize: '24px', textAlign: 'center'
        }}>SIGN-UP HERE!</TouchableOpacity> 
        </View>   
        )}
        </Formik>
      </View>
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
    borderColor: '#e8b404',
    borderWidth: 2,
    backgroundColor: '#e8e4e4',
    height: 40,
    paddingLeft: 18,

  },
  title: {
    width: '50%',
    borderColor: '#e8b404',
    borderWidth: 5,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: '25px',
  },
  logintext: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  loginsubtext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
