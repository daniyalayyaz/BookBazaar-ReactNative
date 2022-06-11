import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import login from "./Login";
import Signup from "./Signup";

const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         screenOptions={{
          headerShown: false
        }}
        options={{header: () => null}}
          name="Login"
          component={login}
      
        />
        <Stack.Screen name="SignUp"      options={{header: () => null}}    screenOptions={{
          headerShown: false
        }}    component={Signup} />
        <Stack.Screen name="Home"      component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  stretch: {
    width: "100%",
    height: 150,
    resizeMode: "stretch",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(70, 64, 68, 0.73)), url("https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg"',
    backgroundSize: "cover",
    /* position: fixed; */
  },
});
