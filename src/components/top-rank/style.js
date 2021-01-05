import styled from 'styled-components'
import { backGroundHover } from '@/utils/styleMixin'

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
  width: 100%;
  .rank-item {
    display: flex;
    align-items: center;
    height: 32px;
    p {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .order {
      font-size: 16px;
      padding: 0 10px;
    }
    &:nth-child(-n + 3) {
      .order {
        color: #C20C0C;
      }
    }
    .ops {
      display: none;
      min-width: 90px;
      i {
        margin-right: 10px;
      }
      .play-icon {
        ${backGroundHover(17, 17, -267, -268, -267, -288)}
      }
      .add-to-icon {
        margin-top: 4px;
        margin-left: 1px;
        ${backGroundHover(17, 17, 0, -700, -22, -700)}
      }
      .fav-icon {
        ${backGroundHover(17, 17, -297, -268, -297, -288)}
      }
    }
    &:hover .ops{
      display: block;
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