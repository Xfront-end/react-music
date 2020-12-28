import React, { memo, useEffect, useCallback, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { 
  getRecommendBanner,
  changeIndexAction
 } from '../../store/actionCreator'

import { Carousel } from 'antd'
import { 
  BannerWrapper,
  TopSwiper
} from './style'

export default memo(() => {
  const carouselRef = useRef()
  const state = useSelector(state => ({
    banners: state.getIn(['recommend', 'banners']),
    currentIndex: state.getIn(['recommend', 'currentIndex'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendBanner())
  }, [dispatch])

  const changeCurrent = useCallback((from, to) => {
    dispatch(changeIndexAction(to))
  })

  
  const bannerBGI = state.banners[state.currentIndex] && (state.banners[state.currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <div>
      <TopSwiper bannerBGI={bannerBGI}>
        <BannerWrapper className="wrap-v2">
          <div className="left-banner">
            <Carousel effect="fade" autoplay beforeChange={changeCurrent} ref={carouselRef}>
              {
                state.banners && state.banners.map(banner => (
                  <div key={banner.url} className="banner-img-wrapper">
                    <a href={banner.url}>
                      <img src={banner.imageUrl} alt={banner.typeTitle} className="banner-img"/>
                    </a>
                  </div>
                ))
              }
            </Carousel>
          </div>
          <div className="download">
            <img />
          </div>
          <div className="back btn" onClick={() => carouselRef.current.prev()}></div>
          <div className="go btn" onClick={() => carouselRef.current.next()}></div>
        </BannerWrapper>
      </TopSwiper>
    </div>
  )
})
