import styles from "./styles.module.scss";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import ImageWithFallback from "../../utils/ImageWithCallBack";
import Link from "next/link";

import { api } from "../../services/api";
import { Player, Standard } from "../../services/typesRoster";
import { ParsedUrlQuery } from "querystring";

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
  teamEdit: Standard;
};

export default function Team({ teamEdit }: TeamProps) {
  return (
    <div className={styles.teamContainer}>
      <Head>
        <title>{teamEdit.teamName.toUpperCase()} | NBA stats</title>
      </Head>
      <div className={styles.teamInfo}>
        <div className={styles.teamInfoContainer}>
          <div className={styles.teamImg}>
            <Image
              width={150}
              height={150}
              src={`https://cdn.nba.com/logos/nba/${teamEdit.teamId}/global/D/logo.svg`}
              alt={teamEdit.teamId}
              objectFit="cover"
            />
          </div>
          <div className={styles.teamName + " " + teamEdit.teamName}>
            {teamEdit.teamName}
          </div>
        </div>
        <div className={styles.teamInfoContainer}>
          <div className={styles.statusTitle + " " + teamEdit.teamName}>
            stats
          </div>
          <div className={styles.teamStats}>Some stats</div>
        </div>
      </div>

      <div className={styles.teamGrid}>
        {teamEdit.players.map((team) => {
          return (
            <div className={styles.teamPlayer} key={team.personId}>
              <div className={styles.playerImg}>
                <ImageWithFallback
                  width={200}
                  height={200}
                  src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${team.personId}.png`}
                  alt={team.personId}
                  fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
                />
              </div>
              <div className={styles.playerName + " " + teamEdit.teamName}>
                <Link href={`/player/${team.personId}`} passHref>
                  <div className="navbar-brand link">{team.playerName}</div>
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
  const res = await api.get("teams.json");
  const data = res.data.league.vegas;

  const teams = data.filter((team: TeamNBA) => {
    return team.isNBAFranchise === true;
  });

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

  const { data } = await api.get(`/teams/${slug}/roster.json`);

  const team: Standard = data.league.standard;

  const players = await api.get("/players.json").then((player) => {
    return player.data.league.standard;
  });

  const getPlayer = (id: string) => {
    const player = players.filter((player: Player) => {
      return player.personId === id;
    });
    return player[0];
  };

  let teamEdit: Standard = {
    teamName: slug,
    teamId: team.teamId,
    teamLogo: `https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`,
    players: team.players
  };

  teamEdit.players.map((person) => {
    person.personImg = `https://cdn.nba.com/headshots/nba/latest/1040x760/${person.personId}.png`;
    const player = getPlayer(person.personId);
    person.playerName = player.firstName + " " + player.lastName;
    return person;
  });

  return {
    props: {
      teamEdit
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
