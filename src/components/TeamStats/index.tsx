import { TeamStats } from "../../services/typesStats";
import styles from "./styles.module.scss";
type PropsStats = {
  statsRegular: TeamStats;
};

function Stats({ statsRegular }: PropsStats) {
  return (
    <div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>min - </span>
        <span>Minutes Played</span>
        <h3 className={parseInt(statsRegular.min.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.min.avg} - rank: ${statsRegular.min.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>fgp - </span>
        <span>Field Goal Pct</span>
        <h3 className={parseInt(statsRegular.fgp.rank) > 15 ? "red" : "green"}>
          {`avg: ${parseFloat(statsRegular.fgp.avg) * 100}% - rank:${
            statsRegular.fgp.rank
          }`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>tpp - </span>
        <span>Three points percentage</span>
        <h3 className={parseInt(statsRegular.tpp.rank) > 15 ? "red" : "green"}>
          {`avg: ${parseFloat(statsRegular.tpp.avg) * 100}% - rank:${
            statsRegular.tpp.rank
          }`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>ftp - </span>
        <span>Free throw percentage</span>
        <h3 className={parseInt(statsRegular.ftp.rank) > 15 ? "red" : "green"}>
          {`avg: ${parseFloat(statsRegular.ftp.avg) * 100}% - rank:${
            statsRegular.ftp.rank
          }`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>orpg - </span>
        <span>Offensive Rebounds per game</span>
        <h3 className={parseInt(statsRegular.orpg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.orpg.avg} - rank: ${statsRegular.orpg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>drpg -</span>
        <span> Defensive Rebounds per game</span>
        <h3 className={parseInt(statsRegular.drpg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.drpg.avg} - rank: ${statsRegular.drpg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>trpg - </span>
        <span>Total Rebounds per game</span>
        <h3 className={parseInt(statsRegular.trpg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.trpg.avg} - rank: ${statsRegular.trpg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>apg - </span>
        <span>Assists per game</span>
        <h3 className={parseInt(statsRegular.apg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.apg.avg} - rank: ${statsRegular.apg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>tpg - </span>
        <span>Turnovers per game</span>
        <h3 className={parseInt(statsRegular.tpg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.tpg.avg} - rank: ${statsRegular.tpg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>spg - </span>
        <span>Steals per game</span>
        <h3 className={parseInt(statsRegular.spg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.spg.avg} - rank: ${statsRegular.spg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>bpg - </span>
        <span>Blocks per game</span>
        <h3 className={parseInt(statsRegular.bpg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.bpg.avg} - rank: ${statsRegular.bpg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>pfpg - </span>
        <span>Personal Fouls per game</span>
        <h3 className={parseInt(statsRegular.pfpg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.pfpg.avg} - rank: ${statsRegular.pfpg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>ppg - </span>
        <span>Points per game</span>
        <h3 className={parseInt(statsRegular.ppg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.ppg.avg} - rank: ${statsRegular.ppg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>oppg - </span>
        <span>Opponent points per game</span>
        <h3 className={parseInt(statsRegular.oppg.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.oppg.avg} - rank: ${statsRegular.oppg.rank}`}
        </h3>
      </div>
      <div className={styles.statsInfo}>
        <span className={styles.spanTitle}>eff - </span>
        <span>Efficiency</span>
        <h3 className={parseInt(statsRegular.eff.rank) > 15 ? "red" : "green"}>
          {`avg: ${statsRegular.eff.avg} - rank: ${statsRegular.eff.rank}`}
        </h3>
      </div>
    </div>
  );
}

// min - Minutes Played
// fgp - Field Goal Pct
// tpp -  Three points percentage
// ftp - Free throw percentage
// orpg - Offensive Rebounds per game
// drpg - Defensive Rebounds  per game
// trpg - Total Rebounds per game
// apg - Assists per game
// tpg - Turnovers per game
// spg - Steals per game
// bpg -  Blocks per game
// pfpg - Personal Fouls per game
// ppg - Points per game
// oppg - Opponent points per game
// eff - Efficiency

export default Stats;
