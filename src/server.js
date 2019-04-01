import Server from 'socket.io'

export default (store, port = 8090) => {
  const io = new Server().attach(port)

  store.subscribe(
    () => io.emit('SET_NEW_CLIENT_STATE', store.getState())
  )

  io.on('connection', socket => {
    socket.emit('SET_NEW_CLIENT_STATE', store.getState())
    socket.on('DISPATCH_CLIENT_ACTION', store.dispatch.bind(store))
  })
}
