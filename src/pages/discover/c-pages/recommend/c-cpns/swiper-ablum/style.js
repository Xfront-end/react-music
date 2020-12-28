import styled from 'styled-components'

export const NewAlbumsWrapper = styled.div`
  margin: 20px 0;
  padding: 20px 25px;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  position: relative;
  .album-wrapper {
    background-color: '#f5f5f5';
    .album-container {
      display: flex;
      justify-content: space-between;
      .album {
        width: 118px;
        .album-cover {
          height: 100px;
          width: 100px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .mask {
            width: 118px;
            height: 100px;
            background-position: 0 -570px;
          }
        }
        .album-info {
          margin-top: 5px;
          font-size: 12px;
          .name {
            color: #666666;
          }
          .singer {
            color: #cccccc;
          }
        }
      }
    }
  }
  .btn {
    width: 17px;
    height: 17px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .left-arrow {
    left: 4px;
    background-position: -280px -75px;
  }
  .right-arrow {
    right: 4px;
    background-position: -320px -75px;
  }
`