import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    const testimonials = ["Hello", "Hi", "Yes"]

  return (
    <div className='relative'>
        <div className='absolute w-full h-[40%] bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
        >
            {testimonials.map((text) => (
                <div key={text}>
                    <p>{text}</p>
                </div>
            ))}
            
        </Carousel>
    </div>
);
}

export default Banner