import { useState } from 'react';
import GameWrapper from './components/GameWrapper';
import i18n from './i18n';
import './App.css';

type GameType = 'none' | 'snake' | 'minesweeper' | 'breakout';

function App() {
  const [currentGame, setCurrentGame] = useState<GameType>('none');

  const renderContent = () => {
    switch (currentGame) {
      case 'snake':
        return (
          <div className="game-container">
            <h2 className="title-neon">{i18n.games.snake}</h2>
            <p style={{ textAlign: 'center' }}>Coming Soon...</p>
            <button className="retro-button" onClick={() => setCurrentGame('none')}>
              {i18n.backToMenu}
            </button>
          </div>
        );
      case 'minesweeper':
        return (
          <div className="game-container">
            <h2 className="title-neon">{i18n.games.minesweeper}</h2>
            <p style={{ textAlign: 'center' }}>Coming Soon...</p>
            <button className="retro-button" onClick={() => setCurrentGame('none')}>
              {i18n.backToMenu}
            </button>
          </div>
        );
      case 'breakout':
        return (
          <div className="game-container">
            <h2 className="title-neon">{i18n.games.breakout}</h2>
            <p style={{ textAlign: 'center' }}>Coming Soon...</p>
            <button className="retro-button" onClick={() => setCurrentGame('none')}>
              {i18n.backToMenu}
            </button>
          </div>
        );
      default:
        return (
          <div className="menu-container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            gap: '2rem'
          }}>
            <h1 className="title-neon">{i18n.title}</h1>

            <div className="menu-options" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '80%',
              maxWidth: '300px'
            }}>
              <button className="retro-button" onClick={() => setCurrentGame('snake')}>
                {i18n.games.snake}
              </button>
              <button className="retro-button" onClick={() => setCurrentGame('minesweeper')}>
                {i18n.games.minesweeper}
              </button>
              <button className="retro-button" onClick={() => setCurrentGame('breakout')}>
                {i18n.games.breakout}
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <GameWrapper>
      {renderContent()}
    </GameWrapper>
  );
}

export default App;
