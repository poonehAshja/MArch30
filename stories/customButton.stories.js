import React from "react";
import CustomButton from "../comps/customButton";
import Header from "../comps/header";
import Input from "../comps/input";
import Chat from "../comps/Chat";
import ChatPage from "../pages/ChatPage";



export default {
title: "My comps",
component: CustomButton,
}

export const MyCustomButton = () =>
<CustomButton/>


function CancelClick(){
    alert("cancel");
}
export const MyCustomButtonWithOptions = () =>
<CustomButton
color="#999"
text="Cancel"
onClick={CancelClick}
/>

export const MyHeader = () =>
<Header/>

export const MyInput = () =>
<Input/>

export const MyInputWithPlaceholder = () =>
<Input
placeholder="Custom placeholder"
/>

export const MyChat = () =>
<Chat/>
export const MyChatPage = () =>
<ChatPage/>





/*export const PageWithCustomButtons = () =>
<div>

<Header
    fontsize = {15}
    color= "green"
    onMouseOver={cancelClick}
/>

<Header
    fontsize = {25}
    color= "red"
    onMouseOver={OkClick}
/>


<CustomButton 
color="#999"
text="OK"
onClick={OkClick}
/>
<CustomButton 
color="#3F5"
text="CANCEL"
onClick={cancelClick}/>
<CustomButton 
color="#F3F"
text="SUBMIT"/>
<CustomButton text="Menu"/>
</div>


function cancelClick(){
    alert("cancel");
}

function OkClick(){
    alert("OK");
}
*/