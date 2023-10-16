const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const connect = require('./config/database-config');

const Chat = require('./models/chat');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join_room', (data) => {
        console.log("joining a room", data.roomid)
        socket.join(data.roomid);
    });

    socket.on('msg_send', async (data) => {
        console.log(data);
        const chat = await Chat.create({
            roomId: data.roomid,
            user: data.username,
            content: data.msg
        });
        io.to(data.roomid).emit('msg_rcvd', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.to(data.roomid).emit('someone_typing');
    })
});
app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/public'));

app.get('/chat/:roomid', async (req, res) => {
    const chats = await Chat.find({
        roomId: req.params.roomid
    }).select('content user');
    console.log(chats);
    res.render('index', {
        name: 'Sanket',
        id: req.params.roomid,
        chats: chats
    });
});

server.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log("mongo db connected")
});