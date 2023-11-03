import { WerewolfContext } from '../Context';
import './style.css'
import loadingImg from '../assets/loadingWallpaper.png'

function LoadingScreen() {

    return (
     
        <main className='loadingMain'>
            <div className='loadingDiv relative'>
              <img className='loadingImg' src={loadingImg} alt="" />
              <div className='loadingBar'> <div className='loadingBarProgres'></div> </div>
            </div>
        </main>
      
         
    )
  }
  
  
  
  export default LoadingScreen;