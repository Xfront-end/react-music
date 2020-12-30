import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as playReducer } from '@/pages/play/store'

export default combineReducers({
  recommend: recommendReducer,
  play: playReducer
})
