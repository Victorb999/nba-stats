import { useCallback, useEffect, useState } from "react";
import { getStandings } from "../../services/api";
import { East, StandardStandings, West } from "../../services/typesStandings";

import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function LeagueStandings() {
  const [standings, setStandings] = useState<StandardStandings>(
    {} as StandardStandings
  );
  const [west, setWest] = useState<West[]>([] as West[]);
  const [east, setEast] = useState<East[]>([] as East[]);
  const setCallback = useCallback(async () => {
    const standings = await getStandings();
    setStandings(standings);
    setWest(standings.conference.west);
    setEast(standings.conference.east);
  }, [setStandings]);

  useEffect(() => {
    setCallback();
  }, [setCallback]);

  return (
    <div className={styles.allStandings}>
      <div className={styles.standingsTitle}>
      <h1>League Standings</h1>
      <h2>{standings.seasonYear}</h2>
      </div>
      <div className={styles.standingsContainer}>
        <div className={styles.standingsConference}>
          <div className={styles.conferenceTitle}>
            <h3>East</h3>
          </div>
          {east.map((team) => {
            return (
              <div
                key={team.teamId}
                className={
                  parseInt(team.confRank) <= 8
                    ? styles.standingsTeam + " " + styles.playoffs
                    : styles.standingsTeam
                }
              >
                <span>{team.confRank}</span>
                <Image
                  width={40}
                  height={40}
                  src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/D/logo.svg`}
                  alt={team.teamSitesOnly.teamNickname}
                  objectFit="cover"
                />
                <Link href={`/team/${team.teamSitesOnly.teamCode}`} passHref>
                  <div className="navbar-brand linkFlex">
                    <span className={styles.teamLink}>
                      {team.teamSitesOnly.teamName +
                        " " +
                        team.teamSitesOnly.teamNickname}
                    </span>
                  </div>
                </Link>
                <span>{team.win + "-" + team.loss}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.standingsConference}>
          <div className={styles.conferenceTitle}>
            <h3>West</h3>
          </div>
          {west.map((team) => {
            return (
              <div
                key={team.teamId}
                className={
                  parseInt(team.confRank) <= 8
                    ? styles.standingsTeam + " " + styles.playoffs
                    : styles.standingsTeam
                }
              >
                <span>{team.confRank}</span>
                <Image
                  width={40}
                  height={40}
                  src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/D/logo.svg`}
                  alt={team.teamSitesOnly.teamNickname}
                  objectFit="cover"
                />
                <Link href={`/team/${team.teamSitesOnly.teamCode}`} passHref>
                  <div className="navbar-brand linkFlex">
                    <span className={styles.teamLink}>
                      {team.teamSitesOnly.teamName +
                        " " +
                        team.teamSitesOnly.teamNickname}
                    </span>
                  </div>
                </Link>
                <span>{team.win + "-" + team.loss}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}