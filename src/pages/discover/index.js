import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import HTMenu from '@/components/top-menu'

export default memo(function HTDiscover(props) {
  return (
    <div>
      <HTMenu></HTMenu>
      {renderRoutes(props.route.routes)}
    </div>
  )
})
