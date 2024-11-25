// import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
// import React from 'react'

// export default function FlatCards() {
//   return (
//     <View>

//         <View style={styles.container}>
            
//             <ScrollView horizontal={true}>

//                 <View style={[styles.card, styles.cardElevated]}>
//                     <Image source={{uri: 'https://fastly.picsum.photos/id/942/200/200.jpg?hmac=Gh7W-H3ZGmweB9STLwQvq-IHkxrVyawHVTKYxy-u9mA'}} style={styles.imageOfCard}/>
//                     <Text style={styles.cardText}>Sensor 1</Text>
//                 </View>
//                 <View style={[styles.card, styles.cardElevated]}> 
//                     <Image source={{uri: 'https://fastly.picsum.photos/id/1031/200/200.jpg?hmac=E9kagTB6aHlVO8qmJYAQYYGJP3IvPT_v0N3ju0Rc4Gw'}} style={styles.imageOfCard}/>
//                     <Text style={styles.cardText}>Sensor 2</Text>
//                 </View>
//                 <View style={[styles.card, styles.cardElevated]}> 
//                     <Image source={{uri: 'https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY'}} style={styles.imageOfCard}/>
//                     <Text style={styles.cardText}>Sensor 3</Text>
//                 </View>

//                 <View style={[styles.card, styles.cardElevated]}> 
//                     <Image source={{uri: 'https://fastly.picsum.photos/id/677/200/200.jpg?hmac=x54KZ3q80hA0Sc36RV2FUoDZdE3R31oaC988MA1YE2s'}} style={styles.imageOfCard}/>
//                     <Text style={styles.cardText}>Sensor 4</Text>
//                 </View>

//                 {/* https://fastly.picsum.photos/id/736/200/200.jpg?hmac=u6O-bo6AxmB8ejeBO6kM11iGA93cm1tgo4-_S_fNXe8 */}

//             </ScrollView>
            
            
//         </View>


//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     imageOfCard:{
//         height: 100,
//         width:100,
//         margin: 15,
//         borderTopLeftRadius: 6,
//         borderTopRightRadius: 6
//   },
    
//     container: {
//         flex: 1,
//         padding: 8,
//     },
//     cardText : {
//         color: '#E5E5E5',
//         fontWeight: 'bold',
//     },
//     card: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 130,
//         height: 170,
//         borderRadius: 4,
//         margin: 7,

//     },
//     cardElevated:{
//         backgroundColor: '#3D3C3A',
//         elevation: 5,
//         shadowOffset: {
//             width: 1,
//             height:1
//         },
//         shadowColor: '#5E5E6E',
//         shadowOpacity: 0.7,
//         shadowRadius: 2
//     }
// })


//Code with sensor 1 and sensor 2 working
// import React, { useState } from 'react';
// import { View, ScrollView, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import tw from 'tailwind-react-native-classnames';
// import { Accelerometer, LightSensor } from 'expo-sensors';

// export default function FlatCards() {
//   const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });
//   const [lightData, setLightData] = useState(0);
//   let lightSubscription = null;

//   // Handle Sensor 1 (Accelerometer)
//   const handleSensor1Press = async () => {
//     Accelerometer.setUpdateInterval(200); // Update every 500ms
//     const subscription = Accelerometer.addListener(({ x, y, z }) => {
//       setAccelerometerData({ x, y, z });
//     });

//     setTimeout(() => {
//       subscription?.remove(); // Remove subscription safely
//       Alert.alert(
//         'Accelerometer Values',
//         `x: ${accelerometerData.x.toFixed(2)}, y: ${accelerometerData.y.toFixed(2)}, z: ${accelerometerData.z.toFixed(2)}`
//       );
//     }, 1000);
//   };

//   // Handle Sensor 2 (Light Sensor)
//   const handleSensor2Press = async () => {
//     LightSensor.setUpdateInterval(200); // Update every 500ms
//     lightSubscription = LightSensor.addListener(({ illuminance }) => {
//       setLightData(illuminance);
//     });

//     setTimeout(() => {
//       lightSubscription?.remove(); // Remove subscription safely
//       Alert.alert('Light Sensor Value', `Illuminance: ${lightData.toFixed(2)} lux`);
//     }, 1000);
//   };

