import React, { memo, useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import moment from 'moment'
import classnames from 'classnames'
import { Slider } from 'antd'
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
  getSongDetailAction
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
  const [progress, setProgress] = useState(0)
  const [PulligBar, setPullingBar] = useState(false)

  const lyricRef = useRef()

  useEffect(() => {
    if(lyricIndex > 3) {
      lyricRef.current.scrollTo(0, (lyricIndex - 3) * 32)
    }
  }, [lyricIndex])

  const ulTotalHeight = useMemo(() => 219 + (lyric.length - 14) * 32 + 5)

  const scrollPanel = useCallback(p => {
    setPullingBar(true)
    setProgress(p)
    lyricRef.current.scrollTo(0, Math.round(ulTotalHeight * p / 100))
  }, [progress])

  const hanleSrollProgress = () => {
    if(!PulligBar) {
      setProgress(Math.round(lyricRef.current.scrollTop / ulTotalHeight * 100))
    }
  }

  return (
    <PanelWrapper className="wrap-v1">
      <PanelHeader>
        <PlayListHeader>
          <div className="playlist-num">播放列表({playlist.length})</div>
          <div className="ops"> 
            <span className="fav-all"><i className="fav-icon sprite_playlist" />收藏全部</span>
            <span className="clear"><i className="delete-icon sprite_playlist" />清除</span>
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
        <PlayListWrapper>
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
        </PlayListWrapper>
        <LyricWrapper count={lyric.length}>
          <Lyric ref={lyricRef} onScroll={() => hanleSrollProgress()}>
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
          <div className="lyric-scroll-bar">
            <Slider 
              vertical 
              reverse 
              tooltipVisible={false}
              onChange={p => scrollPanel(p)}
              value={progress}
              onAfterChange={() => setPullingBar(false)}
            />
          </div>
        </LyricWrapper>
      </MainPanel>
    </PanelWrapper>
  )
})
