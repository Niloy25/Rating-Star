import React from 'react'
import Layout from '../../Container/Layout'
import {useSearchParams} from 'react-router-dom'

const About = () => {

  const [params] = useSearchParams();
  console.log(params.get("orderId"));
  console.log(params.get("catId"));

  return (
    <Layout>
      About
    </Layout>
  )
}

export default About