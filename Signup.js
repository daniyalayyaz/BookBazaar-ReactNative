import { useNavigation } from "@react-navigation/native";
import { ErrorMessage, Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import axios from 'axios';
import { IconButton, Colors } from "react-native-paper";

export default function Signup() {
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate("Login");
  };
  const handleFormSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:3000/api/users/register", {
        email: values.email,
        password: values.password,
        name: values.name,
        confirmPassword: values.confirmPassword,

        role: "user",
        status: 0,
      })
      .then((data) => {
        console.log(data);
        navigation.navigate("Login");
        alert("User Registered");
      
      })
      .catch((e) => {
      
        alert(e.response.data.error);
      });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <View style={styles.title}>
          <Text style={styles.logintext}>SIGN-UP</Text>
        </View>
      </View>
      <Formik
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
          name: Yup.string().required("name is required"),
          confirmPassword: Yup.string().test(
            "passwords-match",
            "Passwords must match",
            function (value) {
              return this.parent.password === value;
            }
          ),
        })}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
             <ErrorMessage name="name" />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
                 <ErrorMessage name="email" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
               <ErrorMessage name="password" />
            <TextInput
              style={styles.input}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              placeholder="Re-Password"
            />
                   <ErrorMessage name="confirmPassword" />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  borderColor: "#e8b404",
                  borderWidth: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  width: "40%",
                  margin: "10px",
                }}
              >
                Sign-up
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          borderColor: "#e8b404",
          margin: "20px",
        }}
      />
      <Text style={styles.loginsubtext}>Or login with</Text>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          borderColor: "#e8b404",
          margin: "20px",
        }}
      />
      <Text style={styles.loginsubtext}>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => move()}
        style={{
          color: "#0000EE",
          textDecorationLine: "underline",
          margin: "10px",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        SIGN-IN HERE!
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderRadius: 25,
    margin: 10,
    borderColor: "#e8b404",
    borderWidth: 2,
    backgroundColor: "#e8e4e4",
    height: 40,
    paddingLeft: 18,
  },
  logintext: {
    fontSize: 24,
    fontWeight: "bold",
  },
  loginsubtext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    width: "50%",
    borderColor: "#e8b404",
    borderWidth: 5,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: "25px",
  },
});
