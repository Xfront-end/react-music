import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  CommonBarWrapper,
  BarLeft,
  BarList
} from './style'

const CommonBar = (props) => {
  const { list, title, moreHref, keywordsClick } = props
  return (
    <CommonBarWrapper>
      <BarLeft>
        <i className="bar-icon sprite_02"></i>
        <span className="bar-title">{title}</span>
        <BarList>
          {
            list.map((keyword, index) => (
              <li key={keyword} onClick={() => keywordsClick(keyword)}>
                {keyword}
                {index !== list.length - 1 && <span className="vartical-divder">|</span>}
              </li>
            ))
          }
        </BarList>
      </BarLeft>
      {
        moreHref && (
          <span className="more">
            <a href={moreHref}>
              更多<i className="more-icon sprite_02"></i>
            </a>
          </span>
        )
      }
    </CommonBarWrapper>
  )
}

CommonBar.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  moreHref: PropTypes.string
}
CommonBar.defaultProps = {
  list: [],
  title: '默认'
}

export default memo(CommonBar)
