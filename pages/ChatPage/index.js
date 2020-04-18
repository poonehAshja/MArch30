import React, {useState} from "react";
import "./chatpage.css";
import Chat from "../../comps/Chat";
import CustomButton from "../../comps/customButton";
import Header from "../../comps/header";
import Input from "../../comps/input";


// var welcome_state = "Welcome to my app"
// function ChangeWelcome(){
//     welcome_state= "Start with sending a message."
//     document.querySelector("#welcome").innerText = "Start with sending a message."
// }




const ChatPage = ({}) =>{
const [welcome, setwelcome] = useState ("Welcome to my app!")
const[msg,setMsg] = useState ("Please type something");
const [resp, setResp] = useState ("Let me respond to you")
const [color, setColor] = useState ("#63634C")
const[text, setText] = useState ("default Button")


return <div>
<div id="welcome">
<Header fontSize={32} text={welcome}/>
</div>
<div id="chats" onClick={()=>{
    setwelcome("Start with sending a message"); 
    }}>
<Chat name= {"User1"} msg={msg}/>
<p/>
<Chat img={"https://previews.123rf.com/images/vasilyrosca/vasilyrosca1902/vasilyrosca190200036/116377855-robot-icon-chat-bot-sign-for-support-service-concept-chatbot-character-flat-style-.jpg"} name={"Chat Bot"}backgroundColor = {"pink"} msg={resp}/>
</div>
<div id="controls">
 <Input onClick={(val)=>{
     setMsg(val);

    var new_resp = CheckResponse(val);
    setResp(new_resp);

     }}/>  
</div>

<div id="custombut" onClick={()=>{
    setText("YAY! I did it"); 
    setColor("orange");
    }}>
    <CustomButton text={text} color={color}/>
</div>

</div>
}


function CheckResponse(inp){
    switch (inp.toLowerCase()){
        case"hi":
        return "I love pie";

        case "how are you?":
        return "Great";
    }
}

ChatPage.defaultProps = {

}
export default ChatPage;