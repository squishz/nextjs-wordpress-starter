import { getApolloClient } from '../apollo'
import {
  QUERY_ALL_PAGES,
  getQueryPageById,
  getQueryPageByUri
} from './graphql/pages.gql'

/**
 * getPageById
 */
export async function getPageById (id) {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: getQueryPageById(id)
  })

  const page = [data?.data.page].map(mapPageData)[0]

  return {
    page
  }
}

/**
 * getPageByUri
 */
export async function getPageByUri (uri) {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: getQueryPageByUri(uri)
  })
  const page = data.data.pageBy

  return {
    page
  }
}

/**
 * getAllPages
 */
export async function getAllPages (options) {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: QUERY_ALL_PAGES
  })

  const pages = data?.data.pages.edges
    .map(({ node = {} }) => node)

  return {
    pages
  }
}
