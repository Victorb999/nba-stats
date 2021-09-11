import { GetServerSideProps } from "next";
import { api } from "../../services/api";

import ImageWithFallback from "../../utils/ImageWithCallBack";
import { Standard } from "../../services/typesPlayer";

import Image from "next/image";

function Player({ player,stats }) {
  // Render data...
  return (
    <div>
      {/* {JSON.stringify(player)} */}
      <ImageWithFallback
        width={200}
        height={200}
        src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.personId}.png`}
        alt={player.personId}
        fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
      />
      <div>
        <h1>#{`${player.jersey}  ${player.firstName}  ${player.lastName}`}</h1>
        <Image
          width={50}
          height={50}
          src={`https://cdn.nba.com/logos/nba/${player.teamId}/global/L/logo.svg`}
          alt={`Team`}
          objectFit="cover"
        />
        <h2>{player.teamSitesOnly.posFull}</h2>
        <h3>{`${player.heightMeters}m ${player.weightKilograms}Kg`}</h3>
        <h3>{player.dateOfBirthUTC}</h3>{/*calc years*/}
      </div>
      <div>
        <p>Pick #{player.draft.pickNum} </p>
        <p>Country: {player.country} </p>
        <p>
          Round: {player.draft.roundNum}/{player.draft.seasonYear}
        </p>
        <p>College: {player.collegeName} </p>
      </div>
      <div>
        {JSON.stringify(stats)}
      </div>
    </div>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  //const data = { player: params.slug };

  const players = await api.get("/players.json").then((player) => {
    return player.data.league.standard;
  });

  let player = players.filter((player: Standard) => {
    return player.personId === params.slug;
  });
  player = player[0];

  const stats = await api.get(`/players/${params.slug}_profile.json`).then((stats) => {
    return stats.data.league.standard.stats.latest;
  });

  // Pass data to the page via props
  return { props: { player,stats } };
};

export default Player;
