import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import SharedTitles from '../../../components/SharedTitles'

const Category = () => {
    return (
        <div className='my-20'>
                <SharedTitles
        title='From 11:00am to 10:00pm'
        subtitle='ORDER ONLINE'
        ></SharedTitles>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    
        <SwiperSlide >
            <img src={slide1} alt="" />
            <p className='text-2xl ml-10 md:ml-24 text-white/70 py-5 -mt-20'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <p className='text-2xl md:ml-24 ml-10 text-white/70 py-5  -mt-20'>Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <p className='text-2xl md:ml-24 ml-10 text-white/70 py-5 -mt-20'>Soup</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <p className='text-2xl md:ml-24 ml-10 text-white/70 py-5 -mt-20'>Dessert</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <p className='text-2xl md:ml-24 ml-10 text-white/70 py-5 -mt-20'>Salad</p>
        </SwiperSlide>
      
       
      </Swiper>
        </div>
    );
};

export default Category;