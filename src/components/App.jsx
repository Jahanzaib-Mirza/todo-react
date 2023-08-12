import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);
  const submit = (item) => {
    setItems((prev) => ([...prev, item]));
    console.log(items);
  }
  const deleteItem = (index) => {
    setItems((prev)=>{
      return prev.filter((item,i)=>{return index !== i})
    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <InputArea clicked={submit} />
      </div>
      <div>
        <ul>
          {items.map((val, i) => <TodoItem key={i} id={i} onChecked={deleteItem} item={val} />)}

        </ul>
      </div>
    </div>
  );
}

export default App;
