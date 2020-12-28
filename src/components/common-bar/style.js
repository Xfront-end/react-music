import styled from 'styled-components'

export const CommonBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #C20C0C;
  .more {
    cursor: pointer;
    .more-icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
  
`
export const BarLeft = styled.div`
  .bar-icon {
    height: 33px;
    width: 35px;
    background-position: -225px -156px;
  }
  display: flex;
  .bar-title {
    font-size: 20px;
  }
`

export const BarList = styled.ul`
  display: flex;
  font-size: 12px;
  margin-left: 20px;
  align-items: center;
  li {
    cursor: pointer;
    .vartical-divder {
      padding: 0 16px;
      color: #cccccc;
      font-size: 14px;
    }
  }
  
`
