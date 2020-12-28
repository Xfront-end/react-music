import styled from 'styled-components'

export const TopMenu = styled.div`
  box-sizing: border-box;
  height: 33px;
  line-height: 33px;
  background-color: #C20C0C;
  .menu-list {
    display: flex;
    padding-left: 195px;
    li {
      margin-right: 4rem;
      a {
        color: #ffffff;
        font-size: 12px;
        padding: 5px 10px;
        border-radius: 16px;
        &:hover {
          text-decoration: none;
          background-color: #9B0909;
        }
        &.active {
          background-color: #9B0909;
        }
      }
    }
  }
`
