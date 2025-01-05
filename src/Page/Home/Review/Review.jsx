import React, { useEffect, useState } from 'react';
import SharedTitles from '../../../components/SharedTitles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Review = () => {
    const [feedback,setFeedback]=useState([])
    useEffect(()=>{
        fetch('Reviews.json')
        .then(res=> res.json())
        .then(data=> setFeedback(data))
    },[])
    return (
        <section className='my-32'>
            <SharedTitles
            title={'What our client says'}
            subtitle={'Testimonials'}
            >
            </SharedTitles>
          <div className='p-10'>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {
        feedback.map(review=>   <SwiperSlide key={review._id}>
              <div className='p-5 space-y-5'>
              <Rating
               className='mx-auto '
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <img width="50" height="50" className='mx-auto my-5' src="https://img.icons8.com/ios-filled/50/quote-right.png" alt="quote-right"/>
            <p className='text-center'>{review.details}</p>
            <p className='text-center font-semibold text-[#D99904]'>{review.name}</p>
              </div>
        </SwiperSlide>)
      }
     
      </Swiper>

          </div>
        </section>
    );
};

export default Review;