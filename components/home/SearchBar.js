import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({ setCity }) {
    return (
        <View style={{
            marginTop: 15,
            marginLeft: 10, flexDirection: 'row'
        }}>
            <GooglePlacesAutocomplete
                query={{ key: 'AIzaSyCAMUPHiy1O47Xr-5mtzt9kgeQEN44kem4',
                language:'en', }}
                onPress={(data, details = null) => {
                    const city = data.description.split(',')[0]
                    setCity(city)
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: "center",
                        marginRight: 10,
                    }
                }}

                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <TouchableOpacity>
                        <View style={{
                            marginRight: 10,
                            flexDirection: "row",
                            backgroundColor: 'white',
                            padding: 9,
                            borderRadius: 30,
                            alignItems: 'center',
                        }}
                        >
                            <AntDesign name="clockcircle" size={15} style={{ marginRight: 6 }} />
                            <Text>Search</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
