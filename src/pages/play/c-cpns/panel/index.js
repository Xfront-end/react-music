import React, { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import classnames from 'classnames'
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
    lyric,
    lyricIndex
   } = useSelector(state => ({
    playlist: state.getIn(['play', 'playlist']),
    song: state.getIn(['play', 'currentSong']),
    lyric: state.getIn(['play', 'lyric']),
    lyricIndex: state.getIn(['play', 'lyricIndex'])
  }))

  const lyricRef = useRef()

  useEffect(() => {
    if(lyricIndex > 3) {
      lyricRef.current.scrollTo(0, (lyricIndex - 3) * 32)
    }
  }, [lyricIndex])

  return (
    <PanelWrapper className="wrap-v1">
      <PlayListWrapper>
        <PlayListHeader>
          <div className="playlist-num">播放列表({playlist.length})</div>
          <div className="ops"> 
            <span className="fav-all"><i className="fav-icon sprite_playlist" />收藏全部</span>
            <span className="clear"><i className="delete-icon sprite_playlist" />清除</span>
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
                      <i className="fav-icon sprite_playlist" />
                      <i className="share-icon sprite_playlist" />
                      <i className="download-icon sprite_playlist" />
                      <i className="delete-icon sprite_playlist" />
                    </span>
                    <span className="singer-name">
                      {item.ar && item.ar[0] && item.ar[0].name}
                    </span>
                    <span className="duration">{moment(item.dt).format('mm:ss')}</span>
                    <i className="from-icon sprite_playlist" />
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
          <i className="colse-panel sprite_playlist" />
        </LyricHeader>
        <Lyric ref={lyricRef}>
          {
            lyric.map((item, index) => {
              return (
                <li 
                  key={item.time} 
                  className={classnames('lryic-sentence', {active: index === lyricIndex})}
                >
                  {item.lyric}
                </li>
              )
            })
          }
          <i className="help-icon sprite_playlist" />
        </Lyric>
      </LyricWrapper>
    </PanelWrapper>
  )
})
