import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import firebase from '../../firebase'

export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false);
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

    const total = items
        .map((item) => Number(item.price.replace('₹', '')))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString('en', {
        style: 'currnecy',
        currency: "USD",
    })

    const addOrderToFirebase=()=>{
        const db=firebase.firestore();
        db.collection("orders").add({
            items:items,
            restaurantName:restaurantName,
            createdAt:firebase.firestore.fieldValue.serverTimeStamp(),
        })
        setModalVisible(false);
    }

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },
        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: 'center',
            fontWeight: '800',
            marginBottom: 10,
            fontSize: 18,
        },
        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
        },
        subtotalText: {
            textAlign: 'left',
            fontWeight: '800',
            fontSize: 15,
            marginBottom: 10,
        },
    })

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>₹{totalUSD}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={{
                                marginTop: 20,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative',
                            }}
                                onPress={() => {addOrderToFirebase()}}>
                                <Text style={{ color: 'white', fontSize: 20, }}>Checkout</Text>
                                <Text style={{
                                    position:'absolute',
                                    right:20,
                                    color:'white',
                                    fontSize:15,
                                    top:17}}>{total? ('₹'+totalUSD):''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)} >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 15,
                    position: 'absolute',
                    bottom: 5,
                    zIndex: 999,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <TouchableOpacity style={{
                            marginTop: 20,
                            backgroundColor: 'black',
                            alignItems: 'center',
                            padding: 13,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            borderRadius: 30,
                            width: 300,
                            position: 'relative',
                        }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: 'white', fontSize: 20, marginRight: 30, }}>View Cart</Text>
                            <Text style={{ color: 'white', fontSize: 20 }}>₹{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>)
            }
        </>
    )
}
