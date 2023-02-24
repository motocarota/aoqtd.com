import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import _padStart from 'lodash/padStart';
import style from '../cssModules/Gallery.module.css';

const Gallery = ({ pages, basePath }) => {
  const [page, setPage] = useState(0);

  const next = useCallback(
    () => {
      if (page >= pages.length - 1) {
        return;
      }
      setPage(page + 1);
    },
    [pages, page]
  );
  const prev = useCallback(
    () => {
      if (page <= 0) {
        return;
      }
      setPage(page - 1);
    },
    [page]
  );
  useEffect(() => {
    const keyUpManager = (ev) => {
      switch (ev.key) {
        case 'ArrowLeft': {
          return prev()
        }
        case ' ':
        case 'ArrowRight': {
          return next();
        }
        default: {}
      }
    }
    document.addEventListener("keyup", keyUpManager);

    // clean up
    return () => {
      document.removeEventListener("keyup", keyUpManager);
    };
  }, [next, prev]);

  let pageSrc = useMemo(
    () => pages[page],
    [pages, page],
  );
  const onFirstPage = page <= 0;
  const onLastPage = page >= pages.length - 1;
  const navigation = (
    <ul className={style.navigation}>
      <button
        type='button'
        disabled={onFirstPage}
        onClick={() => setPage(0)}
      >
        <Image
          src='/first.png'
          height={50}
          width={50}
          alt="first page"
        />
      </button>
      <button
        type='button'
        disabled={onFirstPage}
        onClick={() => prev()}
      >
        <Image
          src='/prev.png'
          height={50}
          width={50}
          alt="previous page"
        />
      </button>
      <button
        type='button'
        disabled={onLastPage}
        onClick={() => next()}
      >
        <Image
          src='/next.png'
          height={50}
          width={50}
          alt="next page"
        />
      </button>
      <button
        type='button'
        disabled={onLastPage}
        onClick={() => setPage(pages.length - 1)}
      >
        <Image
          src='/last.png'
          height={50}
          width={50}
          alt="last page"
        />
      </button>
    </ul>
  )

  return (
    <div>
      {navigation}
      <div className={style.imgContainer}>
        <Image
          src={`${basePath}/${pageSrc}`}
          alt={page}
          width={800}
          height={1132}
          priority
          />
      </div>
      {navigation}
    </div>
  );
};

export default Gallery;