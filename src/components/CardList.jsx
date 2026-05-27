import React from 'react'
import { useGames } from '../hooks/useGame';

export default function CardList() {
    const { games, loading, error } = useGames();

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className='bg-red-300 grid grid-flow-col grid-rows-4 gap-4'>
            {games.map((game) => (
                <div key={game.gameID}>
                    <h2>{game.title}</h2>
                    <img src={game.thumb} alt="" />
                </div>
            ))}
        </div>
    )
}
