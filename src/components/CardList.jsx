import React from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react';

export default function CardList({ games }) {
    return (
        <div className='p-8 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {games.map((item) => (
                <div key={item._id} className='bg-[#15222e] border border-[#1b2d3d] rounded-2xl p-4 shadow-[-4px_-6px_5px] shadow-white/10  flex flex-col justify-between relative'>
                    <div>
                        <div
                            className='relative h-40 w-full bg-cover bg-center rounded-xl overflow-hidden'
                            style={{
                                backgroundImage: `url(${item.img})`
                            }}>
                            <button className='absolute top-2.5 right-2.5 text-white hover:text-red-500 transition-colors'>
                                <Heart className='w-5 h-5 hover:fill-current text-white' />
                            </button>
                        </div>
                        <div className='flex justify-between items-center mt-4 mb-3'>
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${item.level === 'Entry' ? 'bg-[#156e70]' : 'bg-[#1c7a8c]'
                                }`}>
                                {item.level}
                            </span>
                            <div className='flex gap-0.5 text-[#1cb0b8]'>
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className='w-4 h-4 fill-current' />
                                ))}
                            </div>
                        </div>
                        <h2 className='text-white font-black text-sm uppercase tracking-wide line-clamp-1 mb-4'>
                            {item.title}
                        </h2>
                    </div>
                    <div className='flex justify-between items-center mt-auto'>
                        <div className='flex items-center gap-2'>
                            <span className='bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded italic'>
                                {item.discount * 100}%
                            </span>
                            <span className='text-red-500 line-through text-xs font-bold'>
                                ${item.price}
                            </span>
                            <span className='text-white text-sm font-black'>
                                ${item.price * item.discount}
                            </span>
                        </div>
                        <button className='bg-[#1cb0b8] hover:bg-[#158c92] text-[#0f1922] p-2 rounded-lg transition-colors absolute bottom-4 right-4 shadow-md'>
                            <ShoppingBag className='w-4 h-4 ' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};