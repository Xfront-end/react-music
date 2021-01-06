import styled from 'styled-components'

export const CoverWrapper = styled.div`
  width: ${props => (props.width || '140')}px;
  margin: 20px 0;
  .cover {
    position: relative;
    .play-bar {
      color: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-position: 0 -537px;
      padding: 0 10px;
      height: 27px;
      .ear-player {
        margin-right: 5px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }
      .play-icon {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
    .glass-cover {
      text-indent: -999;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0px 0px;
    }
  }
  .intro {
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
`
