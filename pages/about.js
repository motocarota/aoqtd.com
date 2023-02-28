import Image from "next/image";

export default function About() {
  return (
    <>
      <h1>
        About Another One Quest to Dust
      </h1>
      <p>
        Looking for heroic deeds, romance and epic battles against evil?<br/>
        EW!
      </p>
      <p>
        Just skip on the next webcomic, then!<br/>
        This is the story of the typical hobo-murderer wrecking ball group that feasts on dungeon master&apos;s tears! I Hope you enjoy it!
      </p>
      <h1>
        About the author
      </h1>
      <Image src="/me.jpeg" alt="me" height="365" width="486" />
      <p>
        I'm a chaotic evil multiclass <a href="https://simone-poggi.com" target="_blank">developer</a>/<a href="https://motocarota.art" target="_blank">artist</a>.
      </p>
    </>
  );
}