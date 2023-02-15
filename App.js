import { createContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Recipe from './screens/Recipe';
import Tabs from './components/Tabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Context } from './components/Context';
//importing development build
import 'expo-dev-client';

const Stack = createNativeStackNavigator();


GoogleSignin.configure({
  webClientId: '933844165393-un4or2l6rdt3kemssvgk1je4i9dsvdvg.apps.googleusercontent.com',
});

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={[user, setUser]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Tabs' component={Tabs} />
          <Stack.Screen name='Recipe' component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
