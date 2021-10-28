import React from 'react'
import { View, Text, Image } from 'react-native'


export default function About(props) {
    const { image, price, name, reviews, rating, categories } = props.route.params;

    const formattedCatagories = categories.map((cat) => cat.title).join(' • ')

    const description =  `${formattedCatagories} ${
        price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: '#525252'
        }}>
            <View style={{ marginBottom: 20 }}>
                <RestaurantImage image={image} />
                <RestaurantTitle name={name} />
                <RestaurantDescription description={description} />
            </View>
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{
        width: '100%',
        height: 180,
    }} />
)

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "800",
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "500",
        fontSize: 17,
    }}>{props.description}</Text>
)
