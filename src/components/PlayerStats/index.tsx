import { CareerSummary } from "../../services/typesPlayer";
import styles from "./styles.module.scss";

type PropsStats = {
  stats: CareerSummary;
};

function PlayerStats({ stats }: PropsStats) {
  return (
    <div className={styles.playerStatsContainer}>
      <div>
        <h2>ppg: {stats.ppg}</h2>
        <h2>rpg: {stats.rpg}</h2>
        <h2>apg: {stats.apg}</h2>
        <h2>mpg: {stats.mpg}</h2>
        <h2>spg: {stats.spg}</h2>
        <h2>bpg: {stats.bpg}</h2>
        <h2>tpp: {stats.tpp}</h2>
      </div>
      <div>
        <h2>ftp: {stats.ftp}</h2>
        <h2>fgp: {stats.fgp}</h2>
        <h2>assists: {stats.assists}</h2>
        <h2>blocks: {stats.blocks}</h2>
        <h2>steals: {stats.steals}</h2>
        <h2>turnovers: {stats.turnovers}</h2>
      </div>
      <div>
        <h2>offReb: {stats.offReb}</h2>
        <h2>defReb: {stats.defReb}</h2>
        <h2>totReb: {stats.totReb}</h2>
        <h2>fgm: {stats.fgm}</h2>
        <h2>fga: {stats.fga}</h2>
        <h2>tpm: {stats.tpm}</h2>
      </div>
      <div>
        <h2>tpa: {stats.tpa}</h2>
        <h2>ftm: {stats.ftm}</h2>
        <h2>fta: {stats.fta}</h2>
        <h2>pFouls: {stats.pFouls}</h2>
        <h2>points: {stats.points}</h2>
        <h2>games played: {stats.gamesPlayed}</h2>
      </div>
      <div>
        <h2>games started: {stats.gamesStarted}</h2>
        <h2>plus minus: {stats.plusMinus}</h2>
        <h2>min: {stats.min}</h2>
        <h2>dd2: {stats.dd2}</h2>
        <h2>td3: {stats.td3}</h2>
      </div>
    </div>
  );
}

export default PlayerStats;
