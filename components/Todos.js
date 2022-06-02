import React from 'react'
import { View, Text } from 'react-native'

const Todos = ({alltodos}) => {
  return (
    <View>
      <Text>{JSON.stringify(alltodos)}</Text>
    </View>
  )
}

export default Todos