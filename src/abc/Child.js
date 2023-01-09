import React, { memo } from 'react'

const Child = ({count,magicFunction}) => {


    console.log("Child Rendering")
  return (
    <div>
        Child  : {count}
      
    </div>
  )
}

export default memo(Child)


//memo  --> higher order component

// useCallback(()=>{},[])  --> memoized function

// useMemo(()=>{},[]) --> memoized value