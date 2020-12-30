import React, { memo, useRef } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
  PanelWrapper,
  PlayListWrapper,
  PlayListHeader,
  PlayList,
  LyricWrapper,
  LyricHeader,
  Lyric,
} from './style'
export default memo(() => {

  const { 
    playlist,
    song,
    lyric
   } = useSelector(state => ({
    playlist: state.getIn(['play', 'playlist']),
    song: state.getIn(['play', 'currentSong']),
    lyric: state.getIn(['play', 'lyric'])
  }))

  return (
    <PanelWrapper className="wrap-v1">
      <PlayListWrapper>
        <PlayListHeader>
          <div className="playlist-num">播放列表{playlist.length}</div>
          <div className="ops">
            <span><i className="fav-icon"></i>收藏全部</span>
            <span><i className="delete-icon"></i>清除</span>
          </div>
        </PlayListHeader>
        <PlayList>
          {
            playlist.map(item => {
              return (
                <li className="song-info" key={item.id}>
                  <div className="song-name">{item.name}</div>
                  <div className="other-info">
                    <span className="opers">
                      <i className="fav-icon">收藏</i>
                      <i className="share-icon">分享</i>
                      <i className="download-icon">下载</i>
                      <i className="delete-icon">删除</i>
                    </span>
                    <span className="singer-name">
                      {item.ar && item.ar[0] && item.ar[0].name}
                    </span>
                    <span className="duration">{moment(item.dt).format('mm:ss')}</span>
                    <i classNames="share-icon"></i>
                  </div>
                </li>
              )
            })
          }
        </PlayList>
      </PlayListWrapper>
      <LyricWrapper>
        <LyricHeader>
          <h3 className="song-name">{song.name}</h3>
        </LyricHeader>
        <Lyric>
          {
            lyric.map(item => {
              return (
                <li key={item.time} className="lryic-sentence">
                  {item.lyric}
                </li>
              )
            })
          }
        </Lyric>
      </LyricWrapper>
    </PanelWrapper>
  )
})
