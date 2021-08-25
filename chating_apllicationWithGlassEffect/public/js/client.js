// ───CONNTION FORM nodeServer────────────────────────────────────────────────────────────────────────
const io = require("socket.io-client");

const socket = io();

const socket = io("https://pashutakchat.herokuapp.com/");

const massagesArea = document.getElementById("massage_section");
const profile = document.getElementById("profile");
const controls = document.getElementById("control_section");
const username = prompt("Enter your name to join");
profile.children[1].innerText = username;
var audio = document.getElementById("audio");
// console.log(audio)

// ────────────────────────────────────────────────────────────────────────────────
socket.emit("new_user", username);                      //? DELIVER VALUE OF USERNAME FORM NODESERVER
socket.on("user_joined", data => {                      // ? WHEN USER HAS BEEN JOIN THEN
    currentUser(`${data} joined the chat.`, 'right');
});
socket.on("receive", data => {                          //  ? SEND THE MASSAGES OF ALL USER
    currentUser(`${data.username}: ${data.massage}`, 'left');
});
socket.on("userDisconnect", data => {                   // ? WHEN USER DISCONNECT 
    console.log(data)
    currentUser(`${data.username} is disconnect`, 'left');
});
// ────────────────────────────────────────────────────────────────────────────────
controls.children[1].children[0].addEventListener("click", (e) => {           
    e.preventDefault();
    const sendData = controls.children[0].value;
    currentUser(`You: ${sendData}`, "right");
    socket.emit("send", sendData);
    controls.children[0].value = "";
});
function currentUser(massages, position) {               // * DISPLAY AND SET POSITION OF MASSAGES
    var element = document.createElement("div");
    element.setAttribute("class", "userMassages");
    element.style.float = position;
    element.innerText = massages;
    massagesArea.appendChild(element);
    audio.play().then(()=>{
    }).catch((err)=>{
        console.log(audio.play())
        console.log(err)
    })
};
// ────────────────────────────────────────────────────────────────────────────────

