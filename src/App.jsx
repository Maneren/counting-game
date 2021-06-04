import './App.module.css';
import { useState } from 'react';
import Utils from 'my-utils';
const { React: { classes: cl } } = Utils;

function App () {
  const [number, setNumber] = useState(0);

  const [multiplayer, setMultiplayer] = useState(0);
  const modes = ['1 Hráč', '2 Hráči'];

  const [difficulty, setDifficulty] = useState(0);
  const difficulties = ['Lehká', 'Střední', 'Těžká'];

  const [starting, setStarting] = useState(0);
  const startings = ['Ty', 'AI'];

  const [isStarted, setIsStarted] = useState(false);

  const start = () => {
    setIsStarted(true);
  };

  return (
    <div className={cl('App')}>
      <div className={cl('main_menu')}>
        <h1>Nastavení hry</h1>
        <div className={cl('option')}>
          <h4>Typ hry</h4>
          <div className={cl('menu')}>
            {modes.map((mode, index) => (
              <button key={index} onClick={() => setMultiplayer(!!index)} className={cl('mode white')}>{mode}</button>
            ))}
          </div>
        </div>

        {multiplayer
          ? (
            <>
              <div className={cl('option')}>
                <h4>Obtížnost</h4>
                <div className={cl('menu')}>
                  {difficulties.map((difficulty, index) => (
                    <button key={index} onClick={() => setDifficulty(index)} className={cl('difficulty white')}>{difficulty}</button>
                  ))}
                </div>
              </div>

              <div className={cl('option')}>
                <h4>Začínající hráč</h4>
                <div className={cl('menu')}>
                  {startings.map((starting, index) => (
                    <button key={index} onClick={() => setStarting(index)} className={cl('starting white')}>{starting}</button>
                  ))}
                </div>
              </div>
            </>
            )
          : null}

        <button id='start' onClick={() => start()}>Start</button>
      </div>

      <div className={cl('game')}>
        <div>
          <h1 className={cl('title')}>Counting game</h1>
        </div>
        <div>
          <h1 className={cl('number')}>{number}</h1>
        </div>
        <div>
          <input name='input' type='number' className={cl('input')} placeholder='Napiš číslo' autoFocus />
          <button onclick='count()' className={cl('white')} id='confirm'>Potvrdit</button>
        </div>
        <p><b>Instrukce:</b> Napiš číslo od 1 do 10. Pak napíše číslo AI. Čísla se sčítají. Kdo dopočte do 100, vyhrál.</p>
        <p><b>Obtížnost: <span id='diff'>Střední</span></b></p>
        <p id='log'><b>Záznam:</b></p>
        <button className={cl('restart white')} onclick='restart()'>Restart</button>
        <br /><br />
        <button className={cl('new-game white')} onclick='new()'>Nová hra</button>
      </div>
    </div>
  );
}

export default App;
