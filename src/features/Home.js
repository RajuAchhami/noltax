
import React, { useRef, useState, useMemo } from 'react'
// import { useApiHooks } from './hooks/apiHooks'
import Child from './Child';




const Home = () => {
  

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const countShow = useMemo(() => {
    console.log("hello jee")
    return count * 5;
  }, [count])


  const handleCount = () => {
    setCount(count + 1);

  };

  // console.log(count)
  const handleCount1 = () => {
    console.log("jeee1")
    setCount1(count1 + 1);

  }

  // const d = useRef(0);
  // const handleC = () => {
  //   d.current = d.current + 1;
  //   console.log(d)

  // }
  // console.log('render');

  // const [data, load] = useApiHooks('https://dummyjson.com/products');

  return (
    <div>
      <h1>{countShow}</h1>

      {/* <h1>{d.current}</h1> */}

      {/* <button onClick={() => setPag(pag + 1)}>{pag}</button> */}

      {/* <button onClick={() => handleC()}>Click Me</button> */}
      <h1>{count}</h1>
      <button onClick={handleCount}>Click here to Incre</button>
      <h1>{count1}</h1>
      <button onClick={handleCount1}>Click here to Incre count 1</button>
      <Child />

    </div>
  )
}

export default Home
