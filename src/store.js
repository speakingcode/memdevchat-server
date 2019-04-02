import logger       from 'redux-logger'

import {
  applyMiddleware,
  compose,
  createStore
}                   from 'redux'

import { composeWithDevTools } from 'remote-redux-devtools'

import reducer from './reducers'

export default () => {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        logger
      )
    )
  )

  store.subscribe(() => {
  })

  return store
}
