import React, { useState } from "react";

const Filter = () => {
  const data = ["Apple", "Mango", "Banana", "Orange"];
  const [fruit, setFruit] = useState(data);
  const [string,setString] = useState(" ")
  const handelString = (e)=>{
    console.log("serch",e.target.value) 
    const serchString = e.target.value

    const filter_fruit = fruit.filter((item)=>item.toLocaleLowerCase().includes(serchString.toLocaleLowerCase()))
    setFruit(filter_fruit)

  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "blue" }}>Filter Component</h1>
      <input type="text" placeholder="Enter your string"  onChange={(e)=>{handelString(e)}}/>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {fruit.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f0f0f0",
             
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
