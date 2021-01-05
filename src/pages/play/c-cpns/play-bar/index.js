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
import classnames from 'classnames'
import setImgSize from '@/utils/imgSize'
import { Slider } from 'antd'
import Panel from '../panel'
import VolumeBar from './c-cpns/volume'
import {
  changePlayMethodAction,
  getSongDetailAction,
  getChangeCurrentSongAction,
  changeLyricIndexAction,
  togglePlayBarShowAction,
  togglePanelShowAction
} from '../../store/actionCreators'
import {
  MusicPlayerWrapper,
  PlayMethod,
  PlaySwitch,
  Lock
} from './style'

export default memo(() => {
  const { 
    method,
    playlist,
    song,
    lyric,
    lock,
    isPanelShow,
    currentSongIndex
   } = useSelector(state => ({
    method: state.getIn(['play', 'method']),
    playlist: state.getIn(['play', 'playlist']),
    song: state.getIn(['play', 'currentSong']),
    lyric: state.getIn(['play', 'lyric']),
    lock: state.getIn(['play', 'lock']),
    isPanelShow: state.getIn(['play', 'isPanelShow']),
    currentSongIndex: state.getIn(['play', 'currentSongIndex'])
  }), shallowEqual)
  const dispatch = useDispatch()

  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isVolPanelShow, setIsVolPanelShow] = useState(false)
  const [vol, setVol] = useState(50)
  const { dt: duration } = song

  const playerRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    playing && playerRef.current.play()
  }, [currentSongIndex])

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
    const currentLyricIndex = lyric.findIndex(lyric => lyric.time > currentTime)
    dispatch(changeLyricIndexAction(currentLyricIndex - 1))
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

  const togglePlayBar = useCallback(() => {
    dispatch(togglePlayBarShowAction())
  }, [])

  const updataVol = useCallback(vol => {
    setVol(vol)
    playerRef.current.volume = vol / 100
  },[playerRef])

  return (
    <MusicPlayerWrapper 
      lock={lock}
      className={classnames('sprite_playbar', {hiddenBar: !lock})}
    >
      
      {isPanelShow && <Panel />}
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
            <img src={setImgSize(song.al && song.al.picUrl, 34, 34)}/>
          </div>
          <div className="info-progress">
            <div className="singer-info">
              <span className="song-name">{song.name}</span>
              <i className="mv-icon sprite_playbar" />
              <span className="singer">{song.ar && song.ar[0] && song.ar[0].name}</span>
              <i className="source-icon sprite_playbar" />
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
            <i className="fav-icon sprite_playbar" />
            <i className="share-icon sprite_playbar" />
          </span>
          <div className="other-operations sprite_playbar">
            <div className="vol">
              {isVolPanelShow && <VolumeBar vol={vol} updataVol={updataVol}/>}
              <i 
                className="value-icon sprite_playbar" 
                onClick={() => setIsVolPanelShow(!isVolPanelShow)}
              />
            </div>
            <PlayMethod 
              className="sprite_playbar" 
              type={method}
              onClick={() => dispatch(changePlayMethodAction())}
            />
            <i 
              className="playlist-icon sprite_playbar"
              onClick={() => dispatch(togglePanelShowAction())}
            >
              <span className="playlist-num">{playlist.length}</span>
            </i>
          </div>
        </div>
      </div>
      <div className="lock sprite_playbar">
        <Lock
          className="lock-icon sprite_playbar" 
          onClick={() => togglePlayBar()}
          lock={lock}
        />
      </div>
    </MusicPlayerWrapper>
  )
})
