// import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
// import FlatCards from "../components/moodifyComponents/FlatCards";
// import LinkButtons from "../components/moodifyComponents/LinkButtons";
// // import { HelloWave } from '@/components/HelloWave';
// // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // import { ThemedText } from '@/components/ThemedText';
// // import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (

//       <SafeAreaView style={{backgroundColor : "#212121", flex:1}}>

//        <Text style={styles.headingText}s>Moodify Test</Text>
//         <ScrollView>
//         <FlatCards />  
//           <LinkButtons url={"https://github.com/AyaanEhsan"}/> 
//         </ScrollView>

//       </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#E5E5E5',
//     paddingHorizontal: 10,
//     textAlign: "center",
//     paddingTop:30,
//     paddingBottom:15
// },
// });
import { SafeAreaView, Text, ScrollView } from 'react-native';
import FlatCards from "../components/moodifyComponents/FlatCards";
import LinkButtons from "../components/moodifyComponents/LinkButtons";
import tw from 'tailwind-react-native-classnames';

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-gray-900 flex-1`}>
      <Text style={tw`text-4xl font-bold text-gray-200 text-center py-4`}>Moodify Test</Text>
      <ScrollView>
        <FlatCards />
        <LinkButtons url={"https://github.com/AyaanEhsan"} />
      </ScrollView>
    </SafeAreaView>
  );
}

