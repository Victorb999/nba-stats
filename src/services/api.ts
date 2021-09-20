import { RegularSeason } from './typesPlayer';
import { StandardStats, TeamStats } from './typesStats';
import axios from "axios";

import { Standard, StandardWithLogo } from "../services/typesRoster";
import {
  CareerSummary,
  Standard as PlayerStandard
} from "../services/typesPlayer";

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

export const getTeamRegularSeasonStats = async (id:String) => {
  try {
    const { data } = await axios.get("https://data.nba.net/10s/prod/v1/2020/team_stats_rankings.json");

    let teams = data.league.standard
    teams = teams.regularSeason.teams.filter((team: TeamStats) => {
      return team.teamId === id;
    });
    return teams[0];
  } catch (e) {
    console.error(e);
    const TeamEmpty = {} as TeamStats;
    return TeamEmpty;
  }
}

export const getRosterTeam = async (id: string) => {
  try {
    const { data } = await api.get(`/teams/${id}/roster.json`);
    const team: Standard = data.league.standard;

    let teamPlus: StandardWithLogo = {
      teamName: id,
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
    const { data } = await api.get("/players.json");
    return data.league.standard;
  } catch (e) {
    console.error(e);
    const PlayerEmpty = [] as Array<PlayerStandard>;
    return PlayerEmpty;
  }
};

export const getPlayer = async (id: string) => {
  try {
    const { data } = await api.get("/players.json");

    let players = data.league.standard;
    players = players.filter((player: PlayerStandard) => {
      return player.personId === id;
    });

    return players[0];
  } catch (e) {
    console.error(e);
    const PlayerEmpty = {} as PlayerStandard;
    return PlayerEmpty;
  }
};

export const getPlayerProfile = async (id: string) => {
  try {
    const { data } = await api.get(`/players/${id}_profile.json`);
    return data.league.standard.stats.careerSummary;
  } catch (e) {
    console.error(e);
    const PlayerEmpty = [] as Array<CareerSummary>;
    return PlayerEmpty;
  }
};
