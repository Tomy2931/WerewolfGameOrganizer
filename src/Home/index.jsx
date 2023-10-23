import { WerewolfContext } from '../Context';
import './style.css'
import React, { useContext } from 'react'


function Home() {
  let villagersArray = []
  let werewolfsArray = []
  const context = useContext(WerewolfContext)
  if (context.playersCount>=6 && context.playersCount <= 8){
    villagersArray = Array.from({ length: context.playersCount -1  });
    werewolfsArray = Array.from({ length: 1 });
  }
  if (context.playersCount>=9 && context.playersCount <= 11){
    villagersArray = Array.from({ length: context.playersCount -2  });
    werewolfsArray = Array.from({ length: 2 });
  }
  if (context.playersCount>=12 && context.playersCount <= 15){
    villagersArray = Array.from({ length: context.playersCount -3  });
    werewolfsArray = Array.from({ length: 3 });
  }
  if (context.playersCount>=16){
    villagersArray = Array.from({ length: context.playersCount -4  });
    werewolfsArray = Array.from({ length: 4});
  }



    return (
     
    <main className='hola'>
        <div className='principalInterface '>

            <h1 className='text-red-600 text-4xl absolute top-0 '>Ultimate Werewolf</h1>
        
            <div className='userInput w-[100%] h-[7%] flex '>

            <p className='text-yellow-300 text-3xl '>Players: </p>
            

            <button className= {`bg-red-200 w-10 rounded-md opacityButtonOn ${(context.playersCount >0 ?  'opacityButtonOn' : 'opacityButtonOff')}`}
            onClick={context.buttonPlayerRem}>-</button>
            <h2 className='text-yellow-300 text-3xl '>{context.playersCount}</h2>
            <button className={`bg-red-200 w-10 rounded-md opacityButtonOn ${(context.playersCount == 20 ?  'opacityButtonOff' : 'opacityButtonOn')}`}
            onClick={context.buttonPlayerAdd}>+</button>

            <button className={`bg-red-200 ${(context.playersCount >= 6 ?  'displayOn' : 'displayOff')}`}>Aceptar</button>

          </div>
          
          <div className='cardSectionContainter w-[100%] h-[80%] flex flex-col items-center'>

            <div className=' w-[100%] h-[50%] flex flex-col bg-slate-300 items-center justify-center gap-1 mt-2'>

              <h2>{villagersArray.length} Villagers</h2>
              <h2>0 Points</h2>     
               
              <div className='cardSectionVillage'>
                {villagersArray.map((_, index) => (
                  <div key={index} className="cardContainer bg-blue-600"></div>))}
               
              </div>
              
            </div>

            <h2 className='text-white mt-1 mb-1'>0 Difference</h2>

            <div className=' w-[100%] h-[50%] flex flex-col bg-blue-300 items-center justify-center gap-1 mt-2'>

            <h2>{werewolfsArray.length} Werewolf/s</h2>    
            <h2>0 Points</h2>    
                
                <div className='cardSectionWerewolf'>
                  {werewolfsArray.map((_, index) => (
                  <div key={index} className="cardContainer bg-red-600"></div>))}
          
                </div>
            </div>

          </div>

        </div>
      </main>
         
    )
  }
  
  
  
  export default Home;