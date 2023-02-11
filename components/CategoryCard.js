import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({containerStyle, categoryItem, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#F8F8F8',
        ...containerStyle
      }}
      onPress={onPress}
    >
        <Image source={categoryItem.image} resizeMode="cover" style={styles.cardImage} />
        <View style={styles.cardDescription}>
            <Text style={styles.cardText}>{categoryItem.name}</Text>
            <Text style={styles.cardTextServing}>{categoryItem.duration} | {categoryItem.serving} Serving</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 20
    },
    cardDescription: {
        width: "65%",
        paddingHorizontal: 20
    },
    cardText:{
        fontFamily: "Roboto",
        fontSize: 22,
        lineHeight: 30
    },
    cardTextServing:{
        color: 'gray',
        fontFamily: "Roboto",
        fontSize: 14, 
        lineHeight: 22
    }
})