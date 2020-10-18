import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { AppContext } from '../../App';

import PagePalette from '../../config/PagePalette';

export default function FamilyGuyCharacters({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const { manageAppContext } = useContext(AppContext);
  const numOfImg = manageTickTackToeContext.characters.length;

  const handleImageClick = (data) => {
    if (!manageTickTackToeContext.playerOne)
      manageTickTackToeContext.setPlayerOne(data);
    else manageTickTackToeContext.setPlayerTwo(data);
  };

  return (
    <div   style={{
      ...styles.container,
      ...{ color: PagePalette[manageAppContext.page].primary },
    }}>
      <div style={styles.wrapper}>
        {manageTickTackToeContext.characters.map((img, i) => (
          <div
            key={img.id}
            style={numOfImg - i - 1 !== 0 ? styles.img : styles.lastChild}
          >
            <div style={styles.name}>{img.name}</div>
            <img
              style={styles.img}
              key={img.id}
              alt={img.name}
              src={img.img}
              onClick={(data) => handleImageClick(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gridGap: 15,
    justifyContent: 'space-around',
    width: '60vw',
    height: '60vh',
    overflow: 'auto',
    cursor: 'pointer',
  },
  lastChild: {
    display: 'grid',
    gridColumn: '1 / 5',
    justifyContent: 'center',
    height: '15vh',
  },
  img: {
    display: 'grid',
    justifyContent: 'center',
    height: '15vh',
  },
  name: {
    display: 'grid',
    justifyContent: 'center',
    marginBottom: 10,
  },
};
