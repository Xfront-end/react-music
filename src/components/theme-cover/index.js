import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  CoverWrapper
} from './style.js'

const ThemeCover = (props) => {
  const {
    picUlr,
    intro,
    playCount,
    size
  } = props
  return (
    <CoverWrapper width={size.width}>
      <div className="cover">
        <img src={`${picUlr}?param=${size.width}x${size.height}`} />
        <div className="play-bar sprite_covor">
          <div className="play-count"><i className="ear-player sprite_icon" />{playCount}</div>
          <i className="play-icon sprite_icon"></i>
        </div>
        <a className="glass-cover sprite_covor" href=""></a>
      </div>
      <p className="intro">
        {intro}
      </p>
    </CoverWrapper>
  )
}

ThemeCover.defaultProps = {
  size: {
    width: 140,
    height: 140
  }
}
export default memo(ThemeCover)