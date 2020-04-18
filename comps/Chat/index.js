import React from "react";
import "./chat.css";
import Header from '../header';

const defaultImg = require("./default-user.jpg");


const Chat = ({msg, img, backgroundColor, name}) => <div 
style={{backgroundColor:backgroundColor}}
className="chat_card">
<div className="chat_user">
<img src={img}/>
<Header fontSize="100%" text={name}/>
</div>
<div className="chat_msg">{msg}</div>
</div>

Chat.defaultProps = {
msg: "Please type something",
img: defaultImg,
backgroundColor:"gray",
name:"Username"
}

export default Chat;