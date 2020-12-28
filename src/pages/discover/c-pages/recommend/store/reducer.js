import { Map } from 'immutable'

import { 
  GET_BANNER,
  CHANGE_CURRENT_INDEX,
  GET_HOT_RECOMMEND,
  GET_NEW_ABLUM,
  GET_UP_RANKING,
  GET_NEW_RANKING,
  GET_ORIGINAL_RANKING
} from './constant'

const initalState = Map({
  banners: [],
  currentIndex: 0,
  hotRecommend: [],
  newAlbums: [],
  upRanking: {},
  newRanking: {},
  originalRanking: {}
})

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case GET_BANNER:
      return state.set('banners', action.banners)
    case CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', action.currentIndex)
    case GET_HOT_RECOMMEND: 
      return state.set('hotRecommend', action.hotRecommend)
    case GET_NEW_ABLUM:
      return state.set('newAlbums', action.newAlbums)
    case GET_UP_RANKING:
      return state.set('upRanking', action.playlist)
    case GET_NEW_RANKING:
      return state.set('newRanking', action.playlist)
    case GET_ORIGINAL_RANKING:
      return state.set('originalRanking', action.playlist)
    default:
      return state
  }
}
export default reducer
