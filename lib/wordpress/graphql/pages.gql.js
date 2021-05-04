import { gql } from '@apollo/client'

export const QUERY_ALL_PAGES = gql`
  {
    pages(first: 10000) {
      edges {
        node {
          content
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          id
          menuOrder
          slug
          title
          uri
          template {
            templateName
          }
        }
      }
    }
  }
`

export function getQueryPageById (id) {
  return gql`
    query {
      page(id: "${id}") {
        content
        featuredImage {
          node {
            altText
            caption
            id
            sizes
            sourceUrl
            srcSet
          }
        }
        id
        menuOrder
        slug
        title
        uri
      }
    }
  `
}

export function getQueryPageByUri (uri) {
  return gql`
    query {
      pageBy(uri: "${uri}") {
        content
        featuredImage {
          node {
            altText
            caption
            id
            sizes
            sourceUrl
            srcSet
          }
        }
        id
        menuOrder
        slug
        title
        uri
        template{
            templateName
            ... on Template_Homepage {
                templateName
            }
        }
      }
    }
  `
}
