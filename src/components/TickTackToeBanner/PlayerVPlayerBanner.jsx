import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { AppContext } from '../../App';
import Button from '../Button';

import PagePalette from '../../config/PagePalette';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const { manageAppContext } = useContext(AppContext);

  const handleImageClick = () => {
    console.log('click');
  };

  const handlePlayAgain = () => {
    manageTickTackToeContext.setPlayerOne(false);
    manageTickTackToeContext.setPlayerTwo(false);
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{ color: PagePalette[manageAppContext.page].primary },
      }}
    >
      <div style={styles.wrapper}>
        <div style={styles.img}>
          <div style={styles.name}>
            {manageTickTackToeContext.playerOne.name}
          </div>
          <img
            style={{ height: '15vh' }}
            alt={manageTickTackToeContext.playerOne.id}
            src={manageTickTackToeContext.playerOne.img}
            onClick={(data) => handleImageClick()}
          />
        </div>
        <div style={styles.vs}>v</div>
        <div style={styles.img}>
          <div style={styles.name}>
            {manageTickTackToeContext.playerTwo.name}
          </div>
          <img
            style={{ height: '15vh' }}
            alt={manageTickTackToeContext.playerTwo.id}
            src={manageTickTackToeContext.playerTwo.img}
            onClick={(data) => handleImageClick()}
          />
        </div>
        {/* <div style={{ ...styles.wrapper, ...{ gridTemplateColumns: 'auto auto auto' }}> */}
        <div
          style={{
            // ...styles.wrapper,
            ...{
              display: 'grid',
              // gridTemplateColumns: 'auto auto',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 100,
              // backgroundColor: 'tomato',
            },
          }}
        >
          <Button title="Play Again" onClick={() => handlePlayAgain()} />
          <div>Button2</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    rowGap: 50,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    alignContent: 'center',
    justifyItems: 'center',
    columnGap: 100,
  },
  name: {
    display: 'grid',
    justifyContent: 'center',
    marginBottom: 10,
  },
  vs: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 30,
  },
};
