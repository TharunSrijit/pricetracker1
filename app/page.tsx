import React from 'react'
import Image from "next/image";
import Searchbar from '@/Components/Searchbar';
import HeroCarousel from '@/Components/HeroCarousel';

const Home = () => {
  return (
    <div>
      <section className='px-6 md:px-20 py-24 border-2 border-red-500'>
        <div className='flex max-xl:flex-col gap-16'>
            <div className='flex flex-col justify-center'>
                <p className='small-text'>
                  Smart Shopping Starts Here.
                  <Image 
                  src="/assets/icons/arrow-right.svg" 
                  alt="arrow-right" 
                  width={16} 
                  height={16}/>
                  
                </p>
                <h1 className='head-text'>
                  Unleash The Power of<span className='text-primary'>Pricewise</span>
                </h1>
                <p className='mt-6'>
                  Powerful blah blah blah
                </p>
                <Searchbar />
            </div>
            <HeroCarousel/>
        </div>
      </section>
      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['Apple Iphone','book','sneaker'].map
          ((product)=>(
            <div>{product}</div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home