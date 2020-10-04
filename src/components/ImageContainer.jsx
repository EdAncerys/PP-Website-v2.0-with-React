import React, { useState } from 'react';
import { BsPhone } from 'react-icons/bs';

import colors from '../config/colors';

export default function ImageContainer({ img, altText, text }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: hover ? 500 : 250,
        border: hover ? `1px solid ${colors.black}` : '',
        borderRadius: hover ? '10% 10% 0% 10%' : '50% 50% 10% 50%',
        boxShadow: `7px 7px 20px -5px ${colors.black}`,
        overflow: 'hidden',
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover && <img style={styles.img} src={img} alt={altText} />}
      {hover && <div style={styles.text}>{text}</div>}
    </div>
  );
}

const styles = {
  img: {
    height: 250,
  },
  text: {
    padding: 10,
    overflow: 'hidden',
  },
};
