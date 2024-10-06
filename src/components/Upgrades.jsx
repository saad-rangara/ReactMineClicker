import { useEffect, useState } from "react";

export default function Upgrades({mines, setMines, setMinesPerSecond}){
    const[upgrades, setUpgrades] = useState([]);
    const[error, setError] = useState("");

console.log("UPGRADE");

useEffect(() => {
    async function fetchUpgrades() {
        const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
        const data = await response.json();
        console.log(data);
        setUpgrades(data);
    }
    fetchUpgrades();
}, []);

function handleUpgradeClick(cost, increase) {
    console.log("Upgrade clicked");
    console.log(`Mines available: ${mines}, Upgrade cost: ${cost}`);
    
    if (mines >= cost) {
        setMines((currentMines) =>  currentMines - cost);
        setMinesPerSecond((currentMinesPerSecond) => currentMinesPerSecond + increase);
        setError("");
        const audio = new Audio("/sounds/Upgrade.mp3")
        audio.play()
    } else {
        setError("Not enough mines to upgrade!");
        console.log("Not enough funds to upgrade!");
        setTimeout(() => {
            setError("");
            }, 3500);
        }
}

const upgradeNames = ["Kilohash", "Megahash", "Gigahash", "Terahash", "Petahash", "Exahash", "Zettahash", "Yottahash","Brontohasg","Geopbyte"];

return ( 
<div className="upgradeSection">
    <h3>Available Mines: {mines}</h3>
    {error  && <p className="error">{error}</p>}
    <div className="upgradeContainer">
        {upgrades.map((upgrade, id) => {
            return (
                <div key={upgrade.id} className="upgradeInfo">
                    <span className="upgradeDetails">
                        <h4>{upgradeNames[id]}</h4>
                        <p><b>Cost:</b> {upgrade.cost}</p>
                        <p><b>Increase:</b> {upgrade.increase}</p>
                        </span>
                    <button className={`upgrade-button ${mines < upgrade.cost ? 'disabled' : ''}`}
                    disabled={mines <  upgrade.cost} 
                    onClick={() => handleUpgradeClick(upgrade.cost, upgrade.increase)}>Upgrade</button>
                </div>
            )})}
    </div>
    </div>
    );
}