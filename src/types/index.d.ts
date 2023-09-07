export type TPlayer = {
  count: number;
  name: string;
  color: "ORANGE" | "GREEN";
};

export type TShip = {
  name: string;
  size: number;
  position: [number, number][];
};
