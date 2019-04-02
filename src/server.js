import Server from 'socket.io'

const selectClientState = (clientId, state) => {
  return {
    messages: state.messages.map(msg => ({
      ...msg,
      message: (state.users[msg.clientId].username || msg.clientId) + " - " + msg.message
    })),
    ...state.users[clientId]
  }
}

export default (store, port = 8090) => {
  const connections = {}
  const io = new Server().attach(port)

  store.subscribe(
    () => {
      Object.values(connections).forEach(
        conn => {
          conn.emit(
            'SET_NEW_CLIENT_STATE',
            selectClientState(conn.id, store.getState())
          )
        }
      )
    }
  )

  io.on('connection', socket => {
    connections[socket.id] = socket

    socket.emit('SET_NEW_CLIENT_STATE',
      selectClientState(socket.id, store.getState())
    )
    socket.on('DISPATCH_CLIENT_ACTION',
      action => store.dispatch.bind(store)({...action, clientId: socket.id})
    )
  })
}
