import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

const foods = [
    {
        title: "Khaman",
        description: "WIth marcha and kadhi",
        price: "₹200",
        image: "https://images.indianexpress.com/2020/04/Dhokla-759.jpg"
    },
    {
        title: "Khandvi",
        description: "WIth marcha and kadhi",
        price: "₹250",
        image: "https://static.toiimg.com/thumb/53252054.cms?imgsize=42836&width=800&height=800"
    },
    {
        title: "Gulab Jamun",
        description: "With sweet",
        price: "₹50",
        image: "https://c2.staticflickr.com/6/5559/30562381266_8994c463dd_z.jpg"
    },
    {
        title: "Khaman",
        description: "WIth marcha and kadhi",
        price: "₹200",
        image: "https://images.indianexpress.com/2020/04/Dhokla-759.jpg"
    },
    {
        title: "Khandvi",
        description: "WIth marcha and kadhi",
        price: "₹250",
        image: "https://static.toiimg.com/thumb/53252054.cms?imgsize=42836&width=800&height=800"
    },
    {
        title: "Gulab Jamun",
        description: "With sweet",
        price: "₹50",
        image: "https://c2.staticflickr.com/6/5559/30562381266_8994c463dd_z.jpg"
    },
]


export default function MenuItem({restaurantName}) {
    const dispatch=useDispatch()

    const selectItem=(item,checkboxValue)=> dispatch({
        type:'ADD_TO_CART',
        payload:{
            ...item,
            restaurantName:restaurantName,
            checkboxValue:checkboxValue,
        },
    })

    const cartItems=useSelector((state)=>state.cartReducer.selectedItems.items)

    const isFoodInCart=(food,cartItems)=>(
        Boolean(cartItems.find((item)=>item.title===food.title))
    )

    return (
        <ScrollView showsVerticalScrollIndicator={false}> 
        {
            foods.map((food, index) => (
                <View key={index} style={{
                        borderBottomWidth:1,
                        borderBottomColor:'#DCDCDC'}}>
                    <View style={{ 
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        margin: 20}} >
                        <BouncyCheckbox
                            iconStyle={{borderColor:'lightgray',borderRadius:5}}
                            fillColor="dodgerblue"
                            isChecked={isFoodInCart(food,cartItems)}
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                </View>
            ))
        }
        </ScrollView>
    )
}


const FoodInfo = (props) => (
    <View style={{
        width: 240,
        justifyContent: 'space-evenly'
    }}>
        <Text style={{ fontSize: 19, fontWeight: '700' }}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: props.food.image }} />
    </View>
)
