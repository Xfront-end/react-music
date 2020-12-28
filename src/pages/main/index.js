import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/routes/index'
import HTHeader from '@/components/header'
import HTFooter from '@/components/footer'
import MusicPlayer from '@/pages/play/c-cpns/play-bar'

export default memo(function Main() {
  return (
    <>
      <HashRouter>
        <HTHeader/>
        {renderRoutes(routes)}
        <MusicPlayer></MusicPlayer>
        <HTFooter/>
      </HashRouter>
    </>
  )
})
