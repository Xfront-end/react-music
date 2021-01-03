import React, { memo, useState } from 'react'
import PropTypes from 'prop-types';
import { VolumeBar } from './style'
import { Slider } from 'antd'

const Volume = memo(props => {
  const { vol, updataVol } = props
  return (
    <VolumeBar className="vol-silder sprite_playbar">
      <Slider 
        vertical 
        tooltipVisible={false}
        value={vol}
        onChange={vol => updataVol(vol)}
      />
    </VolumeBar>
  )
})

VolumeBar.propTypes = {
  vol: PropTypes.number.isRequired,
  updataVol: PropTypes.func.isRequired
}

export default Volume