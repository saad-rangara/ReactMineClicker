import { useEffect, useState } from "react";

export default function useMines(minesPerSecond) {
  const [mines, setMines] = useState(() => {
    const savedMines = localStorage.getItem("mines");
    return savedMines ? JSON.parse(savedMines) : 0;
  });

  useEffect(() => {
    localStorage.getItem("mines", JSON.stringify(mines));
  }, [mines]);

  useEffect(() => {
    const minesPerSecondInterval = setInterval(() => {
      setMines((currentMines) => currentMines + minesPerSecond);
    }, 1000);

    return () => {
      clearInterval(minesPerSecondInterval);
    };
  }, [minesPerSecond]);

  return { mines, setMines };
}
