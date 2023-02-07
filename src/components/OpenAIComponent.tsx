import {useState} from 'react'
import {View, TextInput, Text} from 'react-native'

export const OpenAIComponent = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <View style={{padding: 16}}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 6}}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
        placeholder="Write a tagline for an ice cream shop."
      />
      <Text style={{paddingTop: 10}}>You entered:</Text>
      <Text style={{paddingTop: 10}}>{inputValue}</Text>
    </View>
  )
}
