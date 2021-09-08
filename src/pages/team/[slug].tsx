import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { api } from "../../services/api";
import { Player, Standard } from "../../services/typesRoster";
import styles from "./styles.module.scss";
import { useTheme } from "../../contexts/ThemeContext";

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
  const shimmer = () => `<svg width="342" height="342" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M171 192.375C224.104 192.375 267.188 149.291 267.188 96.1875C267.188 43.084 224.104 0 171 0C117.896 0 74.8125 43.084 74.8125 96.1875C74.8125 149.291 117.896 192.375 171 192.375ZM256.5 213.75H219.695C204.866 220.563 188.367 224.438 171 224.438C153.633 224.438 137.201 220.563 122.305 213.75H85.5C38.2746 213.75 0 252.025 0 299.25V309.938C0 327.639 14.3613 342 32.0625 342H309.938C327.639 342 342 327.639 342 309.938V299.25C342 252.025 303.725 213.75 256.5 213.75Z" fill="#324A5F"/>
  </svg>
  `;
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const { darkTheme } = useTheme();

  return (
    <div
      className={
        darkTheme ? styles.teamContainerDark : styles.teamContainerlight
      }
    >
      <Head>
        <title>{teamEdit.teamName.toUpperCase()} | NBA stats</title>
      </Head>
      <div className={styles.teamInfo}>
        <div className={styles.teamInfoContainer}>
          <div className={styles.teamImg}>
            <Image
              width={150}
              height={150}
              src={`https://cdn.nba.com/logos/nba/${teamEdit.teamId}/global/L/logo.svg`}
              alt={teamEdit.teamId}
              objectFit="cover"
            />
          </div>
          <div className={styles.teamName + " " + teamEdit.teamName}>
            {teamEdit.teamName}
          </div>
        </div>
        <div className={styles.teamInfoContainer}>
          <div className={styles.teamStats}>Some stats</div>
          <div className={styles.teamName + " " + teamEdit.teamName}>stats</div>
        </div>
      </div>

      <div className={styles.teamGrid}>
        {teamEdit.players.map((team) => {
          return (
            <div className={styles.teamPlayer} key={team.personId}>
              <div className={styles.teamImg}>
                <Image
                  width={200}
                  height={200}
                  src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${team.personId}.png`}
                  alt={team.personId}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer()
                  )}`}
                />
              </div>
              <div className={styles.playerName + " " + teamEdit.teamName}>
                {team.playerName}
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

  const paths = data.map((team: TeamNBA) => {
    if (team.isNBAFranchise || team.urlName !== null) {
      return {
        params: {
          slug: team.urlName
        }
      };
    } else return null;
  });
  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

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
