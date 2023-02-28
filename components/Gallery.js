import Image from 'next/image';
import style from '@/styles/Gallery.module.css';
import useImageList from '@/hooks/useImageList';

function Gallery({ pages, comic, width = '100vw' }) {
  const {
    first,
    prev,
    next,
    last,
    pageSrc,
    onFirstPage,
    onLastPage,
  } = useImageList({ pages });

  const navigation = (
    <div className={style.navigation}>
      <button
        type="button"
        disabled={onFirstPage}
        onClick={first}
      >
        <Image
          src="/first.webp"
          height={50}
          width={50}
          alt="first page"
        />
      </button>
      <button
        type="button"
        disabled={onFirstPage}
        onClick={prev}
      >
        <Image
          src="/prev.webp"
          height={50}
          width={50}
          alt="previous page"
        />
      </button>
      <button
        type="button"
        disabled={onLastPage}
        onClick={next}
      >
        <Image
          src="/next.webp"
          height={50}
          width={50}
          alt="next page"
        />
      </button>
      <button
        type="button"
        disabled={onLastPage}
        onClick={last}
      >
        <Image
          src="/last.webp"
          height={50}
          width={50}
          alt="last page"
        />
      </button>
    </div>
  );

  return (
    <div className={style.mainContainer} style={{ maxWidth: width }}>
      {navigation}
      <div className={style.imgContainer}>
        <Image
          alt={pageSrc}
          src={`/${comic}/${pageSrc}`}
          className={style.image}
          fill
        />
      </div>
      {navigation}
    </div>
  );
}

export default Gallery;
