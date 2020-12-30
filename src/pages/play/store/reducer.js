import immutable from 'immutable'
import * as constant from './constant'
import { playlist as mockPlayList } from '@/request/localData.js'

const initalState = immutable.Map({
  currentSongIndex: 0,
  playlist: [
    ...mockPlayList
  ],
  currentSong: {},
  lyric: [],
  method: 0,
  SimiSong: [],
  SimiPlaylist: []
})

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case constant.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.payload)
    case constant.CHANGE_CURRENT_INDEX:
      return state.set('currentSongIndex', action.payload)
    case constant.CHANGE_LYRIC:
      return state.set('lyric', action.payload)
    case constant.CHANGE_PLAYLIST:
      return state.set('playlist', action.payload)
    case constant.CHANGE_SIMI_SONG:
      return state.set('SimiSong',  action.payload)
    case constant.CHANGE_SIMI_PLAYLIST:
      return state.set('SimiPlaylist', action.payload)
    case constant.CHANGE_PLAY_METHOD:
      return state.set('method', action.payload)
    default:
      return state;
  }
}

export default reducer