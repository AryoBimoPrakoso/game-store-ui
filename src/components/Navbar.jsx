import React from 'react'
import { Settings2, Heart, ShoppingBasket } from 'lucide-react'
import fotoUser from "/user.jpg"

export default function Navbar() {
    return (
        <div className='w-full flex justify-between p-8 text-white'>
            <button className='bg-[#15222e] p-4 rounded-xl shadow-[-3px_-3px_5px] shadow-white/10'>
                <Settings2 className='w-8 h-6'/>
            </button>
            <div className='flex gap-3 items-center'>
                <button className='bg-[#15222e] p-4 rounded-xl shadow-[-3px_-3px_5px] shadow-white/10'>
                    <Heart className='w-8 h-8'/>
                </button>
                <button className='bg-[#15222e] p-4 rounded-xl shadow-[-3px_-3px_5px] shadow-white/10'>
                    <ShoppingBasket className='w-8 h-8' />
                </button>
                <div className='flex gap-3 justify-center items-center bg-[#15222e] p-4 rounded-xl shadow-[-3px_-3px_5px] shadow-white/10'>
                    <img src={fotoUser} alt="Foto user" className='w-8 h-8 rounded-full' />
                    <div className='flex flex-col text-sm'>
                        <h2>Username</h2>
                        <p>View Profile</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
