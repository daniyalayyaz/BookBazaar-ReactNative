import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import {
  IconButton,
  Colors,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Headline,
  TextInput,
} from "react-native-paper";
import axios from 'axios';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function Home() {
  const [book, setBook] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/book")
    .then((response)=> {
      setBook(response.data.Book); 
    })
    .catch((e) => {
      console.error(e.response.data.error);
    });
  }, []);

  const renderItem = ({ item }) => (
    <Card
      style={{
        backgroundColor: "#e8b404",
        borderTopRightRadius: "30px",
        margin: "25px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <Card.Cover
        style={styles.stretch}
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/001/263/879/small/books-globe-and-clock-on-shelves.jpg",
        }}
      />

      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Rating</Button>
        <Button>({item.rating})</Button>
      </Card.Actions>
    </Card>
  );
  const renderItems = ({ item }) => (
    <Card
      style={{
        backgroundColor: "#e8b404",
        borderTopRightRadius: "30px",
        margin: "25px",
        padding: "20px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <Card.Cover
        style={styles.stretch}
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/001/263/879/small/books-globe-and-clock-on-shelves.jpg",
        }}
      />

      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.auther}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>{item.auther}</Button>
        <Button>Price</Button>
        <Button>{item.Price} PKR</Button>
      </Card.Actions>
    </Card>
  );
  return (
    <View>
      <Image
        style={styles.stretch}
        source={
          "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg"
        }
      />
 <TextInput
 style={{width:"70%",margin:"auto",  border: "none",
 backgroundColor: "transparent",marginBottom:"40px"}}
      label="Search"
      Outlined={'disabled'}
 
    />
      <SafeAreaView style={styles.container}>
        <Headline style={{ fontWeight: "bold" }}> Popular Book Store</Headline>
        {book.length>0&&  <FlatList
          horizontal
          data={book}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />}
        <View
          style={{
            borderBottomColor: "#e8b404",
            borderBottomWidth: 2,
            marginBottom: "40px",
          }}
        />
        <Headline style={{ fontWeight: "bold" }}> Most Selling Books</Headline>
       {book.length>0&& <FlatList
          horizontal
          data={book}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
        />}
      </SafeAreaView>
      {/* <Image
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
      <Button title='Sign up here'/>    </View> */}
    </View>
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
