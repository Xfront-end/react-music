import styled from 'styled-components'
import { backGroundMixin } from '@/utils/styleMixin'

export const PanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 48px;
  display: flex;
  box-sizing: border-box;
  height: 301px;
  color: #666666;
  background-color: #ffffff;
`

export const PlayListWrapper = styled.div`
  width: 558px;
`

export const PlayListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  .ops {
    .fav-all {
      vertical-align: middle;
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
    line-height: 30px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
      .other-info {
        .opers {
          visibility: visible;
        }
      }
    }
    .other-info {
      display: flex;
      align-items: center;
      .opers {
        visibility: hidden;
        margin-right: 10px;
        i {
          margin-right: 5px;
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
        width: 50px;
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
  }
`

export const LyricWrapper = styled.div`
  flex: 1;
`

export const LyricHeader = styled.div`
  position: relative;
  height: 40px;
  line-height: 40px;
  .song-name {
    text-align: center;
    color: #666666;
  }
  .colse-panel {
    position: absolute;
    ${backGroundMixin(30, 30, -195, 9)};
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Lyric = styled.ul`
  height: 219px;
  text-align: center;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: relative;
  margin: 20px 0 21px 0;
  box-sizing: border-box;
  .lryic-sentence {
    height: 32px;
    line-height: 32px;
    &.active {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  .help-icon {
    position: absolute;
    right: 18px;
  }
`


