import { GetServerSideProps } from "next";
import { apiBio } from "../../services/api";

import ImageWithFallback from "../../utils/ImageWithCallBack";

function Player({ player }) {
  // Render data...
  return (
    <div>
      <h1>{player.display_name}</h1>
      <ImageWithFallback
        width={200}
        height={200}
        src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.id}.png`}
        alt={player.id}
        objectFit="cover"
        fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
      />
      <div dangerouslySetInnerHTML={{ __html: player.professional }} />
    </div>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  //const data = { player: params.slug };

  const player = await apiBio
    .get(`/player_${params.slug}.json`)
    .then((player) => {
      return player.data.Bio;
    });

  // Pass data to the page via props
  return { props: { player } };
};

export default Player;
