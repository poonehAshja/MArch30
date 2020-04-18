import React, {useState} from "react";
import "./input.css";
import CustomButton from "../customButton";

const Input = ({placeholder, onClick}) =>{
 const [val,setVal] = useState ("");

 return <div className="input_cont">
<input onChange= {(e)=>{
    setVal(e.target.value);
}}type = "text" placeholder={placeholder} />
<CustomButton onClick={()=>{
onClick(val);
}}text="SEND" color = "#58F"/>
</div>
}

Input.defaultProps = {
placeholder: "Type your chat here",
onClick:()=>{},
}

export default Input;