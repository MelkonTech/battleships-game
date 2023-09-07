const Board = () => {
  return (
    <div className='my-1 w-screen h-[100vw] lg:w-[50vw] lg:h-[50vw] md:max-w-[520px] md:max-h-[520px] shadow-board flex-shrink-0'>
      {Array.from(Array(10), (_, i) => i + 1).map((x) => {
        return (
          <div className='flex flex-row' key={x}>
            {Array.from(Array(10), (_, i) => i + 1).map((y) => {
              return (
                <div
                  className='w-[10vw] h-[10vw] md:w-[52px] md:h-[52px] border border-black'
                  key={y}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
