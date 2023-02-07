import { DocumentNode } from "graphql-typed";
import { URL, Decimal, CurrencyCode } from "../node_modules/@shopify/shop-minis-platform-sdk/src/api/types";
export namespace Hackdays31TestProductsQueryPartialData {
  export interface ShopProductsByIdsFeaturedImage {
    __typename?: "Image" | null;
    id?: string | null;
    altText?: string | null;
    url?: URL | null;
  }
  export interface ShopProductsByIdsDefaultVariantCompareAtPrice {
    __typename?: "Money" | null;
    amount?: Decimal | null;
    currencyCode?: CurrencyCode | null;
  }
  export interface ShopProductsByIdsDefaultVariantPrice {
    __typename?: "Money" | null;
    amount?: Decimal | null;
    currencyCode?: CurrencyCode | null;
  }
  export interface ShopProductsByIdsDefaultVariantImage {
    __typename?: "Image" | null;
    id?: string | null;
    altText?: string | null;
    url?: URL | null;
  }
  export interface ShopProductsByIdsDefaultVariant {
    __typename?: "ProductVariant" | null;
    id?: string | null;
    title?: string | null;
    isFavorited?: boolean | null;
    compareAtPrice?: Hackdays31TestProductsQueryPartialData.ShopProductsByIdsDefaultVariantCompareAtPrice | null;
    price?: Hackdays31TestProductsQueryPartialData.ShopProductsByIdsDefaultVariantPrice | null;
    image?: Hackdays31TestProductsQueryPartialData.ShopProductsByIdsDefaultVariantImage | null;
  }
  export interface ShopProductsByIds {
    __typename?: "Product" | null;
    id?: string | null;
    title?: string | null;
    tags?: (string | null)[] | null;
    featuredImage?: Hackdays31TestProductsQueryPartialData.ShopProductsByIdsFeaturedImage | null;
    defaultVariant?: Hackdays31TestProductsQueryPartialData.ShopProductsByIdsDefaultVariant | null;
  }
  export interface Shop {
    __typename?: "Shop" | null;
    id?: string | null;
    name?: string | null;
    productsByIds?: (Hackdays31TestProductsQueryPartialData.ShopProductsByIds | null)[] | null;
  }
}
export interface Hackdays31TestProductsQueryPartialData {
  shop?: Hackdays31TestProductsQueryPartialData.Shop | null;
}
export namespace Hackdays31TestProductsQueryData {
  export interface Variables {
    shopId: string;
    productIds: string[];
  }
  export interface ShopProductsByIdsFeaturedImage {
    __typename: "Image";
    id?: string | null;
    altText?: string | null;
    url: URL;
  }
  export interface ShopProductsByIdsDefaultVariantCompareAtPrice {
    __typename: "Money";
    amount: Decimal;
    currencyCode: CurrencyCode;
  }
  export interface ShopProductsByIdsDefaultVariantPrice {
    __typename: "Money";
    amount: Decimal;
    currencyCode: CurrencyCode;
  }
  export interface ShopProductsByIdsDefaultVariantImage {
    __typename: "Image";
    id?: string | null;
    altText?: string | null;
    url: URL;
  }
  export interface ShopProductsByIdsDefaultVariant {
    __typename: "ProductVariant";
    id: string;
    title: string;
    isFavorited: boolean;
    compareAtPrice?: Hackdays31TestProductsQueryData.ShopProductsByIdsDefaultVariantCompareAtPrice | null;
    price: Hackdays31TestProductsQueryData.ShopProductsByIdsDefaultVariantPrice;
    image?: Hackdays31TestProductsQueryData.ShopProductsByIdsDefaultVariantImage | null;
  }
  export interface ShopProductsByIds {
    __typename: "Product";
    id: string;
    title: string;
    tags: string[];
    featuredImage?: Hackdays31TestProductsQueryData.ShopProductsByIdsFeaturedImage | null;
    defaultVariant: Hackdays31TestProductsQueryData.ShopProductsByIdsDefaultVariant;
  }
  export interface Shop {
    __typename: "Shop";
    id: string;
    name: string;
    productsByIds: (Hackdays31TestProductsQueryData.ShopProductsByIds | null)[];
  }
}
export interface Hackdays31TestProductsQueryData {
  shop?: Hackdays31TestProductsQueryData.Shop | null;
}
declare const document: DocumentNode<Hackdays31TestProductsQueryData, Hackdays31TestProductsQueryData.Variables, Hackdays31TestProductsQueryPartialData>;
export default document;