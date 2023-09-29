import React from 'react'
import Layout from '../../components/layout'
import Blogs from '../../components/blogs'

function Home({blogs}) {
  return (
    <Layout>
    <Blogs blogs={blogs}/>
    </Layout>
  )
}

export default Home