import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import "./GameSwiper.css"

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import { Pause, Play } from 'lucide-react'

export default function GameSwiper({ games }) {
  const [playingId, setPlayingId] = useState(null)
  const videoRefs = useRef({})

  const handleToggleVideo = (e, id) => {
    e.preventDefault()
    if (playingId === id) {
      if (videoRefs.current[id]) videoRefs.current[id].pause()
      setPlayingId(null)
    } else {
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId].pause()
      }
      if (videoRefs.current[id]) videoRefs.current[id].play()
      setPlayingId(id)
    }
  }

  return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 35,
          stretch: 200,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="gameSwiper"
      >
        {games.map((game) => {
          const isPlaying = playingId === game._id
          return (
            <SwiperSlide key={game._id}>
              <div className="gameSlider">
                <img src={game.img} alt={game.title} />

                {game.videoSrc && (
                  <video
                    ref={(el) => { if (el) videoRefs.current[game._id] = el }}
                    className={isPlaying ? 'playing' : ''}
                    src={game.videoSrc}
                    loop
                    muted
                  />
                )}

                <div className="content">
                  <h2>{game.title}</h2>
                  <p>{game.description}</p>
                  <div className="buttons">
                    <a href={game.orderLink || '#'} className="orderBtn">
                      Order Now
                    </a>
                    <a
                      href="#"
                      className={`playBtn${isPlaying ? ' playing' : ''}`}
                      onClick={(e) => handleToggleVideo(e, game._id)}
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      <span className="pauseIcon"><Pause /></span>
                      <span className="playIcon"><Play /></span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
  )
}