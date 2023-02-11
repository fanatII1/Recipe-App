import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native'

const Header_Height = 350;

const RecipeCreator = ({selectedRecipe}) => {
    return(
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }}
        >
            {/*Profile Photo*/}
            <View
              style={{
                width: 40,
                height: 40,
                marginLeft:20
              }}
            >
                <Image
                  source={selectedRecipe?.author?.profilePic}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                  }}
                />
            </View>

            {/*Labels*/}
            <View style={{flex: 1, marginHorizontal: 20}}>
                <Text style={{color: '#F5F6FB', fontFamily: "Roboto", fontSize: 14, lineHeight: 22}}>
                    Recipe Made By:
                </Text>
                <Text style={{color: '#fff', fontFamily: "Roboto", fontSize: 14, lineHeight: 22}}>
                    {selectedRecipe?.author?.name}
                </Text>
            </View>

        </View>
    )
}

const RecipeCardInfo = ({selectedRecipe}) =>{
    return(
        <View style={{flex: 1, borderRadius: 20, backgroundColor: 'rgba(2, 2, 2, 0.9)'}}>
            <RecipeCreator selectedRecipe={selectedRecipe}/>
        </View>
    )
}

const Recipe = ({navigation, route}) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(()=> {
        let {recipe} = route.params;
        console.log(route)
        setSelectedRecipe(recipe);
    },[])

    function renderCardHeader(){
        return(
            <View style={{alignItems: 'center', overflow: 'hidden', marginTop: -1000, paddingTop: 1000}}>
                {/*BackgroundImage*/}
                <Animated.Image
                  source={selectedRecipe?.image}
                  resizeMode="contain"
                  style={{
                    height: Header_Height,
                    width: "200%",
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [-Header_Height, 0, Header_Height],
                                outputRange: [-Header_Height / 2, 0, Header_Height * 0.75]
                            })
                        },
                        {
                            scale: scrollY.interpolate({
                                inputRange: [-Header_Height,0, Header_Height],
                                outputRange: [2, 1, 0.75]
                            })
                        }
                    ]
                  }}
                />

                {/*Recipe Card Info*/}
                <Animated.View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 30,
                    right: 30,
                    height: 80
                  }}
                >
                    <RecipeCardInfo
                      selectedRecipe={selectedRecipe}
                    />
                </Animated.View>
            </View>
        )
    }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        ListHeaderComponent={
            <View>
                {/*Card Header*/}
                {renderCardHeader()}
            </View>
        }
        onScroll={Animated.event([
            {nativeEvent: {contentOffset: { y : scrollY }}}
        ], {useNativeDriver: true} )}
        renderItem={({item})=> (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                marginVertical: 5
            }}>

                {/*Ingrediend Icon*/}
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 50,
                    borderRadius:5,
                    backgroundColor: '#F5F6FB'
                  }}
                >
                  <Image 
                    source={item.icon}
                    style={{
                    height: 40,
                    width: 40
                    }}
                  />
                </View>

                {/*Description*/}
                <View style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: "Roboto", 
                        fontSize: 16, 
                        lineHeight: 22 
                    }}>
                        {item.description}
                    </Text>
                </View>

                {/*Quantity*/}
                <View style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: "Roboto", 
                        fontSize: 16, 
                        lineHeight: 22 
                    }}>
                        {item.quantity}
                    </Text>
                </View>

            </View>
        )}
      />
    </View>
  )
}

export default Recipe

const styles = StyleSheet.create({})