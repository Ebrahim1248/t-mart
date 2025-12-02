import React, { useEffect, useState} from 'react'
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { Link, useParams } from 'react-router';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';

const SelectedProduct = () => {
    let [quantity,setQuantity]=useState(1);
    const [productData, setProductData] = useState({});
    const [images,setImages]=useState([]);
    const params =useParams();
    const [addToCart,setAddToCart]=useState();
    
    
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.id}`).then((res)=>{
            setProductData(res.data);
            const imgData = res.data.images.map((items)=>{
                return {
                    original: items,
                    thumbnail: items,
                }
            });
            setImages(imgData);
        });
    },[]);
             
    if(quantity<1){
        setQuantity(1);
    }
    let add;
    const handelAddToCart = () => {
        axios.post(`https://dummyjson.com/carts/add`, {
            userId: 1,
            products: [{
                id: params.id,
                quantity: quantity,
            }],
        }).then((res) => {
            setAddToCart(res.data);
            toast.success("product added to cart");
        }).catch(err => console.error("Error:", err));
    }
    
  return (
    <section className='container py-28'>
        <ToastContainer />
        <div className="grid grid-col-1 md:grid-cols-2 lg:flex lg:gap-2.5 ">
            
            <ImageGallery items={images} thumbnailPosition='left' showFullscreenButton={false} />
            
            <div className=" max-w-[540px] ml-4.5">
                <h2 className="text-primary text-3xl font-medium">{productData.title}</h2>
                <p className="pt-3 pb-6 text-xl text-secondary font-normal">({productData.rating})</p>
                <p className="text-secondary text-sm  font-normal">{productData.description}</p>
                <h3 className='pt-4 lg:pt-8 pb-2.5 lg:pb-6 text-3xl text-badge font-normal'>{productData.price}$</h3>
                <div className="flex gap-5 text-lg text-secondary font-normal">
                    <p className='pb-4.5 font-normal'>Stock:</p>
                    <div className=''>{productData.stock}</div>
                    
                </div>
                <div className="pt-7 pb-8">
                    <p className='pb-3.5 font-normal'>Size</p>
                    <div className="flex gap-5 text-sm text-primary font-normal">
                        <Link value="s" className='border-2 border-secondary px-1 inline-block cursor-pointer'>S</Link>  
                        <Link value="m" className='border-2 border-secondary px-1 inline-block cursor-pointer'>M</Link>  
                        <Link value="l" className='border-2 border-secondary px-1 inline-block cursor-pointer'>L</Link>  
                        <Link value="xl" className='border-2 border-secondary px-1 inline-block cursor-pointer'>XL</Link>
                        <Link value="xxl" className='border-2 border-secondary px-1 inline-block cursor-pointer'>XXL</Link>

                    </div>
                </div>
                <div className="flex items-center gap-4 py-8 ">
                    <p className='text-lg text-secondary font-normal'>Quantity :</p>
                    <button onClick={(()=>{setQuantity(--quantity)})}  className='text-sm text-primary font-normal' >-</button>
                    <span  className='text-sm text-primary font-normal'>{quantity}</span>
                    <button onClick={()=>setQuantity(++quantity)} className='text-sm text-primary font-normal' >+</button>
                    
                </div>
                <div className="flex gap-2 md:gap-6 md:my-6">
                    <button onClick={handelAddToCart}  className='border-2 border-secondary text-sm cursor-pointer text-secondary font-normal p-3'>Add to Cart</button>
                    <Link to="#" className='border-2 border-secondary text-sm text-secondary font-normal px-5 md:px-13 py-3'>Buy Now</Link>
                </div>
                <div className="flex gap-6">
                    <p className='text-lg text-secondary font-normal'>share</p>
                    <div className="flex gap-5 ">
                        <Link className=" border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><FaTwitter /></Link>
                        <Link className=" border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><TiSocialInstagram /></Link>
                        <Link className=" border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><FaFacebookF /></Link>
                        <Link className=" border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><FaGooglePlusG /></Link>  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
  
}

export default SelectedProduct
