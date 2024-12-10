import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('Olive');

  return (
    <div className='h-screen w-full flex duration-500'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-2xl'>
        <button className='outline-none px-5 py-2 rounded-full'
        style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
           <button className='outline-none px-5 py-2 rounded-full'
        style={{backgroundColor:'white'}} onClick={()=>setColor('white')}>White</button>
           <button className='outline-none px-5 py-2 rounded-full'
        style={{backgroundColor:'green'}} onClick={()=>setColor('green')}>Green</button>
           <button className='outline-none px-5 py-2 rounded-full'
        style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
           <button className='outline-none px-5 py-2 rounded-full'
        style={{backgroundColor:'gray'}} onClick={()=>setColor('gray')}>Gray</button>
           <button className='outline-none px-5 py-2 rounded-full'
        style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>
           <button className='outline-none px-5 py-2 rounded-full'
        style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>Pink</button>
      </div>
      </div>
    </div>
  )
}

export default App
