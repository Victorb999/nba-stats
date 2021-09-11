import { GetServerSideProps } from "next";
import { api } from "../../services/api";

import ImageWithFallback from "../../utils/ImageWithCallBack";
import { Standard } from "../../services/typesPlayer";

import Image from "next/image";
import { useTeam } from "../../contexts/TeamContext";

import styles from "./styles.module.scss";
function Player({ player, stats }) {
  // Render data...
  const { getTeam, getTeams } = useTeam();

  // useEffect(()=>{
  //   console.log("fgas")
  //   getTeams();
  // },[getTeams]);

  return (
    <div className={styles.playerContainer}>
      {/* {JSON.stringify(player)} */}
      <div className={styles.playerInfo}>
        <ImageWithFallback
          width={200}
          height={200}
          src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.personId}.png`}
          alt={player.personId}
          fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
        />
        <h1>#{`${player.jersey}  ${player.firstName}  ${player.lastName}`}</h1>
        <Image
          width={50}
          height={50}
          src={`https://cdn.nba.com/logos/nba/${player.teamId}/global/L/logo.svg`}
          alt={`Team`}
          objectFit="cover"
        />
        {getTeam(player.teamId).nickname}
        <h2>{player.teamSitesOnly.posFull}</h2>
        <h3>{`${player.heightMeters}m ${player.weightKilograms}Kg`}</h3>
        <h3>{player.dateOfBirthUTC}</h3>
        <h4>Years as pro: {player.yearsPro}</h4>
        {/*calc years*/}

        <p>Pick #{player.draft.pickNum} </p>
        <p>Country: {player.country} </p>
        <p>
          Round: {player.draft.roundNum}/{player.draft.seasonYear}
        </p>
        <p>College: {player.collegeName} </p>
      </div>
      <div className={styles.playerCareer}>
        <h2>Career</h2>
        {player.teams.map((team) => {
          return (
            <div key={team.teamId + team.seasonStart}>
              <Image
                width={50}
                height={50}
                src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/D/logo.svg`}
                alt={`Team`}
                objectFit="cover"
              />
              {getTeam(team.teamId).nickname} -{team.seasonStart}-
              {team.seasonEnd}
            </div>
          );
        })}
      </div>
      <div className={styles.playerStats}>
        <h2>Stats</h2>
        <p>
          <b>seasonYear</b>: {stats.seasonYear}
        </p>
        <p>
          <b>ppg</b>: {stats.ppg}
        </p>
        <p>
          <b>rpg</b>: {stats.rpg}
        </p>
        <p>
          <b>apg</b>: {stats.apg}
        </p>
        <p>
          <b>mpg</b>: {stats.mpg}
        </p>
        <p>
          <b>topg</b>: {stats.topg}
        </p>
        <p>
          <b>spg</b>: {stats.spg}
        </p>
        <p>
          <b>bpg</b>: {stats.bpg}
        </p>
        <p>
          <b>tpp</b>: {stats.tpp}
        </p>
        <p>
          <b>ftp</b>: {stats.ftp}
        </p>
        <p>
          <b>fgp</b>: {stats.fgp}
        </p>
        <p>
          <b>assists</b>: {stats.assists}
        </p>
        <p>
          <b>blocks</b>: {stats.blocks}
        </p>
        <p>
          <b>steals</b>: {stats.steals}
        </p>
        <p>
          <b>turnovers</b>: {stats.turnovers}
        </p>
        <p>
          <b>offReb</b>: {stats.offReb}
        </p>
        <p>
          <b>defReb</b>: {stats.defReb}
        </p>
        <p>
          <b>totReb</b>: {stats.totReb}
        </p>
        <p>
          <b>fgm</b>: {stats.fgm}
        </p>
        <p>
          <b>fga</b>: {stats.fga}
        </p>
        <p>
          <b>tpm</b>: {stats.tpm}
        </p>
        <p>
          <b>tpa</b>: {stats.tpa}
        </p>
        <p>
          <b>ftm</b>: {stats.ftm}
        </p>
        <p>
          <b>fta</b>: {stats.fta}
        </p>
        <p>
          <b>pFouls</b>: {stats.pFouls}
        </p>
        <p>
          <b>points</b>: {stats.points}
        </p>
        <p>
          <b>gamesPlayed</b>: {stats.gamesPlayed}
        </p>
        <p>
          <b>gamesStarted</b>: {stats.gamesStarted}
        </p>
        <p>
          <b>plusMinus</b>: {stats.plusMinus}
        </p>
        <p>
          <b>min</b>: {stats.min}
        </p>
        <p>
          <b>dd2</b>: {stats.dd2}
        </p>
        <p>
          <b>td3</b>: {stats.td3}
        </p>
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

  const stats = await api
    .get(`/players/${params.slug}_profile.json`)
    .then((stats) => {
      return stats.data.league.standard.stats.latest;
    });

  // Pass data to the page via props
  return { props: { player, stats } };
};

export default Player;
