import { WerewolfContext } from '../Context';
import './style.css'
import React, { useContext } from 'react'
import VillageCards from './VillageCards/index'
import WerewolfsCards from './WerewolfsCards/index';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/index'

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
      {context.loading && <LoadingScreen/>}
        <div className='principalInterface '>

            <h1 className='MainTittle text-red-700 text-5xl absolute top-1 under '>Ultimate Werewolf</h1>
        
            <div className='userInput w-full h-7 mt-10 flex    '>

            <p className='playerText text-orange-500 text-3xl '>Players: </p>
            
            <div className='flex items-center justify-between mr-7'>

              <button className= {` plusLessButtons opacityButtonOn ${(context.playersCount >0 ?  'opacityButtonOn' : 'opacityButtonOff')}`}
              onClick={context.buttonPlayerRem}>-</button>
              <h2 className='text-orange-500 text-3xl ml-4 '>{context.playersCount}</h2>
              <button className={` plusLessButtons opacityButtonOn ${(context.playersCount == 20 ?  'opacityButtonOff' : 'opacityButtonOn')}`}
              onClick={context.buttonPlayerAdd}>+</button>
            </div>
            <Link to="/gameNames">
                <button className={`readyButton absolute right-2 top-[8%] 
                ${(context.playersCount >= 6 ?  'displayOn' : 'displayOff')}
                ${(werewolfsArray.length == context.cardImgInfoW.length ?  'displayOn' : 'displayOff')}
                ${(villagersArray.length == context.cardImgInfoV.length ?  'displayOn' : 'displayOff')}

                `}>Ready</button>
            </Link>
            </div>

          {/* Cards  */}

          <div className='cardSectionContainter w-full h-4/5 flex flex-col items-center'>

            <div className='villageBackground w-full h-2/4 flex flex-col items-center justify-center gap-1 mt-2 relative'>
                {/* VILLAGE SIDE */}
              <h2 className={`countInfoTextV  absolute top-1 left-1 ${(context.playersCount >5 ?  'displayOn' : 'displayOff')}`} >{villagersArray.length} Villagers</h2>
              <h2 className={`countInfoTextV  absolute top-0 right-1  text-4xl ${(context.playersCount >5 ?  'displayOn' : 'displayOff')}`} >{context.cardPointInfoV }</h2>     
               
              <div className='cardSectionVillage mt-10'>
                {villagersArray.map((_, index) => (
                  <div className="cardContainer cardBackV relative"  key={index}
                      onClick={()=>{
                        if (villagersArray.length > (context.cardImgInfoV.length ) ) {
                          
                          context.clickInCard()
                        } else {
                         context.eliminatedImgV(context.cardImgInfoV[index][1])
                         context.cardImgInfoV.splice(index,1)

                         context.clickInCard()
                         
                        }

                      }}>
                      <img className='w-full h-full imagen'  src={context.cardImgInfoV[index] ? context.cardImgInfoV[index][0] : undefined} ></img>
                      <h2 className='absolute top-0 left-2 text-white font-bold pointCard '
                      >{context.cardImgInfoV[index] ? context.cardImgInfoV[index][1] : undefined}  </h2>
                  </div>
                      ))}
              </div>
              
            </div>
            <h2 className={`textPointDifference mt-2 mb-1 
            ${context.cardPointInfoV + context.cardPointInfoW > 0 ? 'text-blue-500' : ''} 
            ${context.cardPointInfoV + context.cardPointInfoW < 0 ? 'text-red-500' : ''}`}>
              {(context.cardPointInfoV && context.cardPointInfoW) ?  context.cardPointInfoV + context.cardPointInfoW : 0} Points Difference</h2>

            <div className='werewolfBackground w-full h-2/4 flex flex-col items-center justify-center gap-1 mt-2 relative'>

              {/* WEREWOLF SIDE */}
            <h2 className={`countInfoTextW absolute top-1 left-1 ${(context.playersCount >5 ?  'displayOn' : 'displayOff')}`} >{werewolfsArray.length} Werewolf/s</h2>    
            <h2 className={`countInfoTextW absolute top-1 right-1  text-4xl ${(context.playersCount >5 ?  'displayOn' : 'displayOff')}`} > {context.cardPointInfoW}  </h2>    
                <div className='cardSectionWerewolf'>
                  {werewolfsArray.map((_, index1) => (
      
                    <div className="cardContainer cardBackW  relative mt-10 "  key={index1}
                      onClick={()=>{
                        if (werewolfsArray.length > (context.cardImgInfoW.length ) ) {
                          
                          context.clickInCardW()
                        } else {
                         context.eliminatedImgW(context.cardImgInfoW[index1][1])
                         context.cardImgInfoW.splice(index1,1)

                         context.clickInCardW()
                         
                        }
                      }}>
                      <img className='w-full h-full'  src={context.cardImgInfoW[index1] ? context.cardImgInfoW[index1][0] : undefined} ></img>
                      <h2 className='absolute top-0 left-2 text-white font-bold pointCard'
                      >{context.cardImgInfoW[index1] ? context.cardImgInfoW[index1][1] : undefined}  </h2>
                  </div>
                    
                    ))}
                </div>
            </div>

          </div>

        </div>
        <VillageCards/>
        <WerewolfsCards/>
        
      </main>
         
    )
  }
  
  
  
  export default Home;