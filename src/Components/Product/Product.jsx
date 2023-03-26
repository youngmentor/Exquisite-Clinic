import React from 'react'
import "./Product.css"
import Products from './ProductData'
import Header from '../Header/Header'
const Product = () => {
  return (
    <div className='Product_Main'>
      <Header />
      <div className="Product_Main_Wrap">
        <h1>Our Product</h1>
        <div className='Product_Card_Wrap'>
        {Products.map ((i)=>
          <div className='Product_Card'>
            
             <img src={i.img} alt='' className='Product_Image'/>
             <p className='Product_Details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit iure nesciunt eum reiciendis, iusto hic rem laboriosam vero. Laboriosam sit harum dignissimos voluptatem. Ullam earum quo quis itaque dolores!</p>
             <p className='Product_Price'>#1,000</p>
             
             <button className='Product_Checkout_Button'>Check Out</button>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product