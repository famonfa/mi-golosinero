import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation CreateProduct($name: String!, $category: String!, $description: String, $image: String, $quantityPricesAttributes: [QuantityPriceInput!]!) {
    createProduct(input: {  
      name: $name,
      category: $category,
      description: $description,
      image: $image,
      quantityPricesAttributes: $quantityPricesAttributes
    }) {
      product {
        id
        name
        description
        category
        image
        quantityPrices {
          id
          quantity
          price
        }
      }
      errors
    }
  }
`;