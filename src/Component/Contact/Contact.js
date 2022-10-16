import React from 'react'
import Layout from '../../Container/Layout'
import { useParams } from "react-router-dom";

const Contact = () => {

  let params = useParams();
  const orderId = params.orderId
  console.log("OrderId", orderId);

  return (
    <Layout>
      Contact
    </Layout>
  )
}

export default Contact