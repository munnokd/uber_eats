import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localRestaurants = [
    {
        name: "Gujarati Thali",
        image_url: "https://assets.gqindia.com/photos/5de4e924dff8520008669988/master/pass/top-image.jpg",
        catagories: ["Gujarati", "dinner"],
        price: '₹₹',
        reviews: 1244,
        rating: 4.6,
    },
    {
        name: "South Indian",
        image_url: "https://c8.alamy.com/comp/2C2D203/indian-food-and-indian-cuisine-dishes-copy-space-2C2D203.jpg",
        catagories: ["South Indian", "dinner"],
        price: '₹₹',
        reviews: 1244,
        rating: 4.0,
    },
    {
        name: "India's Grill",
        image_url: "https://www.eastindiagrillla.com/images/demo/dessert-3.jpg",
        catagories: ["Indian", "dinner"],
        price: '₹₹',
        reviews: 800,
        rating: 4.9,
    },
]

export default function RestaurantItem({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 30 }} onPress={()=>navigation.navigate("RestaurantDetails",{
                    name:restaurant.name,
                    image:restaurant.image_url,
                    price:restaurant.price,
                    reviews:restaurant.review_count,
                    rating:restaurant.rating,
                    categories:restaurant.categories,
                })}>
                    <View key={index} style={{ marginTop: 10, padding: 15, borderBottomColor: '#eee', borderBottomWidth: 7, }}>
                        <RestaurantImage image_url={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image
            style={{ width: "100%", height: 180 }}
            source={{ uri: props.image_url }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }} >
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 • min</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)
