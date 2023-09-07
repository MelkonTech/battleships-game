import { useEffect, useMemo, useState } from "react";
import { SHIP_LAYOUT } from "@utils";

export type TAttacked = [number, number][];

export const useGame = () => {
  const [attacked, setAttacked] = useState<TAttacked>([]);
  const [crashedCount, setCrashedCount] = useState<number>(0);

  const onClick = (x: number, y: number) => {
    const attachAudio = new Audio("/sounds/attack.mp3");
    const missAudio = new Audio("/sounds/miss.mp3");
    // Add the attacked point to the array
    setAttacked((prev) => [...prev, [x, y]]);

    // Find the ship layout that matches the attacked position
    const layout = SHIP_LAYOUT.layout.find((shipLayout) =>
      shipLayout.positions.some(
        ([shipRow, shipCol]) => shipRow === x && shipCol === y
      )
    );

    if (layout) {
      attachAudio.play();
      // Check if the layout already has an "attackedPositionsCount" field, and initialize it if not
      if (!layout.attackedPositionsCount) {
        layout.attackedPositionsCount = 1;
      } else {
        layout.attackedPositionsCount++;
      }

      // Check if all positions of the ship have been attacked
      if (layout.attackedPositionsCount === layout.positions.length) {
        // Increase the crashed count
        setCrashedCount((prev) => prev + 1);
      }
    } else {
      missAudio.play();
    }
  };

  const youWin = useMemo(() => {
    return crashedCount === SHIP_LAYOUT.layout.length;
  }, [crashedCount]);

  useEffect(() => {
    if (youWin) {
      alert("You win!");
      window.location.reload();
    }
  }, [youWin]);

  return {
    attacked,
    onClick,
    crashedCount,
  };
};
