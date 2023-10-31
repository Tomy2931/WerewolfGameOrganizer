
import './styles.css'
import { WerewolfContext } from '../Context';
import React, { useContext } from 'react'



function GameNames () {
    const context = useContext(WerewolfContext)
    const allPlayerList = [...context.cardImgInfoV,...context.cardImgInfoW]
    console.log(allPlayerList);
    return(
       <main>
        <div className='gameNamesDivMain   '>

            <div className='gameNamesDiv'>
                <header className='gameNamesHeader w-full h-14'></header>
                    {allPlayerList.map((_, index) => (
                        <div className='cardPlayerCont' key={index}>
                                <div className='cardPlayerImg' >
                                    <div className='flex flex-row items-center' >
                                        <img src={allPlayerList[index][0] } alt="PJ imagen" />
                                        <h2 className='cardPlayerName'>Name: </h2>
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

