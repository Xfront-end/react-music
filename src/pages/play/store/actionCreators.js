import {
  getSongDetail,
  getLyric,
  getSimiPlaylist,
  getSimiSong
} from '@/request/player'
import * as constant from './constant'

const changeCurrentSongAction = currentSongDetail => ({
  type: constant.CHANGE_CURRENT_SONG,
  payload: currentSongDetail
})

const changeCurrentSongIndex = idx => ({
  type: constant.CHANGE_CURRENT_INDEX,
  payload: idx
})

const changeLyricAction = lyric => ({
  type: constant.CHANGE_LYRIC,
  payload: lyric
})

const changePlaylistAction = playList => ({
  type: constant.CHANGE_PLAYLIST,
  payload: playList
})

const changeSimiPlaylist = simiPlaylist => ({
  type: constant.CHANGE_SIMI_PLAYLIST,
  payload: simiPlaylist
})

const changeSimiSong = simiSong => ({
  type: constant.CHANGE_SIMI_SONG,
  payload: simiSong
})

export const changePlayMethod = idx => ({
  type: constant.CHANGE_PLAY_METHOD,
  payload: idx
})

export const getSimiPlaylistAction = id => {
  return async dispatch => {
    const simiPlaylist = await getSimiPlaylist(id)
    dispatch(changeSimiPlaylist(simiPlaylist))
  }
}

export const getSimiSongAction = id => {
  return async dispatch => {
    const simiSong = await getSimiSong(id)
    dispatch(changeSimiSong(simiSong))
  }
}

export const getSongDetailAction = id => {
  return async (dispatch, getState) => {
    const { playList } = getState().getIn('player', 'playList')
    const idx = playList.findIndex(item => item.id === id) 
    if(idx > -1) {
      const currentSongDetail = playList[idx]
      dispatch(changeCurrentSongAction(currentSongDetail))
      dispatch(changeCurrentSongIndex(idx))
    }else {
      const songDetail = await getSongDetail(id)
      const newPlayList = [...playList, songDetail]
      dispatch(changeCurrentSongAction(songDetail))
      dispatch(changeCurrentSongIndex(newPlayList.length - 1))
      dispatch(changePlaylistAction(newPlayList))
    }
    const lyric = await getLyric(id)
    /** parse lyric */
    dispatch(changeLyricAction())
  }
}
