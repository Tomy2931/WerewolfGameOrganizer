import React from 'react';
import { createContext, useState, useEffect } from 'react'


export const WerewolfContext = createContext()

export const WerewolfProvider = ({children}) => {
    const [playersCount,setPlayersCount] = useState(0)
    const buttonPlayerAdd = () => {
      if (playersCount < 20)
      setPlayersCount(playersCount+1)}
    const buttonPlayerRem = () => {
      if (playersCount > 0)
      setPlayersCount(playersCount-1)}

    //Pestaña cartas de aldeanos
    const [villageCardsOn,setVillageCardsOn] = useState(false)
    const clickInCard = () => {setVillageCardsOn(true)}
    const clickSun = () => {setVillageCardsOn(false)}

    //Pestaña cartas de lobos
    const [werewolfCardsOn,setWerewolfCardsOn] = useState(false)
    const clickInCardW = () => {setWerewolfCardsOn(true)}
    const clickMoon = () => {setWerewolfCardsOn(false)}


    //Actualizadores
    const [cardImgInfoV, setCardImgInfoV] = useState([])
    
    const villageCardClicked = (img) => {
      let updatedCardImgInfoV = [...cardImgInfoV, img]
      setCardImgInfoV(updatedCardImgInfoV)
    }
    console.log(cardImgInfoV);

    const [cardImgInfoW, setCardImgInfoW] = useState([])
    
    const werewolfCardClicked = (img) => {
      let updatedCardImgInfoW = [...cardImgInfoW, img]
      setCardImgInfoW(updatedCardImgInfoW)
    }

    return (
        <WerewolfContext.Provider value={{
          playersCount,
          setPlayersCount,
          buttonPlayerAdd,
          buttonPlayerRem,
          villageCardsOn,
          setVillageCardsOn,
          clickInCard,
          clickSun,
          werewolfCardsOn,
          setWerewolfCardsOn,
          clickInCardW,
          clickMoon,
          cardImgInfoV,
          setCardImgInfoV,
          villageCardClicked,
          cardImgInfoW,
          setCardImgInfoW,
          werewolfCardClicked,

    
        }}>
          {children}
        </WerewolfContext.Provider>
    );
};
