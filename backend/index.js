require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require("./routes/messageRoutes");

const connectDB = require('./config/db');

const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to accept json data

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

const server = app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});


const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
        // credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
        // console.log(userData);
        socket.join(userData._id);
        socket.emit("connected");
    })

    socket.on('join_chat', (room) => {
        socket.join(room);
        console.log('user joined room', room);
    })

    socket.on('new_message', (newMessage) => {
        const chat = newMessage.chat;
        if (!chat.users) return console.log("chat.users not defined");
        chat.users.forEach((user) => {
            if (user._id == newMessage.sender._id) return;
            socket.in(user._id).emit("message_recieved", newMessage);
        })
    });

    socket.on('typing', (room) => {
        socket.in(room).emit("typing")
    });
    socket.on('stop_typing', (room) => {
        socket.in(room).emit("stop_typing")
    });

})

