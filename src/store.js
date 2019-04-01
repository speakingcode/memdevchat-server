import logger       from 'redux-logger'

import {
  applyMiddleware,
  compose,
  createStore
}                   from 'redux'

import { composeWithDevTools } from 'remote-redux-devtools'


export default () => {
  const store = createStore(
    (state = {}, action) => action.payload,
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
