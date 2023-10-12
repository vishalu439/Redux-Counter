import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Store/CounterSlice";
import "./App.css";
import { nanoid } from 'nanoid';

const App = () => {
  const [countrvalue, setcountrvalue] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter1.count);
  const memory=useSelector((state)=>state.counter1.countmemory);
  console.log(memory)
  const clickHandler=(type)=>{
    if(type==="increment"){
      dispatch(increment({id:nanoid(),increment:countrvalue}))
    }
    else if(type==="decrement"){
      dispatch(decrement({id:nanoid(),decrement:countrvalue}))
    }
    setcountrvalue("")
    
  }
  const total=memory.map((element)=>{
     return(
      <div className="counter">
        {element.increment?(<h4>counter incremented by {element.increment}</h4>):
        
        (<h4>counter decremented by {element.decrement}</h4>)}
      </div>
     )
  })
  return (
    <>
      <h1>Redux Counter</h1>
      <div className="container">
        <input type="text" value={countrvalue} onChange={(e)=>setcountrvalue(+e.target.value)} />

        <button onClick={()=>clickHandler("increment")}>increment</button>
        <button onClick={() => clickHandler("decrement")}>decrement</button>
        <p>{count}</p>
        {total}
      </div>
    </>
  );
};

export default App;
