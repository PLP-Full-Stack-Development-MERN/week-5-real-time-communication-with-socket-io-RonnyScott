io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);

    // Notify other users in the room
    socket.to(roomId).emit('user-joined', socket.id);

    // Notify the current user about existing users
    const usersInRoom = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
    socket.emit('current-users', usersInRoom);
  });

  socket.on('edit-note', (data) => {
    socket.to(data.roomId).emit('note-updated', data.content);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);

    // Notify other users in the room
    io.emit('user-left', socket.id);
  });
});