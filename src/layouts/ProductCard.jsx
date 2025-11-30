import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router'

const ProductCard = ({data}) => {
  const haldelAddToCart=()=>{
    
  };

  return (
    <div className='flex relative flex-col bg-white items-center gap-4 pb-3'>
        <Link to={`/shop/${data.id}`}><img src={data?.thumbnail} alt="Popular Product" /></Link>
        <Link to={`/shop/${data.id}`}><h2 className='text-primary text-sm text-center'>{data?.title}</h2></Link>
        
        <div className=" flex justify-around text-2xl gap-5 ">
          <p>{data?.price}</p>
          <TfiShoppingCart  onClick={haldelAddToCart}/>
        </div>
    </div>
  )
}

export default ProductCard

