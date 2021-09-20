import styles from "./styles.module.scss";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import ImageWithFallback from "../../utils/ImageWithCallBack";
import Link from "next/link";

import {
  getAllNBATeams,
  getAllPlayers,
  getRosterTeam,
  getTeamRegularSeasonStats
} from "../../services/api";
import { Player, StandardWithLogo } from "../../services/typesRoster";

import { Standard as PlayerStandard } from "../../services/typesPlayer";

import { ParsedUrlQuery } from "querystring";
import { TeamStats } from "../../services/typesStats";
import { useCallback, useEffect, useState } from "react";
import Stats from "../../components/Stats";

type TeamNBA = {
  city: string;
  fullName: string;
  isNBAFranchise: boolean;
  confName: string;
  tricode: string;
  teamShortName: string;
  divName: string;
  isAllStar: boolean;
  nickname: string;
  urlName: string;
  teamId: string;
  altCityName: string;
};

type TeamProps = {
  team: StandardWithLogo;
  statsRegular: TeamStats
};

export default function Team({ team,statsRegular }: TeamProps) {
  
  
  return (
    <div className={styles.teamContainer}>
      <Head>
        <title>{team.teamName.toUpperCase()} | NBA stats</title>
      </Head>
      <div className={styles.teamInfo}>
        <div className={styles.teamInfoContainer}>
          <div className={styles.teamImg}>
            <Image
              width={150}
              height={150}
              src={team.teamLogo}
              alt={team.teamId}
              objectFit="cover"
            />
          </div>
          <div className={styles.teamName + " " + team.teamName}>
          <h2>{statsRegular.abbreviation} - {statsRegular.name} {statsRegular.nickname}</h2>
          </div>
        </div>
        <div className={styles.teamInfoContainer}>
          <div className={styles.statusTitle + " " + team.teamName}>stats</div>
          <div className={styles.teamStats}>
            
           <Stats statsRegular={statsRegular} />
          </div>
        </div>
      </div>

      <div className={styles.teamGrid}>
        {team.players.map((player) => {
          return (
            <div className={styles.teamPlayer} key={player.personId}>
              <div className={styles.playerImg}>
                <ImageWithFallback
                  width={200}
                  height={200}
                  src={
                    typeof player.personImg === "undefined"
                      ? ""
                      : player.personImg
                  }
                  alt={player.personId}
                  fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
                />
              </div>
              <div className={styles.playerName + " " + team.teamName}>
                <Link href={`/player/${player.personId}`} passHref>
                  <div className="navbar-brand link">{player.playerName}</div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const teams = await getAllNBATeams();

  const paths = teams.map((team: TeamNBA) => {
    return {
      params: {
        slug: team.urlName
      }
    };
  });
  return {
    paths,
    fallback: "blocking"
  };
};
interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params;

  const team: StandardWithLogo = await getRosterTeam(slug);

  const players: PlayerStandard[] = await getAllPlayers();

  const getPlayer = (id: string) => {
    const player = players.filter((player: Player) => {
      return player.personId === id;
    });
    return player[0];
  };

  team.players.map((person) => {
    person.personImg = `https://cdn.nba.com/headshots/nba/latest/1040x760/${person.personId}.png`;
    const player = getPlayer(person.personId);
    person.playerName = player.firstName + " " + player.lastName;
    return person;
  });
  const statsRegular = await getTeamRegularSeasonStats(team.teamId);

  return {
    props: {
      team,statsRegular
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
