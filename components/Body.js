import react from "react";
import { View,Text } from "react-native";

const Body= (props)=>{
  return(
    <View>
      <Text>
        {props.name}
      </Text>
    </View>
  )
}
export default Body