import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTab from '../components/home/BottomTab'
import Categories from '../components/home/Categories'
import HeaderTab from '../components/home/HeaderTab'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'

const YELP_API_KEY = "oUxM8LwzECBAb2bHpLww8PtqJa_A3ETeOEV-RzA5MqOFlOYGrFoiMP2DYwycmto9jw52im8BM1xhcEuFUfqrmOhi_0uA-J2fel5PJs1kJ48_qM1BNjxOUBWcaTRTYXYx"

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city,setCity]=useState("New York")
    const [activeTab,setActiveTab]=useState("Delivery");

    const getRestaurantFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then(json =>
            setRestaurantData(json.businesses.filter((business)=>
            business.transactions.includes(activeTab.toLowerCase())
            
            )
            )
        )
    }

    useEffect(()=>{
        getRestaurantFromYelp()
    },[city,activeTab])

    return (
        <View style={styles.mainContainer}>
            <View style={{ paddingBottom: 10, borderBottomColor: '#eee', borderBottomWidth: 5, }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar  setCity={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTab/>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 40,
        backgroundColor: 'white'
    }
})
