// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────  ──────────
//   :::::: A L L   C O N T R O L   A N D   C O N N E C T I O N   H A N D L E   B Y   S O C K E T   I O   S E E   B A L O W   D O W N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const port = process.env.PORT || 8000;    //? FOR WHEN YOU DO HOSTING 
const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });
const staticPath = path.join(__dirname, "../public/");

const usersCollection = {};                 //? FOR CONTAINIG ALL USER

app.get("/", (req, res) => {
    res.send(staticPath);
});

app.get("*",(req,res)=>{
res.send("<h1>page not found place go back</h1>");
});

io.on("connection", socket => {               // * HENDLING ALL CONTATION 
    socket.on("new_user", username => {
        usersCollection[socket.user] = username;
        socket.broadcast.emit("user_joined", username);           // TODO SEND THE MASSAGEA "username" FOR ALL USER
    });          // * HENDLING ONE PROTEDULLAR CONTATION      

    // ─── SEND SECTION ───────────────────────────────────────────────────────────────
    socket.on("send", massage => {
        socket.broadcast.emit("receive", { massage: massage, username: usersCollection[socket.user] });
    });

    // ─── WHEN USER DiSCONNECTED ───────────────────────────────────────────────────────
    socket.on("disconnect", massage => {
        socket.broadcast.emit("userDisconnect", { username: usersCollection[socket.user] });
    })
});

app.listen(port, (err) => {
    console.log(`port running at ${port}`);
})