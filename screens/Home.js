import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { trendingRecipes } from './data';
import CategoryCard from '../components/CategoryCard';
import TrendingCard from '../components/TrendingCard';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';

/*Component Images*/
const characterImg = require('../assets/character.png');
const buritoImg = require('../assets/burito.png');

const Home = () => {
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

  function renderHeader(){
    let {displayName} = user;
    const firstName = displayName.split(' ')[0];
    return(
        <>
        <View style={styles.listHeaderContainer}>
            {/*Text*/}
            <View style={{flex: 1}}>
                <Text style={styles.greetingText}>Hello {firstName}</Text>
                <Text style={styles.questionText}>Anything you want to cook?</Text>
            </View>
            <TouchableOpacity>
                <Image source={characterImg} style={styles.profileImage}/>
            </TouchableOpacity>
        </View>
        </>
    )
  }

  function renderSearchBar(){
    return(
        <View style={styles.searchBarContainer}>
            <MaterialCommunityIcons name='magnify' size={30} style={styles.searchIcon}/>
            <TextInput 
                style={styles.textInput} 
                placeholderTextColor='black'
                placeholder='Search Recipes'
                />
        </View>
    )
  }

  function renderSeeRecipe(){
    return(
        <View style={styles.seeRecipeContainer}>
            {/*see recipe image*/}
            <Image source={buritoImg} style={styles.recipeImg}/>
            {/*See Recipe Text*/}
            <View style={{flex: 1, paddingVertical: 12}}>
                <Text style={styles.recipeText}>Here are new Recipes that you haven't tried</Text>
            </View>
        </View>
    )
  }

  function renderTrendingSection(){
    return(
        <View style={styles.trendingSectionContainer}>
            <Text style={styles.trendingSectionHeading}>Trending Recipe</Text>
            <FlatList
              data={trendingRecipes}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index})=>{
                return(
                    <TrendingCard recipeItem={item}/>
                )
              }}
            />
        </View>
    )
  }

  return (
    <SafeAreaView style={styles.areaContainer}>
        <FlatList
          data={trendingRecipes}
          keyExtractor={ item => item.id}
          keyboardDismissMode='on-drag'
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <View>
                {/*ListHeader Section*/}
                {renderHeader()}
                {/*ListSearchBar Section*/}
                {renderSearchBar()}
                {/*See Recipe*/}
                {renderSeeRecipe()}
                {/*TrendingSection*/}
                {renderTrendingSection()}

            </View>
          }
          renderItem={({item}) =>{
            return (
                <CategoryCard 
                 categoryItem={item}
                 containerStyle={{marginHorizontal: 24}}
                 onPress={()=> navigation.navigate('Recipe', {recipe: item})}
                 />
            )
          }}
          ListFooterComponent={
            <View style={{marginBottom: 100}}/>
          }
          />


    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    areaContainer:{
        flex: 1,
        backgroundColor: '#fff'
    },
    listHeaderContainer:{
        flexDirection: 'row',
        marginHorizontal: 24,
        alignItems: 'center',
        height: 80
    },
    greetingText:{
        color: 'green', 
        fontFamily: 'Roboto', 
        fontSize: 22, 
        lineHeight: 30
    },
    questionText:{
        marginTop: 3,
        color: 'gray',
        fontFamily: 'Roboto', 
        fontSize: 16, 
        lineHeight: 22
    },
    profileImage:{
        width: 40,
        height: 40,
        borderRadius: 20
    },
    searchBarContainer:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: 24,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#F5F6FB'
    },
    searchIcon:{
        width: 20,
        height: 20,
        tintColor: 'gray'
    },
    textInput:{
        marginLeft: 20,
        fontFamily: 'Roboto', 
        fontSize: 16, 
        lineHeight: 22
    },
    seeRecipeContainer:{
        flexDirection: 'row',
        marginTop: 24,
        marginHorizontal: 24,
        borderRadius: 10,
        backgroundColor: '#E7F9EF'
    },
    recipeImg:{
        height: 80,
        width: 80
    }, 
    recipeText:{
        width: '70%',
        fontFamily: 'Roboto', 
        fontSize: 14, 
        lineHeight: 22,
        marginLeft: 10
    },
    trendingSectionContainer:{
        marginTop: 24
    },
    trendingSectionHeading:{
        marginHorizontal: 24,
        fontFamily: "Roboto", 
        fontSize: 22, 
        lineHeight: 30
    }
})