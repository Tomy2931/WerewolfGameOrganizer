import AlphaWolf from '../../assets/Alpha Wolf.png'
import BigWolf from '../../assets/Big Wolf.jpg'
import DireWolf from '../../assets/Dire_Wolf.png'
import FangFace from '../../assets/Fang face.png'
import FruitBruteWolf from '../../assets/Fruit Brute Wolf.png'
import LoneWolf from '../../assets/Lone-wolf.png'
import Hoodlum from '../../assets/Hoodlum.png'
import Minion from '../../assets/Minion.png'
import Sourceres from '../../assets/Sourceres.png'
import Werewolf  from '../../assets/Werewolf 1.jpg'
import WolfCub from '../../assets/Wolf Cub.png'
import Wolverinen from '../../assets/Wolverinen.png'
import Zombie from '../../assets/Zombie.png'
import Vampire from '../../assets/Vampire.png'



import './styles.css'
import { WerewolfContext } from '../../Context';
import React, { useContext } from 'react'

let imagesWerewolf = [
    [Werewolf,-6],
    [AlphaWolf,-9],
    [BigWolf,-9],
    [DireWolf,-4],
    [FangFace,-5],
    [FruitBruteWolf,-3],
    [LoneWolf,-5],
    [WolfCub,-8],
    [Sourceres,-3],
    [Wolverinen,-4],
    [Minion,-6],
    [Hoodlum,0],
    [Zombie,-3],
    [Vampire,-7],
  
]
function WerewolfsCards () {
    const context = useContext(WerewolfContext)
    return(
        <main className={`w-full h-full absolute top-0 ${(context.werewolfCardsOn == true ?  'displayOn' : 'displayOff')}`}>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='WerewolfMenuCard w-6/7 h-5/6 border-4 border-gray-800  bg-orange-300 relative rounded-lg'>
                    <header className='bg-black w-full h-[9%] flex  opacity-[0.8] items-center justify-around rounded-lg'>
                        <h1 className='WerewolfTittle mt-1'>🐾</h1>
                        <h1 className='WerewolfTittle mt-1'>Werewolfs </h1>
                        <h1 className='WerewolfTittle mt-1 '>🌙</h1>
                    </header>
                        <div className='CardsGridW mt-2 '>
                    
                        {imagesWerewolf.map((image, index) => (
                            <div key={index} className='ImgCardContainer relative'
                                onClick={()=> {
                                    context.werewolfCardClicked([image[0],image[1]])
                                    context.clickMoon()
                                }}>
                                <img className="ImgCard2" src={image[0]} alt={`Image ${index}`} />
                                <h2 className='ImgNum absolute top-1 left-2 text-white rounded-md font-bold'>{image[1]}</h2>
                            </div>
                            ))}

                        </div>

                </div>

            </div>
        </main>
    )
}

export default WerewolfsCards

