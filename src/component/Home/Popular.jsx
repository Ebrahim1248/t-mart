import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios';
import Skeleton from '../../layouts/Skeleton';
import ProductCard from '../../layouts/ProductCard';

const Popular = () => {
    const [data,setData]=useState([]);
        const [loading,setLoading]=useState(true);
    const [productCategory,setProductCategory]=useState([
        "all",
        "fragrances",
        "womens-bags",
        "home-decoration",
        "kitchen-accessories"
    ]);
    const [selectedCategory,setSelectedCategory]=useState("");
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products${ selectedCategory && "/category/" + selectedCategory}?limit=10&skip=0`).then((response)=>{
            setData(response.data.products);
            setLoading(false);
            
        })
    },[data,selectedCategory]);
  return (
    <section className='py-13 '>
        <div className="container bg-background pt-24 pb-8">
            <div className="flex flex-col items-center gap-7 mb-14">
                <h2 className="text-3xl font-normal text-primary ">Popular Products</h2>
                <p className="text-center max-w-[750px] text-sm font-normal text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod 
                    temp incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="flex items-center justify-between pb-12">
                <ul className='flex gap-10 flex-wrap'>
                    {productCategory.map((item) => (
                        <li key={item} >
                            <button onClick={()=>setSelectedCategory(item=="all"?"":item)} className='capitalize cursor-pointer'>{item}</button>
                        </li>
                    ))} 
                </ul>
                <Link to="#" className='inline-block px-5'>filter</Link>
            </div>
            {loading? <Skeleton/>:
                (<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                     {data.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>)
            }
        </div>
    </section>
  )
}

export default Popular
