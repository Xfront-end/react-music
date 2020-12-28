import styled from 'styled-components'
import spriteImg_1 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  background-color: #242424;
  color: #cccccc;
  font-size: 14px;
  .header-wrapper {
    justify-content: space-between;
    display: flex;
    height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .netease-music-logo {
    display: inline-block;
    width: 156px;
    height: 33px;
    background: url(${spriteImg_1}) no-repeat;
    background-position: 0px -19px;
    text-indent: -9999;
    font-size: 0;
  }
  .page-router {
    margin-left: 16px;
    display: flex;
    li {
      display:flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      &:last-child {
        a::after {
          position: absolute;
          content: " ";
          width: 28px;
          height: 19px;
          top: 20px;
          right: -15px;
          background: url(${spriteImg_1}) no-repeat;
          background-position: -190px 0;
        }
      }
      a {
        display: inline-block;
        height: 70px;
        line-height: 70px;
        color: #cccccc;
        position: relative;
        padding: 0 16px;
        &:hover {
          background-color: #000000;
          text-decoration: none;
        }
        &.active {
          &::after {
            position: absolute;
            content: ' ';
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%);
            background: url(${spriteImg_1}) no-repeat;
            background-position: -226px 0;
          }
        }
      }
    }
  }
`

export const HeaderRight = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  .search {
    border-radius: 19px;
    width: 158px;
    height: 32px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .author-center {
    margin: 0 16px;
    padding: 5px 14px;
    border: 1px solid #666666;
    border-radius: 16px;
  }
`
