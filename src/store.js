import logger       from 'redux-logger'

import {
  applyMiddleware,
  compose,
  createStore
}                   from 'redux'

import { composeWithDevTools } from 'remote-redux-devtools'


export default () => {
  const store = createStore(
    (
      state = {
        messages: [],
        messageInput: '',
      },
      action
    ) => {
      switch (action.type) {
        case 'SET_MESSAGE_INPUT':
          return {
            messages: state.messages,
            messageInput: action.messageInput
          }
        case 'SUBMIT_MESSAGE':
          return {
            messages: [...state.messages, action.message],
            messageInput: ''
          }
        default:
          return state
      }
      action.payload
    },
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
