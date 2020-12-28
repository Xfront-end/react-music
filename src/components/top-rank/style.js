import styled from 'styled-components'

export const RankWrapper = styled.div`
  width:230px;
  padding: 20px 0 0 19px;
`

export const RankHeader = styled.div`
  display: flex;
  .img-wrapper {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name-operation {
    margin: 10px 0 0 10px;
    color: #000000;
    font-size: 14px;
    font-weight: bold;
  }
`

export const RankList = styled.div`
  margin-top: 20px;
  .rank-item {
    display: flex;
    align-items: center;
    height: 32px;
    .order {
      font-size: 16px;
      padding: 0 10px;
    }
    &:nth-child(-n + 3) {
      .order {
        color: #C20C0C;
      }
    }
  }
`

export const RankFooter = styled.div`
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
  color: #000000;
`