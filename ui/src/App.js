import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCyle from './components/LifeCycle';

function App() {
console.log(useState(5));
  let [a,setA]=useState(5);
  let [b,setB]=useState(8);
  let [arr1,arr2]=[1,2];
  console.log(a);
  function increment1(){ 
   setA(++a);
  }
  function increment2(){
    setB(++b);
   }
  useEffect(() => {
    console.log('inside useEffect');
  },[a,b]);
  return (
    <div className="App">
      {a}
      <button onClick={increment1}>Increment++</button>
      <button onClick={increment2}>Increment++</button>{b}
      <LifeCyle favColor={'red'}/>
    </div>
  );
}

export default App;
