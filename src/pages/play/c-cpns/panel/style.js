import styled from 'styled-components'

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
      .opers {
        visibility: hidden;
        margin-right: 10px;
      }
      .singer-name {
        width: 50px;
        margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`

export const LyricWrapper = styled.div`
  flex: 1;
`

export const LyricHeader = styled.div`
  .song-name {
    text-align: center;
    color: #666666;
  }
`

export const Lyric = styled.ul`
  height: 250px;
  text-align: center;
  overflow: scroll;
  overflow-x: hidden;
  .lryic-sentence {
    height: 30px;
    line-height: 32px;
  }
`


