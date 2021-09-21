import { CareerSummary } from "../../services/typesPlayer";
import styles from "./styles.module.scss";

type PropsStats = {
  stats: CareerSummary;
};

function PlayerStats({ stats }: PropsStats) {
  return (
    <div className={styles.playerStatsContainer}>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[ppg] point per game: </span>{" "}
        <span>{stats.ppg}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[rpg] rebots per game:</span>{" "}
        <span>{stats.rpg}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[apg] assists per game:</span>{" "}
        <span>{stats.apg}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[mpg] minutes per game:</span>{" "}
        <span>{stats.mpg}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[spg] steals per game:</span>{" "}
        <span>{stats.spg}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[bpg] blocks per game: </span>{" "}
        <span>{stats.bpg}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[tpp] turnovers per game:</span>{" "}
        <span>{stats.tpp}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[ftp] free throw percentage:</span>{" "}
        <span>{stats.ftp}%</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[fgp] field goal percentage:</span>{" "}
        <span>{stats.fgp}%</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[fgm] field goals made:</span>{" "}
        <span>{stats.fgm}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[fga] field goals attempted: </span>{" "}
        <span>{stats.fga}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[tpm] three point made: </span>{" "}
        <span>{stats.tpm}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[tpa] three point attempted: </span>{" "}
        <span>{stats.tpa}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[ftm]: free throws made</span>{" "}
        <span>{stats.ftm}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[fta]: free throws attempted</span>{" "}
        <span>{stats.fta}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>assists: </span>{" "}
        <span>{stats.assists}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>blocks: </span>{" "}
        <span>{stats.blocks}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>steals: </span>{" "}
        <span>{stats.steals}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>turnovers: </span>{" "}
        <span>{stats.turnovers}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>offensive rebounds: </span>{" "}
        <span>{stats.offReb}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>defensive rebounds: </span>{" "}
        <span>{stats.defReb}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>total rebounds: </span>{" "}
        <span>{stats.totReb}</span>
      </div>

      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>personal fouls: </span>{" "}
        <span>{stats.pFouls}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>points: </span>{" "}
        <span>{stats.points}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>games played: </span>{" "}
        <span>{stats.gamesPlayed}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>games started: </span>{" "}
        <span>{stats.gamesStarted}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>plus minus: </span>{" "}
        <span>{stats.plusMinus}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[min] minutes played: </span>{" "}
        <span>{stats.min}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[dd2] double doubles: </span>{" "}
        <span>{stats.dd2}</span>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>[td3] triple doubles: </span>{" "}
        <span>{stats.td3}</span>
      </div>
    </div>
  );
}

export default PlayerStats;
