import React , { useState } from 'react';
import './App.css';
import ConcurrentDemo from './concurrent/index'
import Index from './lifeCycle-react15/index'
// hooks function 组件增强

function App() {
  const [ parentCount, setParetCount ] = useState(0)
  return (
    <div>
      {/* <ConcurrentDemo></ConcurrentDemo> */}
      <button onClick={() => {setParetCount(parentCount + 1)}}>setParetCount</button>
      <Index parentCount={parentCount}></Index>
    </div>
  );
}
var a = {}
var b = Object.prototype
console.log(a.prototype === b)      // 函数才有prototype ，对象的prototype为undefined
console.log(a.__proto__ === b)
console.log(Object.getPrototypeOf(a) === b)

export default App;
