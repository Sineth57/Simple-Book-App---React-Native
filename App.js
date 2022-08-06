import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import React from 'react';

const image = { uri: "https://wallpaperaccess.com/full/1365645.jpg" };

function HomeScreen ({navigation}) {
      return (
        <View style={styles.image}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.main}>Book App</Text>
      <Text style={styles.log}></Text>
      </ImageBackground>

      <Button  title = "Start"
       color="#a52a2a" 
      onPress = {() => navigation.navigate('Login')} />
    </View>
  )
}  

function LoginScreen ({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
    
  return (
    
    <View style={styles.login}>
      <Text style={styles.head}>Welcome To Book App</Text>
          <SafeAreaView>
          <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
        keyboardType="text"
      />
      <TextInput
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="text"
      />
    </SafeAreaView>
      <Text style={styles.log}></Text>
      <Button  title = "LOGIN"
      color="#8b0000"
      onPress = {() => navigation.navigate('Dashboard')} />
      <Button  title = "REGISTER"
      color="#000080"
      onPress = {() => navigation.navigate('Register')} />
      <Button  title = "FORGOT PASSWORD"
      color="#8b0000"
      onPress = {() => navigation.navigate('Reset password')} />
    </View>
  )
}  

function DashScreen ({navigation}) {
  return (
    <View style={styles.text}>
            <Image
      style={styles.img2}
      source={{
        uri:'https://cutewallpaper.org/26/best-phone-wallpaper-books/102097582.jpg'}}
      />
      <Text style={styles.log}></Text>
      <Button title = "Novels"
      color="#000080"
      onPress = {() => navigation.navigate('Details_1')} />
      <Button title = "Short Stories"
      color="#008b8b"
      onPress = {() => navigation.navigate('Details_2')} />
      <Button title = "Children's Stories"
      color="#000080"
      onPress = {() => navigation.navigate('Details_3')} />
    </View>
  )
}

function RegScreen () {
  return (
    <View style={styles.text}>
      <Text>Register</Text>
    </View>
  )
}

function FpScreen ({navigation}) {
    const [password, onChangeNumber ] = React.useState(null);
    const [repassword, onChangeReNumber ] = React.useState(null);

  return (

    <View style={styles.login}>
      <Text style={styles.head}>Forgot Password</Text>
    <SafeAreaView>
      <TextInput
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="New Password"
        placeholderTextColor="#003f5c"
        keyboardType="text"
      />

<TextInput
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={onChangeReNumber}
        value={repassword}
        placeholder="Confirm Password"
        placeholderTextColor="#003f5c"
        keyboardType="text"
      />

    </SafeAreaView>
      <Text style={styles.log}></Text>
      <Button  title = "Sign Up"
      color="#8b0000"
      onPress = {() => navigation.navigate('Dashboard')} />
      <Button  title = "Privious"
      color="yellow"
      onPress = {() => navigation.navigate('Login')} />
    </View>
)
}



function MapScreen () {
  return (
    <View style={styles.text}>
      <Text>Malagiya Aththo</Text>
    </View>
  )
}

function BookScreen_1 ({navigation}) {
  return (
    <View style={styles.b_1}>
      <Text style={styles.Text_n1}>Madolduwa</Text>
      <Image
      style={styles.img1}
      source={{
        uri:'https://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2017/12/27/z_jun-p11-My-favourite-book.jpg?itok=Yrn_YbGK'}}
      />
      <Text style={styles.Text_n2}>Madolduwa (Sinhala: මඩොල් දූව is a children's novel and coming-of-age story written by Sri Lankan writer Martin Wickramasinghe and first published in 1947.  </Text>
      <Text style={styles.Text_n3}> </Text>
      <Text style={styles.Text_n3}>Country: Sri Lanka</Text>
      <Text style={styles.Text_n3}>Author: Martin Wikramasinghe</Text>
      <Text style={styles.Text_n3}>Language: Sinhala</Text>
      <Text style={styles.Text_n3}>Publication date: 1947</Text>

      <Button  title = "Privious"
      color="#9c2101"
      onPress = {() => navigation.navigate('Dashboard')} />
    </View>
  )
}

function BookScreen_2 ({navigation}) {
  return (
    <View style={styles.b_1}>
      <Text style={styles.Text_n1}>Aba Yaluwo</Text>
      <Image
      style={styles.img1}
      source={{
        uri:'https://upload.wikimedia.org/wikipedia/en/a/a6/Amba_Yaluwo.jpg'}}
      />
      <Text style={styles.Text_n2}>Amba Yaluwo (Sinhala: අඹ යාලුවෝ, English: Best Friends) is a 1957 novel by Sri Lankan author Tikiri Bandara Ilangaratne.</Text>
      <Text style={styles.Text_n3}> </Text>
      <Text style={styles.Text_n3}>Country: Sri Lanka</Text>
      <Text style={styles.Text_n3}>Author: Tikiri Bandara Ilangaratne</Text>
      <Text style={styles.Text_n3}>Language: Sinhala</Text>
      <Text style={styles.Text_n3}>Publication date: 1957</Text>

      <Button  title = "Privious"
      color="#8b0000"
      onPress = {() => navigation.navigate('Dashboard')} />
    </View>
  )
}

function BookScreen_3 ({navigation}) {
  return (
    <View style={styles.b_1}>
      <Text style={styles.Text_n1}>The Merry Adventures of Robin Hood</Text>
      <Image
      style={styles.img1}
      source={{
        uri:'https://upload.wikimedia.org/wikipedia/commons/e/e6/1883_decorative_title_page.jpg'}}
      />
      <Text style={styles.Text_n2}>The Merry Adventures of Robin Hood of Great Renown in Nottinghamshire is an 1883 novel by the American illustrator and writer Howard Pyle.</Text>
      <Text style={styles.Text_n3}> </Text>
      <Text style={styles.Text_n3}>Country: America</Text>
      <Text style={styles.Text_n3}>Author: Howard Pyle</Text>
      <Text style={styles.Text_n3}>Language: English</Text>
      <Text style={styles.Text_n3}> Godage publishers - 1883</Text>

      <Button  title = "Privious"
      color="#8b0000"
      onPress = {() => navigation.navigate('Dashboard')} />
    </View>
  )
}

function NotiScreen () {
  return (
    <View style={styles.text}>
      <Text>No new notifications</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name= "Home" component = {HomeScreen} />
        <Stack.Screen name= "Login" component = {LoginScreen} />
        <Stack.Screen name= "Dashboard" component = {DashScreen} />
        <Stack.Screen name= "Register" component = {RegScreen} />
        <Stack.Screen name= "Reset password" component = {FpScreen} />
        <Stack.Screen name= "Details_1" component = {BookScreen_1} />
        <Stack.Screen name= "Details_2" component = {BookScreen_2} />
        <Stack.Screen name= "Details_3" component = {BookScreen_3} />
        <Stack.Screen name= "Live Queue Map" component = {MapScreen} />
        <Stack.Screen name= "Notifications" component = {NotiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({    
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  login:{ 
    backgroundColor: "#afc8d3",
    paddingBottom:500, 
    paddingTop:20,
  },

  main: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
    },
      
  image:{ 
    flex: 1, 
    textAlign: 'center', 
    justifyContent: 'center', 
  },
  text:{
    flex: 1, 
    alignItems: 'stretch', 
    justifyContent: 'center',
    backgroundColor: "#afc8d3",
    paddingBottom:200, 
    paddingTop:10,

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  head:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 300,
  },

  img1:{
    width: 200, 
    height: 50, 
    paddingTop: 250,
    paddingBottom:10, 
    margin: 'auto',
  },

  img2:{
    paddingTop: 550,
    paddingBottom:50, 
    margin: 'auto',
  },

  Text_n1:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 40,
  },

  Text_n2:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },

  Text_n3:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },
  b_1:{ 
    backgroundColor: "#cfc8d3",
    paddingBottom:500, 
    paddingTop:20,
  },
});