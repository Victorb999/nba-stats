import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useCallback
} from "react";
import { api } from "../services/api";

type TeamType = {
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
  teams: TeamType[];
  getTeams: () => void;
  getTeam: (id: string) => TeamType;
  getTeamName: (id: string) => string;
};
type TeamContextProviderProps = {
  children: ReactNode;
};
export const TeamContext = createContext({} as TeamContextData);

export function TeamContextProvider({ children }: TeamContextProviderProps) {
  const [teams, setTeams] = useState<TeamType[]>([] as TeamType[]);

  const getTeams = useCallback(async () => {
    const res = await api.get("/teams.json");
    setTeams(res.data.league.vegas);
  }, []);

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  function getTeam(id: string) {
    if (teams.length === 0) {
      const team = {} as TeamType;
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
