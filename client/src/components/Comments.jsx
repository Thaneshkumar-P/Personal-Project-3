import { useEffect } from "react";
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Icon from '@mdi/react'
import { mdiAccountCircle, mdiThumbDown, mdiThumbUp } from "@mdi/js";

const Comments = () => {

    useEffect(() => {
        document.getElementById("RC").classList.remove("comments-rect");
    })

    const removeCTS = () => {
        document.getElementById("TC").classList.remove("comments-topc");
        document.getElementById("RC").classList.add("comments-rect");
        if(!document.getElementById("top-comments-content").classList.contains("active")){
            document.getElementById("top-comments-content").classList.toggle("active");
            document.getElementById("recent-comments-content").classList.toggle("active");
        }
    }

    const removeCRS = () => {
        document.getElementById("RC").classList.remove("comments-rect");
        document.getElementById("TC").classList.add("comments-topc");
        if(!document.getElementById("recent-comments-content").classList.contains("active")){
            document.getElementById("recent-comments-content").classList.toggle("active");
            document.getElementById("top-comments-content").classList.toggle("active");
        }
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
            <div>
                
            </div>
            <div>
            <div id="top-comments-content" className="comments-topc-cont active">
                <div className="ms-5 me-5">
                    <Swiper
                        breakpoints={{
                            1023 : { slidesPerView: 4},
                            800 : {slidesPerView: 3},
                            630 : { slidesPerView: 2}
                        }}
                        spaceBetween={15}
                    >
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            world hello
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div id="recent-comments-content" className="comments-rectc-cont">
                <div className="ms-5 me-5">
                    <Swiper
                        breakpoints={{
                            1023 : { slidesPerView: 4},
                            800 : {slidesPerView: 3},
                            630 : { slidesPerView: 2}
                        }}
                        spaceBetween={15}
                    >
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            world hello
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='comments-slide-deslide'>
                                    <div className="d-flex p-2 ms-2">
                                        <Icon path={mdiAccountCircle} size={1.5} className="mt-2" />
                                        <div className="mt-2 ms-2">
                                            hello world
                                        </div>
                                    </div>
                                    <div className="comment-centent ms-4 me-2">
                                        <div>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </small>
                                        </div>
                                    </div>
                                    <div className="comments-like ms-3">
                                        <Icon path={mdiThumbUp} size={1} className="me-2"/>
                                        <Icon path={mdiThumbDown} size={1} />
                                    </div>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Comments;