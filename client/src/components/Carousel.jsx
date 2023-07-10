// import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation , Autoplay } from 'swiper/modules';
import Icon from '@mdi/react';
import { mdiChevronLeft , mdiChevronRight } from '@mdi/js';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Img1 from '../assets/img/Cimg1.png'
import Img2 from '../assets/img/Cimg2.png'
import Img3 from '../assets/img/Cimg3.png'

const Carousel = () => {
    return (
        <div className='deslide-wrap'>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide',
                }}
            >
            <SwiperSlide>
                <div className='deslide-item'>
                    <div className='deslide-cover'>
                        <div className='deslide-cover-img'>
                            <img className='slide-img' src={Img1} alt='...'  />
                        </div>
                    </div>
                    <div className='slide-content'>
                        <small>Text</small>
                        <div className='pt-1 pb-1'>
                            <p className='h3'>Hello world</p>
                            <small className='me-6 discrip'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem doloremque rep 
                            </small>
                        </div>
                        <div>
                            <button type='button' className='btn btn-primary rounded-pill me-2' >
                                Learn More...
                            </button>
                            <button type='button' className='btn btn-secondary rounded-pill'>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='deslide-item'>
                    <div className='deslide-cover'>
                        <div className='deslide-cover-img'>
                            <img className='slide-img' src={Img2} alt='...' />
                        </div>
                    </div>
                    <div className='slide-content'>
                        <small>Text</small>
                        <div className='pt-1 pb-1'>
                            <p className='h3'>Hello world</p>
                            <small className='me-6 discrip'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem doloremque rep 
                            </small>
                        </div>
                        <div>
                            <button type='button' className='btn btn-primary rounded-pill me-2' >
                                Learn More...
                            </button>
                            <button type='button' className='btn btn-secondary rounded-pill'>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='deslide-item'>
                    <div className='deslide-cover'>
                        <div className='deslide-cover-img'>
                            <img className='slide-img' src={Img3} alt='...' /> 
                        </div>
                    </div>
                    <div className='slide-content'>
                        <small>Text</small>
                        <div className='pt-1 pb-1'>
                            <p className='h3'>Hello world</p>
                            <small className='me-6 discrip'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </small>
                        </div>
                        <div>
                            <button type='button' className='btn btn-primary rounded-pill me-2' >
                                Learn More...
                            </button>
                            <button type='button' className='btn btn-secondary rounded-pill'>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
                <div className='navigation'>
                    <div className="slider-button button-next-slide">
                        <Icon path={mdiChevronRight} size={2} />
                    </div>
                    <div className="slider-button button-prev-slide">
                        <Icon path={mdiChevronLeft} size={2} />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

// const Slider = () => {}


export default Carousel