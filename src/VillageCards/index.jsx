import AprenticeSeer from '../assets/Apprentice-seer.png'
import AuraSeer from '../assets/Aura Seer.png'
import Bodyguard from '../assets/Bodyguard.png'
import Chupacabra from '../assets/Chupacabra.png'
import Creeper from '../assets/Creeper.png'
import CultLeader from '../assets/Cult-leader.png'
import Cupid from '../assets/Cupid.png'
import Detective from '../assets/Detective.png'
import Diseased from '../assets/Diseased.png'
import Dopplehanger from '../assets/Dopplehanger.png'
import Ghost from '../assets/Ghost.png'
import Hunter from '../assets/Hunter.png'
import Lycan from '../assets/Lycan.png'
import Mason from '../assets/Mason.png'
import Mayor from '../assets/Mayor.png'
import MysticSeer from '../assets/Mystic Seer.png'
import OldHag from '../assets/Old-hag.png'
import Pacifist from '../assets/Pacifist.png'
import Pi from '../assets/PI.png'
import Priest from '../assets/Priest.png'
import Prince from '../assets/Prince.png'
import Revealer from '../assets/Revealer.png'
import Seer from '../assets/Seer.png'
import Skeleton from '../assets/Skeleton.png'
import Snitch from '../assets/Snitch.png'
import Speelcaster from '../assets/Speelcaster.png'
import Tanner from '../assets/Tanner.png'
import ToughGuy from '../assets/Tough-guy.png'
import Troublemaker from '../assets/Troublemaker.png'
import VillageIdiot from '../assets/Village-idiot.png'
import Villager from '../assets/Villager.png'
import VirginiaWolf from '../assets/Virginia Wolfs.png'
import Witch from '../assets/Witch.png'

import './styles.css'
import { WerewolfContext } from '../Context';
import React, { useContext } from 'react'

let imagesVillager = [
    [AprenticeSeer,4],
    [AuraSeer,3],
    [Bodyguard,3],
    [Creeper,-2],
    [Cupid,-3],
    [Detective,6],
    [Diseased,3],
    [Dopplehanger,-2],
    [Ghost,2],
    [Hunter,3],
    [Lycan,-1],
    [Mason,2],
    [Mayor,2],
    [MysticSeer,9],
    [OldHag,1],
    [Pacifist,-1],
    [Pi,3],
    [Priest,3],
    [Prince,3],
    [Revealer,4],
    [Seer,7],
    [Skeleton,3],
    [Snitch,4],
    [Speelcaster,1],
    [ToughGuy,3],
    [Troublemaker,-3],
    [VillageIdiot,2],
    [Villager,1],
    [VirginiaWolf,-2],
    [Witch,4],
    [Chupacabra,4],
    [CultLeader,1],
    [Tanner,-2],
]
function VillageCards () {
    const context = useContext(WerewolfContext)
    return(
        <main className={`w-[100%] h-[100%] absolute top-0 ${(context.villageCardsOn == true ?  'displayOn' : 'displayOff')}`}>
            <div className='w-[100%] h-[100%] flex justify-center items-center'>
                <div className='villageMenuCard w-6/7 h-4/5 border-4 bg-orange-300 relative rounded-lg'>
                    <header className='bg-white w-full h-[9%] flex justify-center opacity-[0.8]  '>
                        <h1 className='VillageTittle absolute left-2 top-1 '>👨🏻‍🌾</h1>
                        <h1 className='VillageTittle underline'>Village </h1>
                        <h1 className='VillageTittle absolute right-2 top-1 '>☀️</h1>
                    </header>
                        <div className='CardsGridV mt-2'>
                    
                        {imagesVillager.map((image, index) => (
                            <div key={index} className='ImgCardContainer relative' 
                                onClick={()=> {
                                    
                                    context.villageCardClicked(imagesVillager[index])
                                    context.clickSun()
                                    
                                }

                                }
                            >
                                <img className="ImgCard" src={image[0]} alt={`Image ${index}`} />
                                <h2 className='ImgNum absolute top-1 left-2 text-white rounded-md font-bold'>{image[1]}</h2>
                            </div>
                            ))}

                        </div>

                </div>
                               
            </div>
        </main>
    )
}

export default VillageCards

