import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useCallback
} from "react";
import { getAllNBATeams } from "../services/api";

import {Team} from "../services/typesTeams";

type TeamContextData = {
  teams: Team[];
  getTeams: () => void;
  getTeam: (id: string) => Team;
  getTeamName: (id: string) => string;
  filterTeam:(name: string) => Team[];
};
type TeamContextProviderProps = {
  children: ReactNode;
};
export const TeamContext = createContext({} as TeamContextData);

export function TeamContextProvider({ children }: TeamContextProviderProps) {
  const [teams, setTeams] = useState<Team[]>([] as Team[]);

  const getTeams = useCallback(async () => {
    const res = await getAllNBATeams();
    setTeams(res);
  }, []);

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  function getTeam(id: string) {
    if (teams.length === 0) {
      const team = {} as Team;
      return team;
    }
    const team = teams.filter((team) => {
      return team.teamId === id;
    });
    return team[0];
  }
  function getTeamName(id: string) {
    if (teams.length === 0) {
      return "";
    }
    const team = teams.filter((team) => {
      return team.teamId === id;
    });
    return team[0].nickname.toLowerCase();
  }

  function filterTeam(name: string) {
    if (teams.length === 0) {
      const team = [] as Team[];
      return team;
    }
    const team = teams.filter((team) => {
      return team.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1
    });
    return team;
  }

  return (
    <TeamContext.Provider value={{ teams, getTeams, getTeam, getTeamName,filterTeam }}>
      {children}
    </TeamContext.Provider>
  );
}

export const useTeam = () => {
  return useContext(TeamContext);
};
