import { Redirect } from 'react-router-dom'
import Discover from '@/pages/discover'

import Recommend from '@/pages/discover/c-pages/recommend'
import Ranking from '@/pages/discover/c-pages/ranking'
import Songs from '@/pages/discover/c-pages/songs'
import DjRadio from '@/pages/discover/c-pages/dj-radio'
import Artist from '@/pages/discover/c-pages/artist'
import Ablum from '@/pages/discover/c-pages/album'

export default [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover/',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djradio',
        component: DjRadio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Ablum
      },
    ]
  }
]
  