import { useState, useEffect } from "react";
import useMines from "../utils/useMines"
import Upgrades from "./Upgrades";

export default function Mining() {
    const [minesPerSecond, setMinesPerSecond] = useState(()=> {
        const savedMinesPerSecond = localStorage.getItem('minesPerSecond');
        return savedMinesPerSecond ? JSON.parse(savedMinesPerSecond) : 1;
    });
    
    const {mines, setMines} = useMines(minesPerSecond);
    useEffect(() => {
        localStorage.getItem('minesPerSecond', JSON.stringify(minesPerSecond));
    },[minesPerSecond]);

    const handleMineClick = () => {
        setMines((prevMines) => prevMines + 1);
    const audio = new Audio("/sounds/Dig.mp3")
    audio.play()}
    const handleResetClick = () => {
        setMines(0);
        localStorage.removeItem('mines');
    }

    return (
        <div className="mines-counter">
            <button onClick={handleMineClick}><img src="../images/bitcoin-mining.png" alt="bitcoin logo" width={70}  height={70} /></button><br />
            <button onClick={handleResetClick}>Reset</button>
            <h2><span className="mines-value">{mines}</span></h2>
            <p>Mines per second: {minesPerSecond}</p>
            <Upgrades 
            setMinesPerSecond={setMinesPerSecond}
            mines={mines}
            setMines={setMines}
            />
            </div>
    )
}