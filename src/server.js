import Server from 'socket.io'

export default (store, port = 8090) => {
  const connections = {}
  const io = new Server().attach(port)

  store.subscribe(
    () => io.emit('SET_NEW_CLIENT_STATE', store.getState())
  )

  io.on('connection', socket => {
    connections[socket.id] = socket

    socket.emit('SET_NEW_CLIENT_STATE', store.getState())
    socket.on('DISPATCH_CLIENT_ACTION', action => store.dispatch.bind(store)({...action, clientId: socket.id}))
  })
}