//   return (
//     <View style={tw`flex-1 p-2`}>
//       <ScrollView>
//         {/* Sensor 1 */}
//         <TouchableOpacity
//           style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}
//           onPress={handleSensor1Press}
//         >
//           <Image
//             source={{ uri: 'https://fastly.picsum.photos/id/942/200/200.jpg?hmac=Gh7W-H3ZGmweB9STLwQvq-IHkxrVyawHVTKYxy-u9mA' }}
//             style={tw`h-12 w-12 rounded-lg`}
//           />
//           <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 1 (Accelerometer)</Text>
//         </TouchableOpacity>

//         {/* Sensor 2 */}
//         <TouchableOpacity
//           style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}
//           onPress={handleSensor2Press}
//         >
//           <Image
//             source={{ uri: 'https://fastly.picsum.photos/id/1031/200/200.jpg?hmac=E9kagTB6aHlVO8qmJYAQYYGJP3IvPT_v0N3ju0Rc4Gw' }}
//             style={tw`h-12 w-12 rounded-lg`}
//           />
//           <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 2 (Light Sensor)</Text>
//         </TouchableOpacity>

//         {/* Sensor 3 */}
//         <View style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}>
//           <Image
//             source={{ uri: 'https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY' }}
//             style={tw`h-12 w-12 rounded-lg`}
//           />
//           <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 3</Text>
//         </View>

//         {/* Sensor 4 */}
//         <View style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}>
//           <Image
//             source={{ uri: 'https://fastly.picsum.photos/id/677/200/200.jpg?hmac=x54KZ3q80hA0Sc36RV2FUoDZdE3R31oaC988MA1YE2s' }}
//             style={tw`h-12 w-12 rounded-lg`}
//           />
//           <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 4</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Audio } from 'expo-av'; // Import Audio for microphone
import { Accelerometer, LightSensor, Gyroscope } from 'expo-sensors';
import * as Location from 'expo-location';

export default function FlatCards() {
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });
  const [lightData, setLightData] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
  const [noiseLevel, setNoiseLevel] = useState(0);

  let lightSubscription = null;

  // Handle Sensor 1 (Accelerometer)
  const handleSensor1Press = async () => {
    Accelerometer.setUpdateInterval(500);
    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      setAccelerometerData({ x, y, z });
    });

    setTimeout(() => {
      subscription?.remove();
      Alert.alert(
        'Accelerometer Values',
        `x: ${accelerometerData.x.toFixed(2)}, y: ${accelerometerData.y.toFixed(2)}, z: ${accelerometerData.z.toFixed(2)}`
      );
    }, 5000);
  };

  // Handle Sensor 2 (Light Sensor)
  const handleSensor2Press = async () => {
    if (Platform.OS === 'ios') {
      Alert.alert('Light Sensor Not Supported', 'This feature is not available on iOS devices.');
      return;
    }

    LightSensor.setUpdateInterval(500);
    lightSubscription = LightSensor.addListener(({ illuminance }) => {
      setLightData(illuminance);
    });

    setTimeout(() => {
      lightSubscription?.remove();
      Alert.alert('Light Sensor Value', `Illuminance: ${lightData.toFixed(2)} lux`);
    }, 5000);
  };

  // Handle Sensor 3 (Weather)
  const handleSensor3Press = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to fetch weather data.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const apiKey = 'bd8fddf7f7b23aa9faec95c716e4c7ad'; // Replace with your OpenWeatherMap API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data && data.main && data.main.temp) {
        Alert.alert(
          'Weather Information',
          `Temperature: ${data.main.temp}°C\nDescription: ${data.weather[0].description}`
        );
      } else {
        Alert.alert('Error', 'Unable to fetch temperature data. Please try again later.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch weather data. Please try again.');
    }
  };

  // Handle Sensor 4 (Gyroscope)
  const handleSensor4Press = async () => {
    Gyroscope.setUpdateInterval(500);
    const subscription = Gyroscope.addListener(({ x, y, z }) => {
      setGyroscopeData({ x, y, z });
    });

    setTimeout(() => {
      subscription?.remove();
      Alert.alert(
        'Gyroscope Values',
        `x: ${gyroscopeData.x.toFixed(2)}, y: ${gyroscopeData.y.toFixed(2)}, z: ${gyroscopeData.z.toFixed(2)}`
      );
    }, 5000);
  };

