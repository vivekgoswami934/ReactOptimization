import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  
  // const magic = useCallback(() => () => {
  //   console.log("magic");
  // }, [count]);

  const magicFunction  =  useCallback(() => {
    console.log("magic")
  },[count])

  
/// limitation --> memo  (function)   --- > usecallback in picture 
  console.log("Parent Rendering");

  return (
    <div>
        <h4>parnet {state}</h4>
        
      <Child count={count} magicFunction={magicFunction}/>

      <button onClick={() => setState(state + 1)}>Parent</button>
      <button onClick={() => setCount(count + 1)}>Child</button>
    </div>
  );
};

export default Parent;
