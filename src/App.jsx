import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const dateObj = new Date();
  const [hours,setHours] = useState('');
  const [min,setMin] = useState('');
  const [sec,setSec] = useState('');
  setInterval(()=>{
    //console.log('called');
    setHours(dateObj.getHours());
    setMin(dateObj.getMinutes());
    setSec(dateObj.getSeconds());
    
  /*hours = dateObj.getHours();
   min = dateObj.getMinutes();
   sec = dateObj.getSeconds();*/
  },1000);
  //console.log(dateObj.getHours());

  return (
    <>
      <h1>Welcom to Digital clock</h1>
      <h2>Time: {hours}:{min}:{sec}</h2>
    </>
  )
}

export default App
