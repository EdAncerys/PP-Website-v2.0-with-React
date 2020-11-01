import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { AppContext } from '../../App';
import Button from '../Button';

import PagePalette from '../../config/PagePalette';
import Character from './Character';
import GameBoard from './GameBoard';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const { manageAppContext } = useContext(AppContext);

  const handlePlayAgain = () => {
    manageTickTackToeContext.setTakenTiles([]);
    manageTickTackToeContext.setPlayerOneTiles([]);
    manageTickTackToeContext.setPlayerTwoTiles([]);
  };

  const handleNewGame = () => {
    manageTickTackToeContext.setPlayerOne(false);
    manageTickTackToeContext.setPlayerTwo(false);
    manageTickTackToeContext.setTakenTiles([]);
    manageTickTackToeContext.setPlayerOneTiles([]);
    manageTickTackToeContext.setPlayerTwoTiles([]);
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{ color: PagePalette[manageAppContext.page].primary },
      }}
    >
      <div style={styles.wrapper}>
        <Character
          src={manageTickTackToeContext.playerOne.img}
          name={manageTickTackToeContext.playerOne.name}
        />
        <div style={styles.vs}>vs</div>
        <Character
          src={manageTickTackToeContext.playerTwo.img}
          name={manageTickTackToeContext.playerTwo.name}
        />
      </div>
      <div style={styles.gameBoard}>
        <GameBoard />
      </div>
      <div style={styles.buttonComponent}>
        <Button title="Play Again" onClick={() => handlePlayAgain()} />
        <Button
          title="New Game"
          solid={false}
          onClick={() => handleNewGame()}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    rowGap: 50,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    alignContent: 'center',
    justifyItems: 'center',
    columnGap: 100,
  },
  vs: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 30,
  },
  gameBoard: {
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
  },
  buttonComponent: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyItems: 'center',
    alignContent: 'center',
  },
};
