import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import CardList from './components/CardList'
import SideMenu from './components/SideMenu'
import Navbar from './components/Navbar'
import gamesData from "./data/gamesData.json"
import GameSwiper from './components/GameSwiper'

function App() {
  return (
    <div className="flex bg-[#0f1922] min-h-screen w-full overflow-x-hidden ">
      <SideMenu /> 
      <div className="flex-1 h-screen overflow-y-auto bg-[#15222e] p-4 rounded-xl shadow-[-3px_-3px_5px] shadow-white/10">
        <Navbar />
        <GameSwiper games={gamesData}/>
        <CardList games={gamesData}/>
      </div>

    </div>
  )
}

export default App
