import React, { memo, useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import moment from 'moment'
import classnames from 'classnames'
import BScroll from 'better-scroll'
import {
  PanelWrapper,
  PanelHeader,
  MainPanel,
  PlayListWrapper,
  PlayListHeader,
  PlayList,
  LyricWrapper,
  LyricHeader,
  Lyric,
} from './style'
import { 
  togglePanelShowAction,
  getSongDetailAction,
  removePlayListAction
} from '../../store/actionCreators'
export default memo(() => {
  const dispatch = useDispatch()
  const { 
    playlist,
    song,
    lyric,
    lyricIndex,
    currentSongIndex
   } = useSelector(state => ({
    playlist: state.getIn(['play', 'playlist']),
    song: state.getIn(['play', 'currentSong']),
    lyric: state.getIn(['play', 'lyric']),
    lyricIndex: state.getIn(['play', 'lyricIndex']),
    currentSongIndex: state.getIn(['play', 'currentSongIndex'])
  }), shallowEqual) 
  const [Scroll, setScroll] = useState(null)
  const [listScroll, setListScroll] = useState(null)
  const lyricRef = useRef()
  const playListRef = useRef()
  useEffect(() => {
    const listScrollInstance = new BScroll(playListRef.current, {
      scrollbar: {
        fade: false,
        interactive: true
      },
      mouseWheel: true,
      bounce: false
    })
    const scrollInstance = new BScroll(lyricRef.current, {
      scrollbar: {
        fade: false,
        interactive: true
      },
      mouseWheel: true,
      bounce: false
    })
    setScroll(scrollInstance)
    setListScroll(listScrollInstance)
    return () => {
      setScroll(null)
      setListScroll(null)
    }
  }, [])

  useEffect(() => {
    Scroll && Scroll.refresh()
    listScroll && listScroll.refresh()
  }, [lyric, playlist])

  useEffect(() => {
    if(lyricIndex > 3 && lyricIndex < lyric.length - 3) {
      Scroll && Scroll.scrollTo(0, -(lyricIndex - 3) * 32, 400)
    }
  }, [lyricIndex])

  const handleClearPlaylist = () => {
    dispatch(removePlayListAction())
  }

  return (
    <PanelWrapper className="wrap-v1">
      <PanelHeader>
        <PlayListHeader>
          <div className="playlist-num">播放列表({playlist.length})</div>
          <div className="ops"> 
            <span className="fav-all">
              <i className="fav-icon sprite_playlist" />收藏全部
            </span>
            <span 
              className="clear"
              onClick={() => handleClearPlaylist()} 
            >
              <i className="delete-icon sprite_playlist"/>清除
            </span>
          </div>
        </PlayListHeader>
        <LyricHeader>
          <h3 className="song-name">{song.name}</h3>
          <i 
            className="colse-panel sprite_playlist" 
            onClick={() => dispatch(togglePanelShowAction())}
          />
        </LyricHeader>
      </PanelHeader>
      <MainPanel>
        <PlayListWrapper ref={playListRef}>
          {
            playlist.length > 0 &&
            <PlayList>
              {
                playlist.map((item, index) => {
                  return (
                    <li 
                      className={classnames("song-info", {active: index === currentSongIndex})}
                      key={item.id}
                      onClick={() => dispatch(getSongDetailAction(item.id))}
                    >
                      {currentSongIndex === index && <i className="pointer-icon sprite_playlist"/>}
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
          }
          {playlist.length === 0 && 
            <div className="no-music-tips">
              <p>
                😊您还没有添加任何音乐<br/>
                去首页发现音乐，或在我的音乐收听自己收藏的歌单。
              </p>
            </div>
          }
        </PlayListWrapper>
        <LyricWrapper>
          <div ref={lyricRef} className="scroll-wrapper">
            <Lyric>
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
          </div>
        </LyricWrapper>
      </MainPanel>
    </PanelWrapper>
  )
})
