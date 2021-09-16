import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { api } from "../../services/api";

import ImageWithFallback from "../../utils/ImageWithCallBack";
import { useTeam } from "../../contexts/TeamContext";
import { Standard, CareerSummary } from "../../services/typesPlayer";
import { ParsedUrlQuery } from "querystring";

import styles from "./styles.module.scss";

type PlayerProps = {
  player: Standard;
  stats: CareerSummary;
};

function Player({ player, stats }: PlayerProps) {
  // Render data...
  const { getTeam, getTeamName } = useTeam();

  const teamName = getTeamName(player.teamId);

  return (
    <div>
      <Head>
        <title>{`${player.firstName}  ${player.lastName}`} | NBA stats</title>
      </Head>
      <div className={styles.playerContainer}>
        {/* {JSON.stringify(player)} */}
        <div className={styles.playerPhoto}>
          <div className={styles.playerPhotoContainer}>
            <ImageWithFallback
              width={280}
              height={280}
              src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.personId}.png`}
              alt={player.personId}
              fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
            />
          </div>
          <div className={styles.playerTitleBottom + " " + teamName}>
            <h1>
              #{`${player.jersey}  ${player.firstName}  ${player.lastName}`}
            </h1>
          </div>
        </div>

        <div className={styles.playerInfo}>
          <div className={styles.playerTitle + " " + teamName}>
            <h1>Infos</h1>
          </div>
          <div className={styles.playerInfoContainer}>
            <div>
              <h2>
                <Image
                  width={50}
                  height={50}
                  src={`https://cdn.nba.com/logos/nba/${player.teamId}/global/D/logo.svg`}
                  alt={`Team`}
                  objectFit="cover"
                />
                {getTeam(player.teamId).nickname}
              </h2>
              <h2>{player.teamSitesOnly.posFull}</h2>
              <h2>{`${player.heightMeters}m `}</h2>
              <h2>{`${player.weightKilograms}Kg`} </h2>
              <h2>{player.dateOfBirthUTC}</h2>
              <h2>Years as pro: {player.yearsPro}</h2>
            </div>
            <div>
              <h2>Pick #{player.draft.pickNum} </h2>
              <h2>Country: {player.country} </h2>
              <h2>
                Round: {player.draft.roundNum}/{player.draft.seasonYear}
              </h2>
              <h2>College: {player.collegeName} </h2>
            </div>
          </div>
        </div>

        <div className={styles.playerCareer}>
          <div className={styles.playerTitle + " " + teamName}>
            <h1>Career</h1>
          </div>
          <div className={styles.playerCareerContainer}>
            {player.teams.map((team) => {
              return (
                <div key={team.teamId + team.seasonStart}>
                  <h2>
                    <Image
                      width={50}
                      height={50}
                      src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/D/logo.svg`}
                      alt={`Team`}
                      objectFit="cover"
                    />
                    {team.seasonStart}-{team.seasonEnd}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.playerSubContainer}>
        <div className={styles.playerStats}>
          <div className={styles.playerTitle + " " + teamName}>
            <h1>Career Stats</h1>
          </div>
          <div className={styles.playerStatsContainer}>
            <div>
              <h2>ppg: {stats.ppg}</h2>
              <h2>rpg: {stats.rpg}</h2>
              <h2>apg: {stats.apg}</h2>
              <h2>mpg: {stats.mpg}</h2>
              <h2>spg: {stats.spg}</h2>
              <h2>bpg: {stats.bpg}</h2>
              <h2>tpp: {stats.tpp}</h2>
            </div>
            <div>
              <h2>ftp: {stats.ftp}</h2>
              <h2>fgp: {stats.fgp}</h2>
              <h2>assists: {stats.assists}</h2>
              <h2>blocks: {stats.blocks}</h2>
              <h2>steals: {stats.steals}</h2>
              <h2>turnovers: {stats.turnovers}</h2>
            </div>
            <div>
              <h2>offReb: {stats.offReb}</h2>
              <h2>defReb: {stats.defReb}</h2>
              <h2>totReb: {stats.totReb}</h2>
              <h2>fgm: {stats.fgm}</h2>
              <h2>fga: {stats.fga}</h2>
              <h2>tpm: {stats.tpm}</h2>
            </div>
            <div>
              <h2>tpa: {stats.tpa}</h2>
              <h2>ftm: {stats.ftm}</h2>
              <h2>fta: {stats.fta}</h2>
              <h2>pFouls: {stats.pFouls}</h2>
              <h2>points: {stats.points}</h2>
              <h2>games played: {stats.gamesPlayed}</h2>
            </div>
            <div>
              <h2>games started: {stats.gamesStarted}</h2>
              <h2>plus minus: {stats.plusMinus}</h2>
              <h2>min: {stats.min}</h2>
              <h2>dd2: {stats.dd2}</h2>
              <h2>td3: {stats.td3}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}
// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params as Params;

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
      return stats.data.league.standard.stats.careerSummary;
    });

  // Pass data to the page via props
  return { props: { player, stats } };
};

export default Player;
