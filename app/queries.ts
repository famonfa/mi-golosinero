import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query users0 {
    users0 {
      id
      name
      email
    }
  }
`;

export const GET_PRODUCTS = gql`
  query products {
    products {
      id
      name
      category
      description

      quantityPrices {
        price
        quantity
      }
      image
      createdAt
    }
  }
`;

export const GET_PRODUCT = gql` 
  query product($id: ID!) {
    product(id: $id) {
      id
      name
      category
      description
      image
      stocks {
        id
        units
        quantity  
      }
      quantityPrices {
        price
        quantity
      }
      productPrices {
        price
        provider {
          name
        }
      }
      createdAt
    }
  } 
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $quantity: Int!
    $description: String
    $price: Int
    $category: String!
  ) {
    createProduct(
      name: $name
      quantity: $quantity
      description: $description
      price: $price
      category: $category
    ) {
      product {
        id
        name
        quantity
        description
        price
        category
      }
      errors
    }
  }
`;


export const EDIT_PRODUCT = gql`
  mutation EditProduct(
    $name: String!
    $description: String
    $category: String!
    $id: ID!
    $quantityPricesAttributes: [QuantityPriceInput!]
    $image: String
  ) {
    editProduct(
      input: {
      id: $id
      name: $name
      description: $description
      quantityPricesAttributes: $quantityPricesAttributes
      category: $category
      image: $image
      }
    ) {
      product {
        id
        name
        description
        category
        image
      }
      errors
    }
  }
`;

export const DISCARD_PRODUCT = gql`
  mutation DiscardProduct($id: ID!) {
    discardProduct(input: { id: $id}) {
      success
      errors
    }
  }
`;



export const GET_PROVIDERS = gql`
  query providers {
    providers {
      id
      name
      phone
      address
      neighborhood
      description
     
    }
  }
`;

export const GET_PROVIDER = gql` 
  query provider($id: ID!) {
   
    provider(id: $id) {
      id
      name
      phone
      address
      neighborhood
      description
      createdAt
      productPrices {
        id
        price
        quantity
        product {
          name
        }
      }
    }
    }
`;

