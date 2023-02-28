import Image from "next/image";
import Link from "next/link";
import style from "../styles/Top.module.css";

const Top = () => {

  return (
    <>
      <Link href="/">
        <Image src="/aoqtd-logo-sm.png" height={240} width={320} alt="www.aoqtd.com logo" />
      </Link>
      <nav className={style.header}>
        <Link href="/">Comic</Link>
        <Link href="/strip">Strips</Link>
        <Link href="/monsters">Monsters</Link>
        {/* <Link href="/random">Random</Link> */}
        {/* <Link href="/rss">RSS</Link> */}
        <a href="https://www.patreon.com/motocarota" target="_blank">Patreon</a>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
};

export default Top;
