import { combineReducers } from 'redux'

const messages = (
  messages = [],
  action
) => {
  switch (action.type) {
    case 'SUBMIT_MESSAGE':
      return [...messages, {message: action.message, clientId: action.clientId}]
    default:
      return messages
  }
}

const users = (
  users = {},
  action
) => {

  const {clientId, message, messageInput, username} = action
  const user = users[clientId]

  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...users,
        ...{
          clientId
        }
      }
    case 'SUBMIT_MESSAGE':
      return {
        ...users,
        ...{[clientId] : {
          ...user,
            messageInput: ''
        }}
      }

    case 'SET_MESSAGE_INPUT':
      return {
        ...users,
        ...{[clientId] : {
          ...user,
            messageInput
        }}
      }

    case 'SET_USERNAME':
      return {
        ...users,
        ...{
          [clientId]: {
            ...user,
            username,
          }
        }
      }
    default:
      return users
  }
}

export default combineReducers({
  messages,
  users
})

