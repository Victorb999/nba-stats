export interface TeamSitesOnly {
  playerCode: string;
  posFull: string;
  displayAffiliation: string;
  freeAgentCode: string;
}

export interface Team {
  teamId: string;
  seasonStart: string;
  seasonEnd: string;
}

export interface Draft {
  teamId: string;
  pickNum: string;
  roundNum: string;
  seasonYear: string;
}

export interface Standard {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: Team[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
}

export interface Sacramento {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: Team[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
}

export interface Vega {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: Team[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
  isallStar?: boolean;
}

export interface Utah {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: any[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
}

export interface League {
  standard: Standard[];
  africa: any[];
  sacramento: Sacramento[];
  vegas: Vega[];
  utah: Utah[];
}

export interface Players {
  league: League;
}

export interface Latest {
  seasonYear: number;
  seasonStageId: number;
  ppg: string;
  rpg: string;
  apg: string;
  mpg: string;
  topg: string;
  spg: string;
  bpg: string;
  tpp: string;
  ftp: string;
  fgp: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface CareerSummary {
  tpp: string;
  ftp: string;
  fgp: string;
  ppg: string;
  rpg: string;
  apg: string;
  bpg: string;
  mpg: string;
  spg: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface TeamProfile {
  teamId: string;
  ppg: string;
  rpg: string;
  apg: string;
  mpg: string;
  topg: string;
  spg: string;
  bpg: string;
  tpp: string;
  ftp: string;
  fgp: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface Total {
  ppg: string;
  rpg: string;
  apg: string;
  mpg: string;
  topg: string;
  spg: string;
  bpg: string;
  tpp: string;
  ftp: string;
  fgp: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface Season {
  seasonYear: number;
  teams: TeamProfile[];
  total: Total;
}

export interface RegularSeason {
  season: Season[];
}

export interface Stats {
  latest: Latest;
  careerSummary: CareerSummary;
  regularSeason: RegularSeason;
}

export interface StandardProfile {
  teamId: string;
  stats: Stats;
}

export interface LeagueProfile {
  standard: StandardProfile;
}

export interface PlayerProfile {
  league: LeagueProfile;
}
