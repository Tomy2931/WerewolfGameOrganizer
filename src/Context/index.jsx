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


    //Actualizadores V
    const [cardImgInfoV, setCardImgInfoV] = useState([])
    const [cardPointInfoV, setCardPointInfoV] = useState(0)
    
    const villageCardClicked = (img) => {
      let updatedCardImgInfoV = [...cardImgInfoV, img]

      let updatedCardPointInfoV = cardPointInfoV + img[1]

      setCardImgInfoV(updatedCardImgInfoV)
      setCardPointInfoV(updatedCardPointInfoV)
    }
    const eliminatedImgV = (num) => {setCardPointInfoV(cardPointInfoV-num)}
    
    //Actualizadores W
    const [cardImgInfoW, setCardImgInfoW] = useState([])
    const [cardPointInfoW, setCardPointInfoW] = useState(0)
    
    const werewolfCardClicked = (img) => {
      let updatedCardImgInfoW = [...cardImgInfoW, img]
      let updatedCardPointInfoW = cardPointInfoW + img[1]

      setCardPointInfoW(updatedCardPointInfoW)
      setCardImgInfoW(updatedCardImgInfoW)
    }
    const eliminatedImgW = (num) => {setCardPointInfoW(cardPointInfoW-num)}

  

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
          cardPointInfoV,
          setCardPointInfoV,
          eliminatedImgV,
          villageCardClicked,
          cardImgInfoW,
          setCardImgInfoW,
          werewolfCardClicked,
          eliminatedImgW,
          cardPointInfoW,
          setCardPointInfoW,
          

    
        }}>
          {children}
        </WerewolfContext.Provider>
    );
};
