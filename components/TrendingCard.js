import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

const RecipeCardInfo = ({recipeItem}) =>{
    return(
        <View
           style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            height: 100,
            paddingVertical: 12,
            paddingHorizontal: 8,
            borderRadius: 20,
            backgroundColor: '#2626269c'
           }}
        >
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                <Text
                  style={{
                    width: "70%",
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "Roboto", 
                    lineHeight: 22
                  }}
                >
                    {recipeItem.name}
                </Text>
                <MaterialCommunityIcons name='bookmark' size={30} style={{
                    width: 30,
                    height: 30,
                    marginRight: 8,
                    color: 'green'
                }}/>
            </View>

            {/*Duration & Serving*/}
            <Text 
              style={{
                color: '#F5F6FB',
                fontFamily: "Roboto", 
                fontSize: 14, 
                lineHeight: 22
              }}
            >
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>
        </View>
    )
  }

  const TrendingCard = ({containerStyle, recipeItem, onPress}) =>{
    return(
        <TouchableOpacity
           style={{
            height: 350,
            width: 250,
            marginTop: 12,
            marginRight: 20,
            borderRadius: 20,
            ...containerStyle
           }}
           onPress={onPress}
        >
            <Image 
              source={recipeItem.image}
              resizeMode="cover"
              style={{
                width: 250,
                height: 450,
                borderRadius: 20
              }}
            />

            {/*Category*/}
            <View 
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 15,
                    paddingHorizontal: 12,
                    paddingVertical: 5,
                    backgroundColor: 'rgba(77,77,77, 0.8)',
                    borderRadius: 20
                }}
            >
                <Text style={{color: "#fff", fontFamily: "Roboto", fontSize: 14, lineHeight: 22}}>
                    {recipeItem.category}
                </Text>
            </View>

            <RecipeCardInfo recipeItem={recipeItem}/>
        </TouchableOpacity>
    )
  }

export default TrendingCard

const styles = StyleSheet.create({})