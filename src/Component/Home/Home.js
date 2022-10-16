import React from 'react'
import Layout from '../../Container/Layout'
import Iphone from '../../Image/iphone-14-pro.jpg'
import Star from '../../Container/Star'
import SubmitStar from '../../Container/SubmitStar'

const Home = () => {
 
  return (
    <Layout>
      <div>Home</div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={Iphone} className="card-img-top" alt="..." style={{ height: '450px' }} />
        <div className="card-body">
          <h5 className="card-title">Apple iPhone 14 Pro Max (128GB, Deep Purple)</h5>
          <Star stars='3.5' reviews='40 customer reviews'></Star>
          <p className="card-text"></p>
          
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <SubmitStar />
    </Layout>
  )
}

export default Home