import styled from 'styled-components'

import { backGroundMixin } from '@/utils/styleMixin'

export const MusicPlayerWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: 0 0;
  background-repeat: repeat-x;
  i {
    vertical-align: middle;
  }
  .main {
    height: 53px;
    display:flex;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      margin-top: 5px;
      .prev {
        ${backGroundMixin(28, 28, 0, -130)};
        &:hover {
          ${backGroundMixin(28, 28, -30, -130)};
        }
      }
      .next {
        ${backGroundMixin(28, 28, -80, -130)};
        &:hover {
          ${backGroundMixin(28, 28, -110, -130)};
        }
      }
    }
    .middle {
      display: flex;
      align-items: center;
      flex: 1;
      margin-top: 5px;
      margin-left: 32px;
      margin-right: 32px;
      color: #ffffff;
      .avator {
        margin-right: 10px;
      }
      .info-progress {
        flex: 1;
        .singer-info {
          .mv-icon {
            ${backGroundMixin(19, 17, 0, -57)};
          }
          .source-icon {
            ${backGroundMixin(14, 15, -130, -103)};
          }
          .singer {
            color: #666666;
            margin: 0 9px 0 18px;
          }
        }
        .slide-time {
          display: flex;
          align-items: center;
          .ant-slider {
            flex: 1;
            margin: 0;
            margin-right: 15px;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      margin-top: 8px;
      .fav-icon {
        ${backGroundMixin(25, 25, -88, -163)};
      }
      .share-icon {
        ${backGroundMixin(25, 25, -114, -163)};
      }
      .other-operations {
        padding-left: 13px;
        background-position: -147px -238px;
        vertical-align: middle;
        .value-icon {
          ${backGroundMixin(25, 25, -2, -248)};
        }
        .playlist-icon {
          ${backGroundMixin(60, 25, -42, -68)};
          .playlist-num {
            display: inline-block;
            line-height: 25px;
            color: #666666;
            font-size: 14px;
            margin-left: 34px;
          }
        }
      }
    }
  }
`

export const PlaySwitch = styled.i`
  ${props => {
    if(props.playStatus) {
      return `
        ${backGroundMixin(36, 36, 0, -165)};
        &:hover {
          ${backGroundMixin(36, 36, -40, -165)};
        }
      `
    }
    return `
      ${backGroundMixin(36, 36, 0, -204)};
      &:hover {
        ${backGroundMixin(36, 36, -40, -204)};
      }
    `
  }}
`

export const PlayMethod = styled.i`
  ${props => {
    switch(props.type) {
      case 0:
        return `
          ${backGroundMixin(25, 25, -3, -344)};
          &:hover {
            ${backGroundMixin(25, 25, -33, -344)};
          };
        `
      case 1:
        return `
          ${backGroundMixin(25, 25, -66, -248)};
          &:hover {
            ${backGroundMixin(25, 25, -93, -248)};
          };
        `
      case 2:
        return `
          ${backGroundMixin(25, 25, -66, -344)};
          &:hover {
            ${backGroundMixin(25, 25, -93, -344)};
          }
        `
      default:
        break
    }
  }};
`
