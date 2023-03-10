import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';
//firebase authentication object
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Context } from '../components/Context';

//screen height
const { height } = Dimensions.get('window');

const Login = () => {
  //Access user global authentication state from context
  const context = useContext(Context);
  let [user, setUser] = context;
  const navigation = useNavigation();

  // Handle user state changes
  // if logged in, we navigate to tabs
  function onAuthStateChanged(user) {
    if (user !== null) {
      setUser(user);
      navigation.navigate('Tabs');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // Return a promise after user logs in(unsubscribe) since onStateChange() is async
    return subscriber;
  }, []);

  // Authenticate via google
  // Check GooglePlay support, create prompt modal with idToken, create google credentials and use credetials to sign into Firebase
  async function googleLogin() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error, 'sign in error');
    }
  }

  // Handle user sign outs
  const signOut = async () => {
    try {
      await auth().signOut();
      setUser(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error, 'error sign in');
    }
  };

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
          <TouchableOpacity onPress={googleLogin}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#229879', '#2AD699']}
              style={{ paddingVertical: 18, borderRadius: 20 }}
            >
              <Text style={styles.loginText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpBtn} onPress={signOut}>
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
      {renderDetails()}
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
