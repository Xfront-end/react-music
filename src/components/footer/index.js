import React, { memo } from 'react'

import { 
  FooterWrapper,
  FooterLeft,
  FooterRight
} from './style'

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <div className="wrap-v1 footer">
        <FooterLeft>
          <ul className="footer-services">
            <li>服务条款<span>|</span></li>
            <li>隐私政策<span>|</span></li>
            <li>儿童隐私政策<span>|</span></li>
            <li>版权投诉指引<span>|</span></li>
            <li>意见反馈<span>|</span></li>
          </ul>
          <div>
            <span>网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
          </div>
          <div>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：ncm5990@163.com</span>
          </div>
          <div>
            粤B2-20090191-18 <a>工业和信息化部备案管理系统网站</a>
          </div>
        </FooterLeft>
        <FooterRight>
          <ul>
            <li>
              <a></a>
              <span></span>
            </li>
            <li>
              <a></a>
              <span></span>
            </li>
            <li>
              <a></a>
              <span></span>
            </li>
            <li>
              <a></a>
              <span></span>
            </li>
          </ul>
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
