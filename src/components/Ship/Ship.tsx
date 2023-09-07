import { FC } from "react";

type ShipProps = {
  name: string;
  image: string;
  attackedCount: number;
  size: number;
};

const Ship: FC<ShipProps> = ({ name, size, attackedCount, image }) => {
  return (
    <div className='flex items-center gap-2 lg:gap-4 lg:mt-6 mt-0'>
      <div className='flex w-full transition-all max-w-[60px] md:max-w-[80px] lg:max-w-[208px] lg:h-12 h-auto flex-shrink-0'>
        <img className='w-full object-contain' src={image} alt={name} />
      </div>
      <div className='flex items-center gap-2 flex-shrink-0'>
        {Array.from(Array(size), (_, i) => i).map((x) => {
          if (x < attackedCount) {
            return (
              <img
                key={x}
                src='/images/Hit small.png'
                alt='Hit Small'
                className='lg:w-6 lg:h-6 transition-all w-4 h-4'
              />
            );
          }
          return (
            <img
              key={x}
              src='/images/Miss small.png'
              alt='Hit Small'
              className='lg:w-6 lg:h-6 transition-all w-4 h-4'
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ship;
