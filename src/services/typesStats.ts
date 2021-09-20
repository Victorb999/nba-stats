  export interface Min {
      avg: string;
      rank: string;
  }

  export interface Fgp {
      avg: string;
      rank: string;
  }

  export interface Tpp {
      avg: string;
      rank: string;
  }

  export interface Ftp {
      avg: string;
      rank: string;
  }

  export interface Orpg {
      avg: string;
      rank: string;
  }

  export interface Drpg {
      avg: string;
      rank: string;
  }

  export interface Trpg {
      avg: string;
      rank: string;
  }

  export interface Apg {
      avg: string;
      rank: string;
  }

  export interface Tpg {
      avg: string;
      rank: string;
  }

  export interface Spg {
      avg: string;
      rank: string;
  }

  export interface Bpg {
      avg: string;
      rank: string;
  }

  export interface Pfpg {
      avg: string;
      rank: string;
  }

  export interface Ppg {
      avg: string;
      rank: string;
  }

  export interface Oppg {
      avg: string;
      rank: string;
  }

  export interface Eff {
      avg: string;
      rank: string;
  }

  export interface TeamStats {
      teamId: string;
      name: string;
      nickname: string;
      teamcode: string;
      abbreviation: string;
      min: Min;
      fgp: Fgp;
      tpp: Tpp;
      ftp: Ftp;
      orpg: Orpg;
      drpg: Drpg;
      trpg: Trpg;
      apg: Apg;
      tpg: Tpg;
      spg: Spg;
      bpg: Bpg;
      pfpg: Pfpg;
      ppg: Ppg;
      oppg: Oppg;
      eff: Eff;
  }

  export interface Preseason {
      teams: TeamStats[];
  }
  export interface RegularSeason {
    teams: TeamStats[];
  }
  export interface Series {
    seriesId: string;
    teams: TeamStats[];
  }

  export interface Playoffs {
    series: Series[];
  }

  export interface StandardStats {
    seasonYear: number;
    preseason: Preseason;
    regularSeason: RegularSeason;
    playoffs: Playoffs;
}
