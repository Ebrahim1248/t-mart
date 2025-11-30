import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import PopularProduct from '../../layouts/ProductCard'
import Skeleton from "../../layouts/Skeleton.jsx";
import ProductCard from '../../layouts/ProductCard'
const Product = () => {
    const [data,setData]=useState([]);
    let[num,setNum]=useState(1);
    const [selectedCategory,setSelectedCategory]=useState("");
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState({
        total:0,
        limit:0,
        skip:1,
    })
    const [productCategory,setProductCategory]=useState([
            "all",
            "fragrances",
            "womens-bags",
            "home-decoration",
            "kitchen-accessories"
        ]);
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products${ selectedCategory && "/category/" + selectedCategory}?limit=20&skip=${page.skip}`).then((response)=>{
            setData(response.data.products);
            setLoading(false);
        })
    },[data,selectedCategory]);
  return (
    <section>
        <div className="container py-18 bg-background">
            <div className="flex items-center justify-between pb-16">
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
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                     {data.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>
            }
            <div className="flex gap-10 justify-center text-3xl text-primary font-medium pt-10">
                <button onClick={()=>{setPage((prev)=>({...prev, skip:(page.skip-20)}));page.skip<=0 && setPage((prev)=>({...prev, skip:(0)}));setNum(--num);num<=0&&setNum(1)}} className="cursor-pointer">previous</button>
                <h2 className="border-x-2 border-x-primary rounded-lg px-2.5">{num}</h2>
                <button onClick={()=>{setPage((prev)=>({...prev, skip:(page.skip+20)}));setNum(++num)}} className="cursor-pointer">next</button>
            </div>
        </div>
    </section>
  )
}

export default Product
