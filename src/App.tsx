import { useState } from 'react';
import { Game } from "@components/Game";

function App() {
  const [clicked, setClicked] = useState(false);

  const playSound = () => {
    const audio = new Audio('./audios/background.mp3');
    audio.play();
  };

  const handleGameClick = () => {
    if (!clicked) {
      playSound();
      setClicked(true);
    }
  };
  return (
    <div className='min-h-screen flex justify-center' onClick={handleGameClick}>
      <div className='w-full max-w-screen-xl'>
        <Game />
      </div>
    </div>
  );
}

export default App;
