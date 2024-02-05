import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [number, setNumber] = useState(0);

  const handleMinus = () => {
    setNumber(number - 1);
  };

  const handlePlus = () => {
    setNumber(number + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>This is my counter</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.number}>{number}</Text>
      </View>
      <View style={styles.numberBox}>
        <TouchableOpacity 
          style= {number <= 0 ? styles.disabledButton : styles.minusButton}
          onPress={handleMinus} disabled={number <= 0}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style= {number >= 10 ? styles.disabledButton : styles.plusButton}
          onPress={handlePlus} disabled={number >= 10}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  box: {
    flex : 1,
    justifyContent: 'center',
    alignItems : 'center',
  },
  title: {
    color: '#333031',
    fontSize: 45,
    fontWeight: 'bold',
  },
  number : {
    flex: 1,
    color: '#167321',
    fontWeight: 'bold',
    fontSize: 150,
    marginTop: 30,
  },
  buttonText: {
    color : 'white',
    fontSize : 50,
    fontWeight : '900',
    paddingBottom: 3,
    alignSelf: 'center',
  },
  numberBox: {
    flex : 1,
    flexDirection :'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 30
  },
  minusButton : {
    backgroundColor : '#ff7043',
    width : 80,
    height : 80,
    justifyContent : 'center',
    alignContent : 'center',
    borderRadius : 40,
  },
  plusButton : {
    backgroundColor : '#29b6f6',
    width : 80,
    height : 80,
    justifyContent : 'center',
    alignContent : 'center',
    borderRadius : 40,
  },
  disabledButton : {
    backgroundColor : '#a9a9a9',
    width : 80,
    height : 80,
    justifyContent : 'center',
    alignContent : 'center',
    borderRadius : 40,
  },
});
