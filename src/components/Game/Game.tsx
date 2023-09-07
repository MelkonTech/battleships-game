import { Board } from "@components/Board";
import { Player } from "@components/Player";
import { Ship } from "@components/Ship";
import { SHIP_LAYOUT, capitalize, players } from "@utils";

const Game = () => {
  return (
    <div className='flex gap-0 md:gap-8 justify-center flex-col-reverse items-center lg:flex-row lg:items-start  mt-8 transition-all'>
      <div className='w-full max-w-full transition-all lg:max-w-sm flex flex-col md:flex-row lg:flex-col lg:gap-0 gap-6 md:pb-0 pb-16'>
        <div className='flex lg:w-auto md:max-w-sm max-w-full w-full transition-all'>
          {players.map((player) => (
            <Player {...player} />
          ))}
        </div>
        <div className='mt-0 flex-grow lg:mt-6 grid grid-cols-2 lg:grid-cols-1 lg:gap-0 gap-3'>
          {Object.entries(SHIP_LAYOUT.shipTypes).map(([name, ship], idx) => (
            <Ship
              key={idx}
              {...ship}
              name={name}
              attackedCount={2}
              image={`/images/${capitalize(name)} Shape.png`}
            />
          ))}
        </div>
      </div>
      <Board />
    </div>
  );
};

export default Game;
