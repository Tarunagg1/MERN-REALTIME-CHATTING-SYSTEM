require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to accept json data

app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});


