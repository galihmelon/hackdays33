import React, {useState} from 'react'
import {View, TextInput, Text} from 'react-native'

export const OpenAIComponent = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <View style={{padding: 16}}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
        placeholder="Enter some text"
      />
      <Text style={{padding: 10}}>You entered: {inputValue}</Text>
    </View>
  )
}
