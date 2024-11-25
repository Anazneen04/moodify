import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>

        <View style={styles.container}>
            
            <ScrollView horizontal={true}>

                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{uri: 'https://fastly.picsum.photos/id/942/200/200.jpg?hmac=Gh7W-H3ZGmweB9STLwQvq-IHkxrVyawHVTKYxy-u9mA'}} style={styles.imageOfCard}/>
                    <Text style={styles.cardText}>Sensor 1</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}> 
                    <Image source={{uri: 'https://fastly.picsum.photos/id/1031/200/200.jpg?hmac=E9kagTB6aHlVO8qmJYAQYYGJP3IvPT_v0N3ju0Rc4Gw'}} style={styles.imageOfCard}/>
                    <Text style={styles.cardText}>Sensor 2</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}> 
                    <Image source={{uri: 'https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY'}} style={styles.imageOfCard}/>
                    <Text style={styles.cardText}>Sensor 3</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}> 
                    <Image source={{uri: 'https://fastly.picsum.photos/id/677/200/200.jpg?hmac=x54KZ3q80hA0Sc36RV2FUoDZdE3R31oaC988MA1YE2s'}} style={styles.imageOfCard}/>
                    <Text style={styles.cardText}>Sensor 4</Text>
                </View>

                {/* https://fastly.picsum.photos/id/736/200/200.jpg?hmac=u6O-bo6AxmB8ejeBO6kM11iGA93cm1tgo4-_S_fNXe8 */}

            </ScrollView>
            
            
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
    imageOfCard:{
        height: 100,
        width:100,
        margin: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
  },
    
    container: {
        flex: 1,
        padding: 8,
    },
    cardText : {
        color: '#E5E5E5',
        fontWeight: 'bold',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 170,
        borderRadius: 4,
        margin: 7,

    },
    cardElevated:{
        backgroundColor: '#3D3C3A',
        elevation: 5,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#5E5E6E',
        shadowOpacity: 0.7,
        shadowRadius: 2
    }
})