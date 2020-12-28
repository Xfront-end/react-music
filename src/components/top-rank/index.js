import React,{ memo } from 'react'

import {
  RankWrapper,
  RankHeader,
  RankList,
  RankFooter
} from './style'

export default memo((props) => {
  const { rank: { name, tracks = [], coverImgUrl} } = props
  return (
    <RankWrapper>
      <RankHeader>
        <div className="img-wrapper">
          <img src={`${coverImgUrl}?param=100y100`}></img>
        </div>
        <div className="name-operation">
          <p>{name}</p>
          <div>
            <i></i>
            <i></i>
          </div>
        </div>
      </RankHeader>
      <RankList>
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="rank-item">
                <span className="order">{index + 1}</span>
                {item.name}
              </div>
            )
          })
        }
      </RankList>
      <RankFooter>
        <a>查看全部&gt;</a>
      </RankFooter>
    </RankWrapper>
  )
})
