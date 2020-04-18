import React from "react";
import "./cb.css";

const CustomButton = ({text, color, onClick}) => <div style={{backgroundColor:color}}
className="custom_button_box"
/*onClick={onClick}*/>
    <div className="custom_button_inner">
        {text}
    </div>
</div>


// function ButtonClick(){
//     alert("Clicked");
// }

CustomButton.defaultProps = {
    text:"default Button",
    color:"#63634C",}
//     onClick:ButtonClick 
// 

export default CustomButton;

