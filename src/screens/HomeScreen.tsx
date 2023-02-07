import {Box, Text} from '@shopify/shop-minis-platform-sdk'
import {SafeAreaView} from 'react-native'

import {OpenAIComponent} from '../components/OpenAIComponent'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} backgroundColor="backgrounds-regular" paddingTop="m">
        <Text variant="heroNormal" marginBottom="s" textAlign="center">
          Ask GPT-3!
        </Text>
        <OpenAIComponent />
      </Box>
    </SafeAreaView>
  )
}
