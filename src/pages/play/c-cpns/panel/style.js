import styled from 'styled-components'
import { backGroundMixin } from '@/utils/styleMixin'

export const PanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 47px;
  box-sizing: border-box;
  height: 301px;
  color: #cccccc;
  background-color: #1E1E1E;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`

export const PlayListWrapper = styled.div`
  width: 553px;
`

export const PanelHeader = styled.div`
  display: flex;
  padding: 0 10px 0 30px;
  font-size: 14px;
`

export const MainPanel = styled.div`
  display: flex;
`

export const PlayListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  width: 523px;
  .playlist-num {
    color: #e2e2e2;
  }
  .ops {
    .fav-all {
      vertical-align: middle;
      cursor: pointer;
      .fav-icon {
        margin-right: 5px;
        ${backGroundMixin(16, 16, -24, 0)};
        &:hover {
          ${backGroundMixin(16, 16, -24, -20)};
        }
      }
    }
    .clear {
      margin-left: 18px;
      cursor: pointer;
      .delete-icon {
        margin-right: 5px;
        ${backGroundMixin(13, 16, -51, 0)};
        &:hover {
          ${backGroundMixin(13, 16, -51, -20)};
        }
      }
    }
    
  }
`

export const PlayList = styled.ul`
  .song-info {
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    line-height: 30px;
    padding-left: 30px;
    position: relative;
    cursor: pointer;
    .pointer-icon {
      position: absolute;
      left:8px;
      ${backGroundMixin(10, 13, -182, 0)};
      vertical-align: middle;
    }
    .other-info {
      display: flex;
      align-items: center;
      .opers {
        visibility: hidden;
        margin-right: 10px;
        i {
          margin-right: 10px;
        }
        .fav-icon {
          ${backGroundMixin(16, 16, -24, 0)};
          &:hover {
            ${backGroundMixin(16, 16, -24, -20)};
          }
        }
        .share-icon {
          ${backGroundMixin(14, 16, 0, 0)};
          &:hover {
            ${backGroundMixin(14, 16, 0, -20)};
          }
        }
        .download-icon {
          ${backGroundMixin(14, 16, -57, -50)};
          &:hover {
            ${backGroundMixin(14, 16, -80, -50)};
          }
        }
        .delete-icon {
          ${backGroundMixin(13, 16, -51, 0)};
          &:hover {
            ${backGroundMixin(13, 16, -51, -20)};
          }
        }
      }
      .singer-name {
        width: 60px;
        margin-right: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
      .from-icon {
        margin-left: 36px;
        vertical-align: middle;
        ${backGroundMixin(14, 16, -80, -20)};
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
      .other-info {
        .opers {
          visibility: visible;
        }
      }
    }
    &.active {
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
    }
  }
`

export const LyricWrapper = styled.div`
  flex: 1;
  display: flex;
  .scroll-wrapper {
    justify-content: center;
    margin: 20px auto 21px auto;
    height: 219px;
    overflow: hidden;
    .bscroll-indicator {
      background-color: #868686!important;
      opacity: .8;
      border: 5px;
      border: none!important;
    }
  }
`

export const LyricHeader = styled.div`
  position: relative;
  height: 40px;
  line-height: 40px;
  text-align: center;
  flex: 1;
  .song-name {
    color: #e2e2e2;
  }
  .colse-panel {
    position: absolute;
    ${backGroundMixin(30, 30, -195, 9)};
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Lyric = styled.ul`
  flex: 1;
  text-align: center;
  .lryic-sentence {
    height: 32px;
    line-height: 32px;
    &.active {
      color: #ffffff;
    }
  }
  .help-icon {
    position: absolute;
    right: 18px;
  }
`


