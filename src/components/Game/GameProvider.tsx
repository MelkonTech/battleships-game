import { createContext, FC, ReactNode, useContext } from "react";
import { TAttacked, useGame } from "./useGame";

type TGamecontext = {
  attacked?: TAttacked;
  onClick?: (x: number, y: number) => void;
  crashedCount?: number;
};

export const GameContext = createContext<TGamecontext>({});

type GameProviderProps = {
  children: ReactNode;
};

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const gameProperties = useGame();

  return (
    <GameContext.Provider value={gameProperties}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const { attacked, onClick, crashedCount } = useContext(GameContext);

  return {
    attacked: attacked || [],
    onClick: onClick || (() => {}),
    crashedCount: crashedCount || 0,
  };
};
