import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import Image from "next/image";

import styles from './teams.module.scss';

type Team = {
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

function Teams() {
  const [teams, setTeams] = useState<Team[]>([] as Team[]);

  useEffect(() => {
    const getTeams = async () => {
      const res = await api.get("teams.json");
      setTeams(res.data.league.vegas);
    };
    getTeams();
  }, []);

  return (
    <div className={styles.containerTeams}>
      <h1>Teams</h1>
      <div className={styles.teams}>
      {teams.map((team) => {
        return (
          team.isNBAFranchise && (
            <div key={team.teamId} className={styles.team}>
              <div className={team.urlName}>              
                
                <Image
                  width={50}
                  height={50}
                  src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`}
                  alt={team.nickname}
                  objectFit="cover"
                />              
              </div>
            </div>
          )
        );
      })}
      </div>
    </div>
  );
}

export default Teams;
