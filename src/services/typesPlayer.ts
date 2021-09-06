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
