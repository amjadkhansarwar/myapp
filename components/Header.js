import react from "react";
import { View,Text } from "react-native";
import { useState } from "react";
import Body from './Body'

const Header =()=>{
  const [name, setName] = useState()
return(
  <View>
    <Text>This is my Header</Text>
    <Body name = 'Amjad'/>
  </View>
)
}
export default Header