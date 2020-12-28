import React, {memo, useCallback, useEffect, useRef, useState} from 'react'
import moment from 'moment'
import { Slider } from 'antd'
import { 
  getSongDetail,
} from '@/request/player.js'
import {
  MusicPlayerWrapper
} from './style'

const id = 167876

export default memo(() => {
  const [song, setSong] = useState({}) 
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const { dt: duration } = song

  useEffect(() => {
    getSongDetail(id).then(res => {
      setSong(res.songs[0])
    })
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
      <audio 
        ref={playerRef} 
        src={`https://music.163.com/song/media/outer/url?id=${id}.mp3`} 
        onTimeUpdate={() => updataCurrentTime()}
      />
      <div className="wrap-v1 main">
        <div className="left">
          <i className="prev sprite_playbar"></i>
          <i className="play sprite_playbar" onClick={() => playSwitch()}></i>
          <i className="next sprite_playbar"></i>
        </div>
        <div className="middle">
          <div className="avator">
            <img src="http://p2.music.126.net/aXvj5BYRCoCWgdD40_CgXg==/109951165425092026.jpg?param=34y34"></img>
          </div>
          <div className="info-progress">
            <div className="singer-info">
              <span className="song-name">{song.name}</span>
              <i className="mv-icon sprite_playbar"></i>
              <span className="singer"></span>
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
            <i className="method-icon sprite_playbar"></i>
            <i className="playlist-icon sprite_playbar"></i>
          </span>
        </div>
      </div>
    </MusicPlayerWrapper>
  )
})
