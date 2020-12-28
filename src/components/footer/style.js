import styled from 'styled-components'
import sprite_02 from '@/assets/img/sprite_footer_02.png'
import sprite_01 from '@/assets/img/sprite_footer_01.png'

export const FooterWrapper = styled.div`
  padding-top: 16px;
  background-color: #f2f2f2;
  border-top: 1px solid #999999;
  color: #666666;
  padding-bottom: 53px;
  .footer {
    display: flex;
    justify-content: space-between;
  }
`

export const FooterLeft = styled.div`
  .footer-services {
    color: #999999;
    display: flex;
    span {
      padding: 0 8px;
    }
  }
  div {
    line-height: 2;
  }
`

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    li {
      margin-left: 32px;
      text-align: center;
      a {
        background: url(${sprite_02}) no-repeat;
        display:block;
        width: 50px;
        height: 45px;
        background-size: 110px 450px;
      }
      span {
        background: url(${sprite_01}) no-repeat;
        display: block;
        width: 52px;
        height: 10px;
        background-size: 180px 100px;
        margin-top: 6px;
      }
      &:nth-child(1) {
        a {
          background-position: -60px -101px;
        }
        span {
          background-position: -1px -90px;
        }
      }
      &:nth-child(2) {
        a {
          background-position: 0 -101px;
        }
        span {
          background-position: 0 0;
        }
      }
      &:nth-child(3) {
        a {
          background-position: -60px -50px;
        }
        span {
          background-position: 0 -54px;
        }
      }
      &:nth-child(4) {
        a {
          background-position: -63px -101px;
        }
        span {
          background-position: -1px -72px;
        }
      }
    }
  }
`