import React,{useState} from "react";

function InputArea(props) {
    const [item, setItem] = useState("");
  const handleChange = (e) => {
    const item = e.target.value;
    setItem(item);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={item} />
      <button onClick={()=>{
        props.clicked(item);
        setItem("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
