import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className='principalInterface '>

            <h1 className='text-red-600 text-4xl absolute top-5 '>Ultimate Werewolf</h1>

          <div className='userInput w-[100%] h-[20%] flex '>

            <p className='text-yellow-300 text-3xl '>Players: </p>
            
            <select multiple className='w-20'>
              <option value="opcion1">5</option>
              <option value="opcion2">6</option>
              <option value="opcion3">7</option>
              <option value="opcion4">8</option>
              <option value="opcion4">9</option>
              <option value="opcion4">8</option>
              <option value="opcion4">10</option>
              <option value="opcion4">11</option>
              <option value="opcion4">12</option>
              <option value="opcion4">13</option>
              <option value="opcion4">14</option>
              <option value="opcion4">15</option>
              <option value="opcion4">16</option>
              <option value="opcion4">17</option>
              <option value="opcion4">18</option>
              <option value="opcion4">19</option>
              <option value="opcion4">20</option>
            </select>
            <button className='bg-red-200'>Aceptar</button>

          </div>

          <div className='w-[100%] h-[30%] flex flex-col bg-slate-300 items-center justify-center gap-1 mt-2'>

              <h2>5 Players</h2>    
              
            <div className='w-[100%] h-[70%] flex gap-1 justify-center '>
              <div className='cardContainer bg-blue-600'></div>
              <div className='cardContainer bg-blue-600'></div>
              <div className='cardContainer bg-blue-600'></div>
              <div className='cardContainer bg-blue-600'></div>
            </div>
            
          </div>
          <div className='w-[100%] h-[30%] flex flex-col bg-blue-300 items-center justify-center gap-1 mt-2'>

          <h2>3 Players</h2>    
              
              <div className='w-[100%] h-[70%] flex gap-1 justify-center '>
                <div className='cardContainer bg-red-600'></div>
                <div className='cardContainer bg-red-600'></div>
                <div className='cardContainer bg-red-600'></div>
              </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
