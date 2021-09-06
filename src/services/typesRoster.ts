export interface Player {
  personId: string;
  personImg?: string;
}

export interface Standard {
  teamName?:string;
  teamId: string;
  teamLogo?: string;
  players: Player[];
}

export interface Africa {
  teamId: string;
  players: number[];
}

export interface Sacramento {
  teamId: string;
  players: number[];
}

export interface Vegas {
  teamId: string;
  teamLogo?: string;
  players: Player[];
}

export interface Utah {
  teamId: string;
  players: number[];
}

export interface League {
  standard: Standard;
  africa: Africa;
  sacramento: Sacramento;
  vegas: Vegas;
  utah: Utah;
}

export default interface Rooster {
  league: League;
}