//   // Handle Sensor 5 (Microphone Noise Level)
//   const handleSensor5Press = async () => {
//     try {
//       // Request microphone permissions
//       const { granted } = await Audio.requestPermissionsAsync();
//       if (!granted) {
//         Alert.alert('Permission Denied', 'Microphone permission is required to detect noise.');
//         return;
//       }
  
//       // Start audio recording
//       const recording = new Audio.Recording();
//       await recording.prepareToRecordAsync({
//         android: {
//           extension: '.m4a',
//           outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
//           audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
//           sampleRate: 44100,
//           numberOfChannels: 2,
//           bitRate: 128000,
//         },
//         ios: {
//           extension: '.m4a',
//           audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
//           sampleRate: 44100,
//           numberOfChannels: 2,
//           bitRate: 128000,
//           linearPCMBitDepth: 16,
//           linearPCMIsBigEndian: false,
//           linearPCMIsFloat: false,
//         },
//       });
  
//       await recording.startAsync();
  
//       // Record for 5 seconds
//       setTimeout(async () => {
//         await recording.stopAndUnloadAsync();
//         const status = await recording.getStatusAsync();
  
//         if (status.isDoneRecording) {
//           // Simulate noise level detection
//           const amplitude = Math.random() * 100; // Replace with actual noise analysis if available
//           setNoiseLevel(amplitude);
//           Alert.alert('Microphone Noise Level', `Noise Level: ${amplitude.toFixed(2)} dB`);
//         } else {
//           Alert.alert('Error', 'Recording was not completed.');
//         }
//       }, 5000);
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', `Failed to detect noise. Error: ${error.message}`);
//     }  
//   };

  return (
    <View style={tw`flex-1 p-2`}>
      <ScrollView>
        {/* Sensor 1 */}
        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}
          onPress={handleSensor1Press}
        >
          <Image
            source={{ uri: 'https://fastly.picsum.photos/id/942/200/200.jpg?hmac=Gh7W-H3ZGmweB9STLwQvq-IHkxrVyawHVTKYxy-u9mA' }}
            style={tw`h-12 w-12 rounded-lg`}
          />
          <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 1 (Accelerometer)</Text>
        </TouchableOpacity>

        {/* Sensor 2 */}
        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}
          onPress={handleSensor2Press}
        >
          <Image
            source={{ uri: 'https://fastly.picsum.photos/id/1031/200/200.jpg?hmac=E9kagTB6aHlVO8qmJYAQYYGJP3IvPT_v0N3ju0Rc4Gw' }}
            style={tw`h-12 w-12 rounded-lg`}
          />
          <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 2 (Light Sensor)</Text>
        </TouchableOpacity>

        {/* Sensor 3 */}
        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}
          onPress={handleSensor3Press}
        >
          <Image
            source={{ uri: 'https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY' }}
            style={tw`h-12 w-12 rounded-lg`}
          />
          <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 3 (Weather)</Text>
        </TouchableOpacity>

        {/* Sensor 4 */}
        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}
          onPress={handleSensor4Press}
        >
          <Image
            source={{ uri: 'https://fastly.picsum.photos/id/677/200/200.jpg?hmac=x54KZ3q80hA0Sc36RV2FUoDZdE3R31oaC988MA1YE2s' }}
            style={tw`h-12 w-12 rounded-lg`}
          />
          <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 4 (Gyroscope)</Text>
        </TouchableOpacity>

        {/* Sensor 5 */}
        {/* <TouchableOpacity
          style={tw`flex-row items-center bg-gray-800 rounded-lg mb-2 shadow-lg p-2`}
          onPress={handleSensor5Press}
        >
          <Image
            source={{ uri: 'https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY' }}
            style={tw`h-12 w-12 rounded-lg`}
          />
          <Text style={tw`text-gray-200 text-sm font-bold ml-4`}>Sensor 5 (Microphone)</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}









