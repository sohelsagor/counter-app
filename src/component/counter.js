import React, { useState } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);
  const incriMent = () => {
    setCount(count + 1);
  };
  const decriMent = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="conterBody">
      <h1 className="header">COUNTER APP</h1>
      <div className="card" ><h2 className="counter" >{count}</h2> </div>
      <div>
        <button
          className="btn"
          onClick={incriMent}
          disabled={count === 5 ? true : false}
        >
          Incriment
        </button>
        <button className="btn" onClick={decriMent} disabled={count === -5}> 
        Decriment
        </button>
        <button className="btn" onClick={reset}>
          Set new target
        </button>
      </div>
    </div>
  );
}
