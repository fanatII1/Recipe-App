import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons} from '@expo/vector-icons';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  /*Tab Icons*/
  function TabIcon({focused, icon}){

    return(
        <View style={{alignItems: 'center', justifyContent: 'center', height: 80, width: 80}}>
            <Octicons 
              name={icon}
              size={20}
              style={{
                width: 30,
                height: 30,
            }}
         />
        </View>
    )
  }

  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { 
            position: 'absolute', 
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            borderTopColor: 'transparent' ,
            height: 70
        }
    }}
    >
        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{tabBarIcon: ({focused}) => <TabIcon focused={focused} icon='home'/> }}
        />
        <Tab.Screen 
          name='Search' 
          component={Home} 
          options={{tabBarIcon: ({focused}) => <TabIcon focused={focused} icon='search'/> }}
        />
        <Tab.Screen 
          name='Bookmark' 
          component={Home} 
          options={{tabBarIcon: ({focused}) => <TabIcon focused={focused} icon='bookmark'/> }}
        />
        <Tab.Screen 
          name='Settings' 
          component={Home} 
          options={{tabBarIcon: ({focused}) => <TabIcon focused={focused} icon='gear'/> }}
        />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})