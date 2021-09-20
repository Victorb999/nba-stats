import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useCallback
} from "react";
import { getAllNBATeams } from "../services/api";

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

type TeamContextData = {
  teams: Team[];
  getTeams: () => void;
  getTeam: (id: string) => Team;
  getTeamName: (id: string) => string;
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

  return (
    <TeamContext.Provider value={{ teams, getTeams, getTeam, getTeamName }}>
      {children}
    </TeamContext.Provider>
  );
}

export const useTeam = () => {
  return useContext(TeamContext);
};
