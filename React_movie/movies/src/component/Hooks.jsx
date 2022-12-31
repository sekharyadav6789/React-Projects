import React, { useState } from 'react';

export default function Hooks() {
    //variable, setter function -> default state
    const [count, setCount]=useState(0);
  return (
    <>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <span>{count}</span>
        <button onClick={()=>{setCount(count-1)}}>-</button>
    </>

  )
}
