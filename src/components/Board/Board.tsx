import { useGameContext } from "@components/Game/GameProvider";
import { HIDDEN_POINTS } from "@utils";

const Board = () => {
  const { attacked, onClick } = useGameContext();

  return (
    <div className='my-1 w-[calc(100vw-8px)] h-[100vw] lg:w-[50vw] lg:h-[50vw] md:max-w-[520px] md:max-h-[520px] shadow-board flex-shrink-0'>
      {Array.from(Array(10), (_, i) => i + 1).map((x) => {
        return (
          <div className='flex flex-row' key={x}>
            {Array.from(Array(10), (_, i) => i + 1).map((y) => {
              return (
                <div
                  className='w-[10vw] h-[10vw] md:w-[52px] md:h-[52px] border border-black'
                  key={y}
                  onClick={() => onClick(x, y)}
                >
                  {!!attacked.find((item) => item[0] === x && item[1] === y) ? (
                    <>
                      {HIDDEN_POINTS.find(
                        (item) => item[0] === x && item[1] === y
                      ) ? (
                        <img
                          src='/images/Hit.png'
                          alt='Hit'
                          className='w-full h-full object-contain'
                        />
                      ) : (
                        <img
                          src='/images/Miss.png'
                          alt='Miss'
                          className='w-full h-full object-contain'
                        />
                      )}
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
