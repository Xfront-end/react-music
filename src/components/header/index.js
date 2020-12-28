import React, { memo, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from '@/request/localData'

import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function Header() {
  const renderAnchor = (item, index) => {
    if(index < 3) {
      return (
        <li key={index}>
          <NavLink to={item.link}>{item.title}</NavLink>
        </li>
      )
    }
    return (
      <li key={index}><a href={item.link}>{item.title}</a></li>
    )
  }
  return (
    <Fragment>
      <HeaderWrapper>
        <div className="wrap-v1 header-wrapper">
          <HeaderLeft>
            <a className="netease-music-logo" href="/"> </a>
            <ul className="page-router">
              {
                headerLinks.map((item, index) => renderAnchor(item, index))
              }
            </ul>
          </HeaderLeft>
          <HeaderRight>
            <Input 
              placeholder="音乐/视频/电台/用户" 
              className="search" 
              prefix={<SearchOutlined/>}
              type="text"
            />
            <div className="author-center">创作者中心</div>
            <div className="login">登录</div>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </Fragment>
  )
})
