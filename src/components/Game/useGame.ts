import { useState } from "react";
import { SHIP_LAYOUT } from "@utils";

export type TAttacked = [number, number][];

export const useGame = () => {
  const [attacked, setAttacked] = useState<TAttacked>([]);

  const onClick = (x: number, y: number) => {
    // Add the attacked point to the array
    setAttacked((prev) => [...prev, [x, y]]);

    // Find the ship layout that matches the attacked position
    const layout = SHIP_LAYOUT.layout.find((shipLayout) =>
      shipLayout.positions.some(
        ([shipRow, shipCol]) => shipRow === x && shipCol === y
      )
    );

    if (layout) {
      // Check if the layout already has an "attackedPositionsCount" field, and initialize it if not
      if (!layout.attackedPositionsCount) {
        layout.attackedPositionsCount = 1;
      } else {
        layout.attackedPositionsCount++;
      }

      // Check if all positions of the ship have been attacked
      if (layout.attackedPositionsCount === layout.positions.length) {
        layout.isCrushed = true;
      }
    }
  };

  return {
    attacked,
    onClick,
  };
};
