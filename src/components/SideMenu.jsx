import React from 'react'
import { Gamepad2, Home, Grid, Heart, ShoppingBag, TvMinimalPlay, Share2 } from 'lucide-react'

export default function SideMenu() {
    return (
        <div className='w-64 bg-[#15222e] text-slate-300 h-screen p-6 flex flex-col justify-between border-r border-[#1b2d3d] rounded-3xl shadow-2xl'>
            <div>
                <a href="#" className="flex items-center gap-3 text-white mb-10 mt-2 hover:opacity-90">
                    <Gamepad2 className="w-9 h-9" />
                    <span className="text-3xl font-black tracking-wider uppercase font-sans">Play</span>
                </a>
                <ul className="flex flex-col gap-2">
                    <li>
                        <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#0f1922]/60 text-white font-semibold border border-[#1b2d3d]/50 shadow-inner transition-all">
                            <Home className="w-5 h-5 text-slate-400" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0f1922]/30 hover:text-white font-medium text-slate-400 transition-all group">
                            <Grid className="w-5 h-5 group-hover:text-slate-300" />
                            <span>Categories</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0f1922]/30 hover:text-white font-medium text-slate-400 transition-all group">
                            <Heart className="w-5 h-5 group-hover:text-slate-300" />
                            <span>My Library</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0f1922]/30 hover:text-white font-medium text-slate-400 transition-all group">
                            <ShoppingBag className="w-5 h-5 group-hover:text-slate-300" />
                            <span>My Bag</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1b2d3d]/40">
                <div className="flex items-center gap-4 text-slate-400">
                    <a href="#" className="hover:text-white transition-colors">
                        <Gamepad2 className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-white font-black text-lg transition-colors leading-none font-mono">
                        X
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <TvMinimalPlay className="w-5 h-5" />
                    </a>
                </div>
                <button className="bg-[#1cb0b8] hover:bg-[#158c92] text-[#0f1922] p-2.5 rounded-full shadow-lg transition-transform active:scale-95">
                    <Share2 className="w-5 h-5 fill-current" />
                </button>
            </div>

        </div>
    )
}