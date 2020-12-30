import {
  getSongDetail,
  getLyric,
  getSimiPlaylist,
  getSimiSong
} from '@/request/player'
import * as constant from './constant'
import { randomRangeNum } from '@/utils/random'
import { parseLyric } from '@/utils/parseLyric.js'

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

const PlayMethodAction = idx => ({
  type: constant.CHANGE_PLAY_METHOD,
  payload: idx
})

export const changePlayMethodAction = () => {
  return (dispatch, getState) => {
    let method = getState().getIn(['play', 'method'])
    method += 1
    if(method > 2) {
      method = 0
    }
    dispatch(PlayMethodAction(method))
  }
}

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
    const playlist = getState().getIn(['play', 'playlist'])
    const idx = playlist.findIndex(item => item.id === id) 
    if(idx > -1) {
      const currentSongDetail = playlist[idx]
      dispatch(changeCurrentSongAction(currentSongDetail))
      dispatch(changeCurrentSongIndex(idx))
    }else {
      const { songs: songDetail } = await getSongDetail(id)
      const newPlaylist = [...playlist, songDetail && songDetail[0]]
      dispatch(changeCurrentSongAction(songDetail && songDetail[0]))
      dispatch(changeCurrentSongIndex(newPlaylist.length - 1))
      dispatch(changePlaylistAction(newPlaylist))
    }
    const { lrc } = await getLyric(id)
    dispatch(changeLyricAction(parseLyric(lrc.lyric)))
  }
}

export const getChangeCurrentSongAction = index => {
  return async (dispatch, getState) => {
    const method = getState().getIn(['play', 'method'])
    const currentIndex = getState().getIn(['play', 'currentSongIndex'])
    const playlist = getState().getIn(['play', 'playlist'])

    let nextIndex

    switch(method) {
      case 0: //order play
        nextIndex = currentIndex + index
        if(nextIndex < 0) {
          nextIndex = playlist.length - 1
        }
        if(nextIndex > playlist.length - 1) {
          nextIndex = 0
        }
        break
      case 1://random play
        nextIndex = randomRangeNum(playlist.length)
        while(nextIndex === currentIndex) {
          nextIndex = randomRangeNum(playlist.length)
        }
        break
      default:
        break
    }  
    const currentSong = playlist[nextIndex]
    dispatch(changeCurrentSongIndex(nextIndex))
    dispatch(changeCurrentSongAction(currentSong))
    const { lrc } = await getLyric(currentSong.id)
    dispatch(changeLyricAction(parseLyric(lrc.lyric)))
  }

}
