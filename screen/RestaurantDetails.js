import React from 'react'
import { View, Text } from 'react-native'
import About from '../components/restaurantDetails/About'
import MenuItem from '../components/restaurantDetails/MenuItem'
import ViewCart from '../components/restaurantDetails/ViewCart'

export default function RestaurantDetails({route,navigation}) {
    return (
        <View style={{height:'100%'}}>
            <About route={route} />
            <MenuItem restaurantName={route.params.name}/>
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}
