import Image from 'next/image';
import { useState } from 'react';
import style from '../styles/Grid.module.css';

function Grid({ pages, comic }) {
  const [selection, setSelection] = useState(null);
  if (!pages) {
    return null;
  }
  if (selection !== null) {
    return (
    // eslint-disable-next-line @next/next/no-img-element
      <div onClick={() => setSelection(null)}>
        <img
          className={style.fullscreen}
          src={`/${comic}/${selection}`}
          alt={selection}
          fill
        />
      </div>
    );
  }

  return (
    <div className={style.grid}>
      {pages.map(
        (page) => (
          <div
            key={page}
            className={style.imageCont}
            onClick={() => setSelection(page)}
          >
            <Image
              alt={page}
              src={`/${comic}/${page}`}
              className={style.image}
              fill
            />
          </div>
        ),
      )}
    </div>
  );
}

export default Grid;
