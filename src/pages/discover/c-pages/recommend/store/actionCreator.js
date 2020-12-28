import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopList
} from '@/request/recommend'

import {
  GET_BANNER,
  CHANGE_CURRENT_INDEX,
  GET_HOT_RECOMMEND,
  GET_NEW_ABLUM,
  GET_UP_RANKING,
  GET_NEW_RANKING,
  GET_ORIGINAL_RANKING
} from './constant'

const getUpRankingAction = playlist => ({
  type: GET_UP_RANKING,
  playlist
})

const getNewRankingAction = playlist => ({
  type: GET_NEW_RANKING,
  playlist
})

const getOriginalRankingAction = playlist => ({
  type: GET_ORIGINAL_RANKING,
  playlist
})

const getNewAblumAction = newAlbums => ({
  type: GET_NEW_ABLUM,
  newAlbums
})

const getRecommendBannerAction = bannerData => ({
  type: GET_BANNER,
  banners: bannerData
})

const getHotRecommendsAction = hotRecommend => ({
  type: GET_HOT_RECOMMEND,
  hotRecommend
})

export const changeIndexAction = index => ({
  type: CHANGE_CURRENT_INDEX,
  currentIndex: index
})

export const getRecommendBanner = () => {
  return dispatch => {
    getTopBanner().then(res => {
      const { banners } = res
      dispatch(getRecommendBannerAction(banners))
    })
  }
}

export const getHotRecommends = () => {
  return dispatch => {
    getHotRecommend().then(res => {
      const { result } = res
      dispatch(getHotRecommendsAction(result))
    })
  }
}

export const getNewAblums = () => {
  return dispath => {
    getNewAlbum().then(res => {
      const { albums } = res
      dispath(getNewAblumAction(albums))
    })
  }
}

export const getRank = idx => {
  return async dispath => {
    const { playlist } = await getTopList(idx)
    switch(idx) {
      case 0:
        dispath(getNewRankingAction(playlist))
        break
      case 2:
        dispath(getOriginalRankingAction(playlist))
        break
      case 3:
        dispath(getUpRankingAction(playlist))
        break
      default:
    }
  }
}
