import { TPlayer } from "@types";

export const players: TPlayer[] = [
  {
    name: "player 1",
    color: "GREEN",
    count: 0,
  },
  {
    name: "player 2",
    color: "ORANGE",
    count: 0,
  },
];

export const SHIP_LAYOUT = {
  shipTypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
  },
  layout: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
      attackedPositionsCount: 0,
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
      attackedPositionsCount: 0,
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
      attackedPositionsCount: 0,
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
      attackedPositionsCount: 0,
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
      attackedPositionsCount: 0,
    },
  ],
};

export const HIDDEN_POINTS = SHIP_LAYOUT.layout.flatMap(
  (layout) => layout.positions
);
