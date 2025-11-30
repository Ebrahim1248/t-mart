import React from 'react'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <>
        <section className=" pb-12">
            <div className=" container flex justify-around  py-[310px]" >
              <div className="">
                <img src="/Home-banner.png" alt="Home-banner" />
              </div>
              <div className="a ">
                <h1 className='text-3xl font-normal text-primary max-w-[432px]  m-auto pb-6'>Awesome Product Collection In 2022</h1>
                <Link to="/shop" className="inline-block rounded-md ">Shop Now</Link>
              </div>

            </div>
        </section>
    </>
  )
}

export default Banner
