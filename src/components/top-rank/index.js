import React,{ memo } from 'react'
import { useDispatch } from 'react-redux'
import { getSongDetailAction } from '@/pages/play/store/actionCreators'
import {
  RankWrapper,
  RankHeader,
  RankList,
  RankFooter
} from './style'

export default memo((props) => {
  const dispatch = useDispatch()
  const { rank: { name, tracks = [], coverImgUrl} } = props
  return (
    <RankWrapper>
      <RankHeader>
        <div className="img-wrapper">
          <img src={`${coverImgUrl}?param=100y100`}></img>
          
          <a 
            className="glass-cover sprite_covor"
            href="javascript:;"
          />
        </div>
        <div className="name-operation">
          <p>{name}</p>
          <div className="ops">
            <i className="play-icon sprite_02"/>
            <i className="fav-icon sprite_02"/>
          </div>
        </div>
      </RankHeader>
      <RankList>
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="rank-item">
                <span className="order">{index + 1}</span>
                <p>{item.name}</p>
                <div className="ops">
                  <i 
                    className="play-icon sprite_02" 
                    onClick={() => dispatch(getSongDetailAction(item.id))}
                  />
                  <i className="add-to-icon sprite_icon2" />
                  <i className="fav-icon sprite_02" />
                  <i></i>
                </div>
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
