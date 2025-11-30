import React from 'react'
import ShopBanner from '../layouts/ShopBanner'
import SelectedProduct from '../productDetails/SelectedProduct'
import Description from '../productDetails/Description'

const ProductDetail = () => {
  
  return (
    <>
      <ShopBanner pageName="product Detail"/>
      <SelectedProduct/>
      <Description/>
    </>
  )
}

export default ProductDetail

