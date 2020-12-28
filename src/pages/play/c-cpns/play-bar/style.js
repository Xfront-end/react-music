import styled from 'styled-components'

const backGroundMixin = (width, height, posX, poxY) => `
  display: inline-block;
  width: ${width}px;
  height: ${height}px;
  background-position: ${posX}px ${poxY}px;
  cursor: pointer
`

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
      }
      .play {
        margin: 0 10px;
        ${backGroundMixin(36, 36, 0, -165)};
      }
      .next {
        ${backGroundMixin(28, 28, -110, -130)};
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
      .mv-icon {
        ${backGroundMixin(19, 17, 0, -57)};
      }
      .source-icon {
        ${backGroundMixin(14, 15, -130, -103)};
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
        .method-icon {
          ${backGroundMixin(25, 25, -33, -344)};
        }
        .playlist-icon {
          ${backGroundMixin(60, 25, -42, -68)};
        }
      }
    }
  }
  
`
