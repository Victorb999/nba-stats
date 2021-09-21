import styles from "./styles.module.scss";

import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { getPlayer, getPlayerProfile } from "../../services/api";

import ImageWithFallback from "../../utils/ImageWithCallBack";
import { useTeam } from "../../contexts/TeamContext";
import { Standard, CareerSummary } from "../../services/typesPlayer";
import { ParsedUrlQuery } from "querystring";
import { getAge } from "../../utils/getAge";
import PlayerStats from "../../components/PlayerStats";
import PlayerInfo from "../../components/PlayerInfo";

type PlayerProps = {
  player: Standard;
  stats: CareerSummary;
};

function Player({ player, stats }: PlayerProps) {
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
            <PlayerInfo
              player={player}
              teamName={getTeam(player.teamId).nickname}
            />
          </div>
        </div>

        <div className={styles.playerCareer}>
          <div className={styles.playerTitle + " " + teamName}>
            <h1>Career</h1>
          </div>
          <div
            className={
              player.teams.length > 5
                ? styles.playerCareerContainerGrid
                : styles.playerCareerContainer
            }
          >
            {player.teams.map((team, index) => {
              return (
                <div key={index}>
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
          <PlayerStats stats={stats} />
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

  const player = await getPlayer(params.slug);

  const stats = await getPlayerProfile(params.slug);

  // Pass data to the page via props
  return { props: { player, stats } };
};

export default Player;
