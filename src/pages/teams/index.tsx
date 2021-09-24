import styles from "./styles.module.scss";

import Teams from "../../components/Teams";
import { useCallback, useEffect, useState } from "react";
import {Team} from "../../services/typesTeams";
import { GetServerSideProps } from "next";
import { getAllNBATeams } from "../../services/api";

type TeamsPageProps = {
  teams: Team[];
};
function TeamsPage({teams}:TeamsPageProps) {
  const [teamsNBA, setTeamNBA] = useState<Team[]>([] as Team[]);

  function filterTeam(name: string) {
    if (teamsNBA.length === 0) {
      const team = [] as Team[];
      return team;
    }
    const team = teamsNBA.filter((team) => {
      return team.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1
    });
    return team;
  }

  const getTeamsNBA = useCallback(() => {
    setTeamNBA(teams);
  }, [teams]);

  useEffect(() => {
    getTeamsNBA();
  }, [ getTeamsNBA]);
  
  const searchFilterTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length >= 3){
      console.log(e.target.value);
      setTeamNBA(filterTeam(e.target.value));
    }else{
      setTeamNBA(teams);
    }
  };
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamSearch}>
        <fieldset>
        <label htmlFor="filterTeam">Tell me what team do you look for...</label>
        <input type="text" onChange={searchFilterTeam} name="filterTeam"/>        
        </fieldset>
      </div>
      {teamsNBA.length > 0 ?(
      <Teams teams={teamsNBA}/> ): (<div className={styles.centerError}>
        <h2>Sorry, We didn't find any team with this name...</h2>
      </div>)}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const teams = await getAllNBATeams();

  // Pass data to the page via props
  return { props: { teams } };
};

export default TeamsPage;