import { createContext, FC, ReactNode, useContext } from "react";
import { TAttacked, useGame } from "./useGame";

type TGamecontext = {
  attacked?: TAttacked;
  onClick?: (x: number, y: number) => void;
};

export const GameContext = createContext<TGamecontext>({});

type GameProviderProps = {
  children: ReactNode;
};

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const { attacked, onClick } = useGame();

  return (
    <GameContext.Provider
      value={{
        attacked,
        onClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const { attacked, onClick } = useContext(GameContext);

  return {
    attacked: attacked || [],
    onClick: onClick || (() => {}),
  };
};
