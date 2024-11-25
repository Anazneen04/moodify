import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const LinkButtons = ({ url }) => {
  function handlePress() {
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Predict mood</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Find Song</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FFC107', // Dodger Blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 10
  },
  buttonText: {
    color: '#212121', // White
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LinkButtons;