import React, { memo, useRef } from 'react'
import { Carousel } from 'antd'
import { NewAlbumsWrapper } from './style'

const SiperAblum = (props) => {
  const { newAlbums } = props
  const carouselRef = useRef()
  return (
    <NewAlbumsWrapper>
      <Carousel ref={carouselRef} dots={false}>
        {
          [0, 1].map(i => {
            return (
              <div className="album-wrapper">
                <div className="album-container">
                  {
                    newAlbums
                      .slice(i * 5, i * 5 + 5)
                      .map(item => (
                        <a key={item.id}>
                          <div className="album">
                            <div className="album-cover">
                              <img src={item.picUrl} />
                              <a className="mask image_cover"></a>
                            </div>
                            <div className="album-info">
                              <p className="name text-nowrap">{item.name}</p>
                              <p className="singer text-nowrap">{item.company}</p>
                            </div>
                          </div>
                        </a>
                      ))
                  }
                </div>
              </div>
            )
          })
        }
      </Carousel>
      <span className="left-arrow sprite_02 btn" onClick={() => carouselRef.current.prev()}></span>
      <span className="right-arrow sprite_02 btn" onClick={() => carouselRef.current.next()}></span>
    </NewAlbumsWrapper>
  )
}

export default memo(SiperAblum)