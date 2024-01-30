const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

const rooms = {
  room1 : {messages: [], users: {}}
}

const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const users = {}; 

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.userId = "";
  socket.on("getRooms", (name) => {
    if(users[socket.userId]) {
    serversThatAreAvailable();
    } else {
      socket.userId = Object.keys(users).find((id) => users[id].name === name)
    }
  })

  socket.on("addUserToRoom", (room, name) => {
    let addableUserSocketKey = Object.keys(users).find(
      (id) => users[id].name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (addableUserSocketKey && users[socket.userId].permits[room].hasPermitToKick) { 
      let addableUserSocket = users[addableUserSocketKey];
      addableUserSocket.servers.push(room);
      addableUserSocket.permits[room] = { hasPermitToPost: true, hasPermitToKick: false };
    }
    else {
      socket.emit(
        "permissionDenied",
        "You don't have the permission to invite users to this room."
      );
    }
  });

  socket.on("onRemovePeopleFromServer", (room, name) => {
    if(users[socket.userId].permits[room].hasPermitToKick) {
      for (const userId in users) {
        if (users[userId].name === name) {
          if (users[userId].servers.includes(room)) {
            const serverIndex = users[userId].servers.indexOf(room);
            users[userId].servers.splice(serverIndex, 1);
            serversThatAreAvailable();
          }
        } 
      }
    } else {
      socket.emit(
        "permissionDenied",
        "You don't have the permission to kick users in this room."
      );
    }
  });

  socket.on("joinRoom", (roomId, username) => {
    socket.join(roomId);
  
    rooms[roomId].users[socket.id] = username;
    io.to(roomId).emit("users", Object.values(rooms[roomId].users));
  
    if (roomId !== "room1") {
      const admin = Object.values(users).map(user => user.permits[roomId]?.hasPermitToKick || false);
      const user = Object.values(rooms[roomId].users);
  
      const combine = user.reduce((result, user, index) => {
        result[user] = admin[index];
        return result;
      }, {}); 
  
      console.log(combine);
      io.to(roomId).emit("admins", combine);
    }
    socket.emit("messages", rooms[roomId].messages);

    io.to(roomId).emit("users", Object.values(rooms[roomId].users));
  });

  socket.on("createRoom", (newRoomName, username) => {
    const roomId = uuidv4();
    rooms[roomId] = { name: newRoomName, messages: [], users: {} };

    socket.userId = socket.userId || uuidv4(); 
    users[socket.userId] = users[socket.userId] || { name: username, servers: [] };
    users[socket.userId].servers.push(roomId);
    users[socket.userId].permits = users[socket.userId].permits || {};
    users[socket.userId].permits[roomId] = { hasPermitToPost: true, hasPermitToKick: true };
    serversThatAreAvailable();
  });

  function serversThatAreAvailable() {
    let userServers = users[socket.userId].servers;
    let availableServers = Object.keys(rooms).filter(roomId => userServers.includes(roomId)); 
    const filteredRoomNames = Object.keys(rooms)
    .filter(roomId => userServers.includes(roomId))
    .map(roomId => rooms[roomId].name);
    socket.emit("availableRooms", availableServers, filteredRoomNames);
  }

    const { room } = socket.handshake.query;

    if(rooms[room]) {
      socket.emit("messages", rooms[room].messages);
    } else {
      socket.emit("messages", []);
    }

    if(rooms[room]){
      io.to(room).emit("users", Object.values(rooms[room].users));
    } else {
      io.to(room).emit("users", []);
    }
    socket.join(room);

    socket.on("sendMessage", (message) => {
     
      const { room } = message;
      if (room && rooms[room] && users[socket.userId].permits[room].hasPermitToPost) {
        const userInRoom = rooms[room].users[socket.id];

        rooms[room].messages.push({
          id: socket.id,
          text: message.text,
          timestamp: message.timestamp,
          userName: userInRoom,
        });
        io.to(room).emit("messages", rooms[room].messages);
      }
    });

    socket.on('setName', (previousName, name) => {
      let userServers = [];
      if(!previousName) {
        socket.userId = uuidv4();
      }
      else if(previousName && name) {
        const userIdsWithPreviousName = Object.keys(users).find((id) => users[id].name === previousName);
        if (userIdsWithPreviousName) {
          const user = users[userIdsWithPreviousName];
          user.name = name;
          userServers = user.servers

        userServers.forEach((room) => { 
          if (rooms[room]) {
            rooms[room].messages.forEach((message) => {
              if (message) {
                message.userName = name;
              }
            });
  
            io.to(room).emit('users', Object.values(rooms[room].users));
            io.to(room).emit('messages', rooms[room].messages);
          }
        });
      }
    }
    });
  
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    delete rooms[room].users[socket.id];
    io.to(room).emit("users", Object.values(rooms[room].users));
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


