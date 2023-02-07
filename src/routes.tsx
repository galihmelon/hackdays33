import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {HomeScreen} from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

export const Hackdays31Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hackdays31.Home"
        component={HomeScreen}
        options={{title: 'Home', headerShown: false}}
      />
    </Stack.Navigator>
  )
}
