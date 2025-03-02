import React, { useState } from 'react'

const Todo_List = () => {
    const [text,setText] = useState("")

    const formStyle = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin: "20px",
      };
    
      const inputStyle = {
        padding: "8px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        flex: 1,
      };
    
      const buttonStyle = {
        padding: "8px 15px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
      };

      const handelFrom = (e)=>{
        e.preventDefault();

      }

  return (
    <div>

       <from style = {formStyle} onSubmit={handelFrom}>


        <button style={buttonStyle} type='submit'>Submit</button>


       </from>
      
    </div>
  )
}

export default Todo_List
