import React from 'react'
import { Gamepad, Home } from 'lucide-react'

export default function SideMenu() {
    return (
        <div className='sideMenu'>
            <a href="#" className="logo"><span className="brand">Play</span></a>
            <ul className="nav">
                <li><a href="#">Home</a><Home/></li>
            </ul>
        </div>
    )
}
