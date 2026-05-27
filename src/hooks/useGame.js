import { useEffect, useState } from "react";
import { fecthData } from "../services/gameService";

export const useGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getGames = async () => {
            try {
                const data = await fecthData();
                setGames(data);
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false);
            }
        };

        getGames();
    }, []);

    return { games, loading, error }
};