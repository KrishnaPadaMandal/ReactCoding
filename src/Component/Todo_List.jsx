import React, { useState } from 'react'

const Todo_List = () => {
    const [text,setText] = useState("")

    const [dataArray, setDataArray] = useState([]);

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

      const listContainerStyle = {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '250px',
      };
    
      const listItemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 0',
        borderBottom: '1px solid #eee',
      };
    
      const deleteButtonStyle = {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
      };

      const handelFrom = (e)=>{
        e.preventDefault();
        console.log("Then input value is",e.target.elements.inputOne.value)
        let text = e.target.elements.inputOne.value

        setDataArray([...dataArray,text])
    
        setText(" ")

      }

      const delteData = (index)=>{
        console.log("Index")
        const filterArray = dataArray.filter((_,i)=>i !=index)
        setDataArray(filterArray)
      }
      

  return (
    <div>

       <form style = {formStyle} onSubmit={handelFrom}>

    <input type='text' style={inputStyle} name='inputOne'/>
        <button style={buttonStyle} type='submit'>Submit</button>


       </form>
       {
        dataArray.length >0 &&
        (
          <div style={listContainerStyle}>
          { dataArray.map((item,index)=>(
            <div style={listItemStyle} key={index}>
              <span>{item}</span>
              <button style={deleteButtonStyle} onClick={()=>delteData(index)}>Delete</button>
            </div>
  
          ))}
     
  
  
         </div>

        )
       }

      
      
    </div>
  )
}

export default Todo_List
