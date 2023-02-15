import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Recipe from './screens/Recipe';
import Tabs from './components/Tabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Context } from './components/Context';
import 'expo-dev-client'; //importing development build

GoogleSignin.configure({
  webClientId: '933844165393-un4or2l6rdt3kemssvgk1je4i9dsvdvg.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator();

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
