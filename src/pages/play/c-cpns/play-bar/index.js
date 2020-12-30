import 
  React, 
  { 
    memo, 
    useCallback, 
    useEffect, 
    useRef, 
    useState 
  }  from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import moment from 'moment'
import { Slider } from 'antd'
import Panel from '../panel'
import {
  changePlayMethodAction,
  getSongDetailAction,
  getChangeCurrentSongAction
} from '../../store/actionCreators'
import {
  MusicPlayerWrapper,
  PlayMethod,
  PlaySwitch
} from './style'

export default memo(() => {
  const { 
    method,
    playlist,
    song,
   } = useSelector(state => ({
    method: state.getIn(['play', 'method']),
    playlist: state.getIn(['play', 'playlist']),
    song: state.getIn(['play', 'currentSong']),
  }), shallowEqual)
  const dispatch = useDispatch()

  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const { dt: duration } = song

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
    console.log(song)
  }, [])

  const playerRef = useRef()

  const playSwitch = () => {
    if(playing) {
      playerRef.current.pause()
      setPlaying(false)
    }else {
      playerRef.current.play()
      setPlaying(true)
    }
  }

  const changeSong = useCallback(index => {
    dispatch(getChangeCurrentSongAction(index))
  })

  const updataCurrentTime = useCallback(() => {
    if(isChange) return
    const currentTime = playerRef.current.currentTime * 1000
    const progress = currentTime / duration * 100
    setCurrentTime(currentTime)
    setProgress(progress)
  })

  const progressChangeHandler = useCallback(progress => {
    setIsChange(true)
    setProgress(progress)
    setCurrentTime(duration * progress / 100)
  })

  const afterChangeHandler = useCallback(progress => {
    setIsChange(false)
    playerRef.current.currentTime = progress / 100 * duration / 1000
  })
    
  return (
    <MusicPlayerWrapper className="sprite_playbar">
      <Panel></Panel>
      <audio 
        ref={playerRef} 
        src={`https://music.163.com/song/media/outer/url?id=${song.id}.mp3`} 
        onTimeUpdate={() => updataCurrentTime()}
      />
      <div className="wrap-v1 main">
        <div className="left">
          <i 
            className="prev sprite_playbar" 
            onClick={() => changeSong(-1)}
          />
          <PlaySwitch 
            className="sprite_playbar" 
            onClick={() => playSwitch()}
            playStatus={playing}
          />
          <i 
            className="next sprite_playbar" 
            onClick={() => changeSong(1)}
          />
        </div>
        <div className="middle">
          <div className="avator">
            <img src="http://p2.music.126.net/aXvj5BYRCoCWgdD40_CgXg==/109951165425092026.jpg?param=34y34"></img>
          </div>
          <div className="info-progress">
            <div className="singer-info">
              <span className="song-name">{song.name}</span>
              <i className="mv-icon sprite_playbar"></i>
              <span className="singer">{song.ar && song.ar[0] && song.ar[0].name}</span>
              <i className="source-icon sprite_playbar"></i>
            </div>
            <div className="slide-time">
              <Slider 
                value={progress} 
                onChange={progress => progressChangeHandler(progress)}
                onAfterChange={progress => afterChangeHandler(progress)}
              />
              <span className="time">
                {moment(currentTime).format('mm:ss')}/{moment(duration).format('mm:ss')}
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <span>
            <i className="fav-icon sprite_playbar"></i>
            <i className="share-icon sprite_playbar"></i>
          </span>
          <span className="other-operations sprite_playbar">
            <i className="value-icon sprite_playbar"></i>
            <PlayMethod 
              className="sprite_playbar" 
              type={method}
              onClick={() => dispatch(changePlayMethodAction())}
            />
            <i className="playlist-icon sprite_playbar">
              <span className="playlist-num">{playlist.length}</span>
            </i>
          </span>
        </div>
      </div>
    </MusicPlayerWrapper>
  )
})
