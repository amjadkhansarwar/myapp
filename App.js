
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import Header from './components/Header'
import CreateTodo from './components/Create-todo'
import Todos from './components/Todos'

export default function App() {

  return (
    <View style={styles.background}>
      {/* <Header /> */}
      <CreateTodo />
      {/* <Todos /> */}
      <Image source= {require('./images/header.png')}/>
      <Text>This is my app</Text>
     
      <Button title='Press me' onPress={()=>Alert.alert('simple Button Press')}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0000',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
