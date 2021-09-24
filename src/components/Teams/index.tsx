import styles from "./teams.module.scss";

import Image from "next/image";
import Link from "next/link";
import {Team} from "../../services/typesTeams";

type TeamProps ={
  teams: Team[];
}

function Teams({teams}:TeamProps) {
  return (
    <div className={styles.containerTeams}>
      <h1>Teams</h1>
      <div className={styles.teams}>
        {teams.map((team) => {
          return (
            <div key={team.teamId} className={styles.team + " " + team.urlName}>
              <Link href={`/team/${team.urlName}`} passHref>
                <div className="navbar-brand">
                  <Image
                    width={80}
                    height={80}
                    src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`}
                    alt={team.nickname}
                    objectFit="cover"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Teams;
