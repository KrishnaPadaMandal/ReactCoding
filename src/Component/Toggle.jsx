import React, { useState } from 'react'

const Toggle = () => {

    const [isOn,setIsOn] = useState(false)

    const toggleStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        borderRadius: "5px",
      };

  return (
    <div>
      <h1>Toggle</h1>
  <p>Current State {isOn ? "on":"off"}</p>
      <button style={toggleStyle} onClick={()=>{setIsOn(!isOn)}}>{isOn? "on":"off"}</button>
    </div>
  )
}

export default Toggle
