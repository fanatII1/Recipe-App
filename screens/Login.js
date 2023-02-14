import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';
//firebase authentication object
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '933844165393-un4or2l6rdt3kemssvgk1je4i9dsvdvg.apps.googleusercontent.com'
});

//screen height and width
const { width, height } = Dimensions.get('window');
const Login = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing){
      setInitializing(false);
    }{
      navigation.navigate("Tabs")
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //return a promise after user logs in(unsubscribe) since onStateChange() is async
    return subscriber;
  }, []);

  if (initializing) return null;

  //authenticate via google
  async function googleLogin() {
    // Check if device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  /*Header Section*/
  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground source={require('../assets/HomeBackground.jpg')} style={styles.HomeBg}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['transparent', '#000']} style={styles.linearGradient}>
            <Text style={styles.headerText}>Cooking Delicious Food Easily</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  /*Details Section*/
  function renderDetails() {
    return (
      <>
        <View style={styles.renderDetailsContainer}>
          <Text style={styles.detailsText}>
            Discover lots of great personalized food recommendations, meal planners, and tips. Over
            <Text style={{ fontWeight: 'bold' }}>40,000+</Text> curated recipes from cooking experts worldwide.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => googleLogin().then(()=> console.log('in'))}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#229879', '#2AD699']}
              style={{ paddingVertical: 18, borderRadius: 20 }}
            >
              <Text style={styles.loginText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpBtn} onPress={() => googleLogin().then(()=>  navigation.navigate("Tabs"))}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return (
    <View style={styles.loginContainer}>
      <StatusBar barStyle='light-content' />

      {renderHeader()}
      {/*if user not authenticated(user value did not change after initialized(false)), we render details*/}
      {!user ? renderDetails() : null}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    height: height > 700 ? '62%' : '60%',
  },
  HomeBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  linearGradient: {
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  headerText: {
    width: '80%',
    color: '#fff',
    lineHeight: 45,
    fontFamily: 'Roboto',
    fontSize: 40,
  },
  renderDetailsContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  detailsText: {
    marginTop: 12,
    width: '70%',
    color: 'gray',
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Roboto',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Roboto',
    lineHeight: 30,
  },
  signUpBtn: {
    marginTop: 12,
    paddingVertical: 18,
    borderRadius: 20,
    borderColor: 'darklime',
    borderWidth: 1,
  },
  signUpText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    lineHeight: 30,
    fontFamily: 'Roboto',
  },
});
