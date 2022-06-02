import React, {useState}from 'react'
import Todos from './Todos';
import { View,TextInput,Text, Button,Alert } from "react-native";

const CreateTodo = () => {
  const [text, setText]= useState("")
  let  [array, setArray]= useState([])
  function addTodo(text){
    setArray([...array, text])
  }

  
  return (
    <View>
      <TextInput  placeholder='Write your todos' value={text} onChangeText={(newText) =>setText(newText) } />
      <Button title='Add'onPress= {() => 
         addTodo(text)
      }/>
      <Todos alltodos= {array}/>
    </View>
    
  )
}

export default CreateTodo