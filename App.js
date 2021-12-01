import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Alert, ActivityIndicator, Button } from 'react-native';

export default function App() {
  const alertPress = () => {
    Alert.alert(
      "Respect the rules !",
    )
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.textContainer}>

        <Text style={[styles.text, styles.text1]}>Itadakimasu !</Text>
        <Text style={[styles.text, styles.text2]}>Urusai baka !</Text>
        <Text style={[styles.text, styles.text3]}>Sumimasen sensei.</Text>
 
        <Image 
          style={styles.img} 
          source={{uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',}} 
        />
        <Image 
          style={styles.img} 
          source={require('./assets/konexio-logo.png')} 
        />

        <Pressable onPress={alertPress} style={styles.button}>
          <Text style={[styles.text2, styles.text3]}>Don't click</Text>
        </Pressable>
        
      </View>

      <ActivityIndicator style={styles.activity} size="large" color="white" />

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
  },
  textContainer: {
    backgroundColor: 'white',
  },
  text: {
    marginTop: 80,
    marginBottom: 80,
  },
  text1: {
    fontSize: 30,
  },
  text2: {
    textAlign: 'center',
  },
  text3: {
    fontWeight: 'bold',
  },
  img: {
    width: 124,
    height: 40,
  },
  button: {
    backgroundColor: "yellow",
    padding: 10,
    margin: 40,
    borderRadius: 30,
  },
  activity: {
    margin: 20,
  }
});
