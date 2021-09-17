import styles from "./teams.module.scss";

import { useEffect } from "react";
import { useTeam } from "../../contexts/TeamContext";

import Image from "next/image";
import Link from "next/link";

function Teams() {
  const { getTeams, teams } = useTeam();

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  return (
    <div className={styles.containerTeams}>
      <h1>Teams</h1>
      <div className={styles.teams}>
        {teams.map((team) => {
          return (
            team.isNBAFranchise && (
              <div
                key={team.teamId}
                className={styles.team + " " + team.urlName}
              >
                <Link href={`/team/${team.urlName}`} passHref>
                  <a href="#">
                    <Image
                      width={80}
                      height={80}
                      src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`}
                      alt={team.nickname}
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Teams;
