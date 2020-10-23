import React, { useState, useContext } from 'react';
import { AppContext } from '../../App';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function BoardCell({ id }) {
  const { manageAppContext } = useContext(AppContext);
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  const [avatar, setAvatar] = useState();

  const handleClick = (data) => {
    const id = data.target.id;
    const player = manageAppContext.playerOneMove;

    if (player) {
      setAvatar(manageTickTackToeContext.playerOne.name);
      manageAppContext.setPlayerOne([...manageAppContext.playerOne, id]);
    }
    if (!player) {
      setAvatar(manageTickTackToeContext.playerTwo.name);
      manageAppContext.setPlayerTwo([...manageAppContext.playerTwo, id]);
    }
    manageAppContext.setTakenTiles([...manageAppContext.takenTiles, id]);
    manageAppContext.setPlayerOneMove(!player);
    console.log(id);
  };

  return (
    <div
      className="bangers"
      style={styles.container}
      onClick={(data) => handleClick(data)}
    >
      <div id={id} style={styles.avatar}>
        {avatar}
      </div>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'pointer',
  },
  avatar: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
};
