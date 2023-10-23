import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../../Home/'
import {WerewolfProvider} from '../Context/index'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ])

  return routes
}


function App() {
  return (
    
    <WerewolfProvider>
    <BrowserRouter>
    <main>
      <AppRoutes />
    </main>
    </BrowserRouter>
    </WerewolfProvider>
      
  )
}

export default App
