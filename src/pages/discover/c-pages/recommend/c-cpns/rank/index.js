import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getRank
} from '../../store/actionCreator'
import TopRank from '@/components/top-rank'
import {
  RankListWrapper
} from './style'

export default memo(() => {
  const state = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originalRanking: state.getIn(['recommend', 'originalRanking']),
  }), shallowEqual)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getRank(0))
    dispatch(getRank(2))
    dispatch(getRank(3))
  }, dispatch)

  return (
    <RankListWrapper>
      <TopRank rank={state.upRanking}></TopRank>
      <TopRank rank={state.newRanking}></TopRank>
      <TopRank rank={state.originalRanking}></TopRank>
    </RankListWrapper>
  )
})
