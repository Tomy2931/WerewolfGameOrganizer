
import './styles.css'
import { WerewolfContext } from '../Context';
import React, { useContext } from 'react'
import './scripts.js'


function GameNames () {
    const context = useContext(WerewolfContext)
    const allPlayerList = [...context.cardImgInfoV,...context.cardImgInfoW]
    return(
       <main>
        <div className='gameNamesDivMain   '>

            <div className='gameNamesDiv'>
                <header className='gameNamesHeader w-full h-14'></header>
                    {allPlayerList.map((_, index) => (
                        <div className= 'cardPlayerCont' key={index} 
                        >
                                <div className='cardPlayerImg' >
                                    <div className='flex flex-row items-center' >
                                        <img key={index}  className= 'card'
                                        // {`card ${(context.deadCard == true  ?  'blackAndWhiteFilter' : '')}`}
                                         src={allPlayerList[index][0] } onClick={()=> {
                                            context.clickForDeath(index)
                                        } }  
                                            
                                            alt="PJ imagen" />
                                        <input className='cardPlayerInput' placeholder='Name here...' type="text"  />
                                    </div>
                                </div>
                        </div>
                    ))}
            <footer className='gameNamesFooter'></footer>
            </div>

        </div>
       </main>
    )
}

export default GameNames

