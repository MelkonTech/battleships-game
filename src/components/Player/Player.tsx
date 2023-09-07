import { TPlayer } from "@types";
import { merge } from "@utils";
import { FC } from "react";

const Player: FC<TPlayer> = ({ color, count, name }) => {
  return (
    <div
      className={merge("p-4 w-full", {
        "bg-green-500": color === "GREEN",
        "bg-orange-500": color === "ORANGE",
      })}
    >
      <h1 className='text-center font-bold pt-4 pb-6 text-5xl text-gray-800 border-b border-gray-800'>
        {count > 10 ? count : `0${count}`}
      </h1>
      <p className='font-bold text-xl mt-3 text-center text-gray-800'>{name}</p>
    </div>
  );
};

export default Player;
