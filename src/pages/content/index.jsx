import React from 'react'
import Layout from '../../components/layout'
import BlogContent from '../../components/blogContent'

function Content({blogs}) {
  return (
    <Layout>
    <BlogContent blogs={blogs}/>
    </Layout>
  )
}

export default Content