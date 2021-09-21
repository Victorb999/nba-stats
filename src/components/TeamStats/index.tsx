import { TeamStats } from "../../services/typesStats";

type PropsStats ={
  statsRegular: TeamStats;
}

function Stats({statsRegular}: PropsStats) {

  return (
    <div>
      <h3 className={parseInt(statsRegular.min.rank)> 15? "red" : "green"}>min  {">"} avg: {statsRegular.min.avg} - rank: {statsRegular.min.rank}</h3>
      <h3 className={parseInt(statsRegular.fgp.rank)> 15? "red" : "green"}>fgp  {">"} avg: {statsRegular.fgp.avg} - rank: {statsRegular.fgp.rank}</h3>
      <h3 className={parseInt(statsRegular.tpp.rank)> 15? "red" : "green"}>tpp  {">"} avg: {statsRegular.tpp.avg} - rank: {statsRegular.tpp.rank}</h3>
      <h3 className={parseInt(statsRegular.ftp.rank)> 15? "red" : "green"}>ftp  {">"} avg: {statsRegular.ftp.avg} - rank: {statsRegular.ftp.rank}</h3>
      <h3 className={parseInt(statsRegular.orpg.rank)> 15? "red" : "green"}>orpg {">"} avg: {statsRegular.orpg.avg} - rank: {statsRegular.orpg.rank}</h3>
      <h3 className={parseInt(statsRegular.drpg.rank)> 15? "red" : "green"}>drpg {">"} avg: {statsRegular.drpg.avg} - rank: {statsRegular.drpg.rank}</h3>
      <h3 className={parseInt(statsRegular.trpg.rank)> 15? "red" : "green"}>trpg {">"} avg: {statsRegular.trpg.avg} - rank: {statsRegular.trpg.rank}</h3>
      <h3 className={parseInt(statsRegular.apg.rank)> 15? "red" : "green"}>apg  {">"} avg: {statsRegular.apg.avg} - rank: {statsRegular.apg.rank}</h3>
      <h3 className={parseInt(statsRegular.tpg.rank)> 15? "red" : "green"}>tpg  {">"} avg: {statsRegular.tpg.avg} - rank: {statsRegular.tpg.rank}</h3>
      <h3 className={parseInt(statsRegular.spg.rank)> 15? "red" : "green"}>spg  {">"} avg: {statsRegular.spg.avg} - rank: {statsRegular.spg.rank}</h3>
      <h3 className={parseInt(statsRegular.bpg.rank)> 15? "red" : "green"}>bpg  {">"} avg: {statsRegular.bpg.avg} - rank: {statsRegular.bpg.rank}</h3>
      <h3 className={parseInt(statsRegular.pfpg.rank)> 15? "red" : "green"}>pfpg {">"} avg: {statsRegular.pfpg.avg} - rank: {statsRegular.pfpg.rank}</h3>
      <h3 className={parseInt(statsRegular.ppg.rank)> 15? "red" : "green"}>ppg  {">"} avg: {statsRegular.ppg.avg} - rank: {statsRegular.ppg.rank}</h3>
      <h3 className={parseInt(statsRegular.oppg.rank)> 15? "red" : "green"}>oppg {">"} avg: {statsRegular.oppg.avg} - rank: {statsRegular.oppg.rank}</h3>
      <h3 className={parseInt(statsRegular.eff.rank)> 15? "red" : "green"}>eff  {">"} avg: {statsRegular.eff.avg} - rank: {statsRegular.eff.rank}</h3>
    </div>
  );
}

export default Stats;