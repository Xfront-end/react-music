import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { dicoverMenu } from '@/request/localData'
import { TopMenu } from './style'

export default memo(() => {
  return (
    <TopMenu>
      <ul className="menu-list wrap-v1">
        {
          dicoverMenu.map(item => (
            <li className="menu-item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))
        }
      </ul>
    </TopMenu>
  )
})
