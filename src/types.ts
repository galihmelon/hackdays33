// @react-navigation/native-stack requires a `type` instead of an `interface`

import {Hackdays31TestProductsQueryData} from './data/TestProducts.graphql'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type StackParamList = {
  'Hackdays31.Home': undefined
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export type SnowBoard = Hackdays31TestProductsQueryData.ShopProductsByIds
