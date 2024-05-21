import React from "react";


const NameInput = ({ value, onChange}) =>{
    return (
        <input 
        type="text"
        placeholder="Name"
        value ={value}
        onchange={onChange}
        />
    )
}

export default NameInput