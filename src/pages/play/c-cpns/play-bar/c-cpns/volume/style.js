import styled from 'styled-components'
import { backGroundMixin } from '@/utils/styleMixin'
import playBarImg from '@/assets/img/playbar_sprite.png'
import spriteIcon from '@/assets/img/sprite_icon.png'

export const VolumeBar = styled.div`
  padding: 3px 0 16px 0;
  position: absolute;
  bottom: 41px;
  ${backGroundMixin(32, 113, 0, -503)};
  .ant-slider-rail {
    background: transparent;
  }
  .ant-slider-track {
    width: 4px;
    background: url(${playBarImg});
    background-position: -40px bottom;
  }
  .ant-slider-handle {
    border: none;
    background: url(${spriteIcon}) center center no-repeat;
    width: 18px;
    height: 20px;
    background-position: -40px -250px;
    margin-left: -7px;
  }
  .ant-slider:hover .ant-slider-rail {
    background: transparent;
  }
  .ant-slider-handle:focus {
    box-shadow: none;
    border: none;
    outline: none;
  }
`