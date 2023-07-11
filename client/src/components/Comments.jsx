import { useEffect } from "react";
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Comments = () => {

    useEffect(() => {
        document.getElementById("RC").classList.remove("comments-rect");
    })

    const removeCTS = () => {
        document.getElementById("TC").classList.remove("comments-topc");
        document.getElementById("RC").classList.add("comments-rect");
        // document.getElementById("TC").active = "false"
    }

    const removeCRS = () => {
        document.getElementById("RC").classList.remove("comments-rect");
        document.getElementById("TC").classList.add("comments-topc");
    }
    return (
        <div className="comments">
            <div className="d-flex flex-grow-1 p-4 position-relative">
                <div className="comments-topc comments-topca p-2" onClick={removeCRS} id = "TC" active="true">
                    <a className="link p-2">Top Comments</a>
                </div>
                <div className="ms-2 comments-rect comments-recta p-2" onClick={removeCTS} id="RC" active="false">
                    <a className="p-2 link">Recents</a>
                </div>
            </div>
            <div id="top-comments-content" className="comments-topc-cont">
                <div className="ms-5">
                    <Swiper
                        breakpoints={{
                            1023 : { slidesPerView: 5},
                            800 : {slidesPerView: 3},
                            630 : { slidesPerView: 2}
                        }}
                        spaceBetween={10}
                    >
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    Hello world
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=''>
                                    Hello world
                                </div>
                            </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default Comments;