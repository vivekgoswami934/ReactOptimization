import React, { useMemo, useState } from "react";
//useMemo
const Vivek = () => {
  const [state, setState] = useState(0); //
  const [count, setCount] = useState(0); //

  // const oddEven = useMemo(() => {
  //   console.log("clicked");
  //   let i = 0;
  //   while (i < 3000000000) i++;
  //   return state % 2 === 0 ? "Even" : "Odd";
  // }, [state]);

    // useCallback --> memoized function

  const oddEven = useMemo(() => {   // memoized value
    console.log("clicked");
    let i = 0;
    while (i < 3000000000) i++;      // expensive function
    return state % 2 === 0 ? "Even" : "Odd";
  },[state])

  ;

  return (
    <div>
      <button onClick={() => setState(state + 1)}>First : {state}</button>
      <button>{oddEven}</button>
      <button onClick={() => setCount(count + 1)}>Second : {count}</button>
    </div>
  );
};

export default Vivek;

// useMemo  --> prevents calling our unnecessarly rendreing
