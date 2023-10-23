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

   

    return (
        <WerewolfContext.Provider value={{
          playersCount,
          setPlayersCount,
          buttonPlayerAdd,
          buttonPlayerRem,
    
        }}>
          {children}
        </WerewolfContext.Provider>
    );
};
