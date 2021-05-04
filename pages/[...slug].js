import React from 'react'
import dynamic from 'next/dynamic'
import _ from 'lodash'
import { getPageByUri, getAllPages } from '../lib/wordpress/pages'

export default function Page ({ page }) {
  /**
   * Dynamically load the template file based on wordpress its template name
   * Make sure the file in the template directory has cammelcased name as set in wordpress template
   * Make sure that any template specifc fields are added as a fragment to the query in /lib/wordpress/graphql/pages.graphql
   */
  const Template = dynamic(() =>
    import(`../templates/${_.camelCase(page.template.templateName)}`)
  )
  return <Template page={page} />
}

export async function getStaticProps ({ params = {} }, ...rest) {
  const { slug } = params

  const { page } = await getPageByUri(slug)
  return {
    props: {
      page
    }
  }
}

export async function getStaticPaths () {
  const { pages } = await getAllPages()

  const paths = pages.map(({ uri }) => {
    const slug = uri.replace(/^\/|\/$/g, '').split('/')
    return {
      params: {
        slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}
