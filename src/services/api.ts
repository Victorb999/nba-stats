import axios from "axios";

import { Standard, StandardWithLogo } from "../services/typesRoster";
import { Standard as PlayerStandard } from "../services/typesPlayer";

const date = new Date();
const year = date.getFullYear();
export const api = axios.create({
  baseURL: `https://data.nba.net/10s/prod/v1/${year}/`
});

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

export const getAllNBATeams = async () => {
  try {
    const { data } = await api.get("/teams.json");

    //filter NBA TEAMS
    const teams = data.league.vegas.filter((team: Team) => {
      return team.isNBAFranchise === true;
    });

    return teams;
  } catch (e) {
    console.error(e);
    const TeamEmpty = [] as Array<Team>;
    return TeamEmpty;
  }
};

export const getRosterTeam = async (slug: string) => {
  try {
    const { data } = await api.get(`/teams/${slug}/roster.json`);
    const team: Standard = data.league.standard;

    let teamPlus: StandardWithLogo = {
      teamName: slug,
      teamId: team.teamId,
      teamLogo: `https://cdn.nba.com/logos/nba/${team.teamId}/global/D/logo.svg`,
      players: team.players
    };

    return teamPlus;
  } catch (e) {
    console.error(e);
    const TeamEmpty = {} as StandardWithLogo;
    return TeamEmpty;
  }
};

export const getAllPlayers = async () => {
  try {
    const players = await api.get("/players.json");
    return players.data.league.standard;
  } catch (e) {
    console.error(e);
    const PlayerEmpty = [] as Array<PlayerStandard>;
    return PlayerEmpty;
  }
};
