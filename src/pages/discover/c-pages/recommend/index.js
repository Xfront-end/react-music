import React, { memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { 
  getHotRecommends,
  getNewAblums,
} from './store/actionCreator'
import CommonBar from '@/components/common-bar'
import ThemeCover from '@/components/theme-cover'
import HTBanner from './c-cpns/banner'
import SwiperAblum from './c-cpns/swiper-ablum'
import Rank from './c-cpns/rank'

import {
  Recommend,
  RcommendLeft,
  RcommendRight,
  HotRecommend
} from './style'

export default memo (() => {

  const state = useSelector(state => ({
    hotRecommend: state.getIn(['recommend', 'hotRecommend']),
    newAlbums: state.getIn(['recommend', 'newAlbums']),
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommends())
    dispatch(getNewAblums())
  }, [dispatch])

  const history = useHistory()

  const keyswordsClickHandle = useCallback((keyword) => {
    history.push({
      pathname: '/discover/songs',
      cat: keyword
    })
  }, [history])

  return (
    <div>
      <HTBanner></HTBanner>
      <Recommend className="wrap-v2">
        <RcommendLeft>
          <CommonBar 
            title="热门推荐"
            list={['话语', '流行', '摇滚', '民谣', '电子']} 
            keywordsClick={keyswordsClickHandle}
            moreHref="/discover/songs"
          />
          <HotRecommend>
            {
              state.hotRecommend.slice(0, 8).map(item => (
                <ThemeCover 
                  key={item.id} 
                  picUlr={item.picUrl} 
                  intro={item.name} 
                  playCount={item.playCount}
                  size={{width: 140, height: 140}}
                />
              ))
            }
          </HotRecommend>
          <CommonBar 
            title="新碟上架"
            moreHref="/discover/songs"
          />
          <SwiperAblum newAlbums={state.newAlbums}/>
          <CommonBar 
            title="榜单"
            moreHref="/discover/songs"
          />
          <Rank></Rank>
        </RcommendLeft>
        <RcommendRight>
          
        </RcommendRight>
      </Recommend>
    </div>
  )
})
