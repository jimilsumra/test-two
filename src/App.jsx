import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [time,setTime] = useState(new Date());

  useEffect(()=>{

    setInterval(()=>{
      setTime(new Date());
    }, 1000);

  });

  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();


  /*
  const dateObj = new Date();
  const [hours,setHours] = useState('');
  const [min,setMin] = useState('');
  const [sec,setSec] = useState('');
  useEffect(() =>  {
    setInterval(()=>{
      //clearInterval(200);
      //console.log('called');
      setHours(dateObj.getHours());
      setMin(dateObj.getMinutes());
      setSec(dateObj.getSeconds());
      
    },1000);
  },[]);

  */
  //console.log(dateObj.getHours());

  return (
    <>
      <h1>Welcom to Digital clock</h1>
      <h2>Time: {hours}:{min}:{sec}</h2>
    </>
  )
}

export default App
