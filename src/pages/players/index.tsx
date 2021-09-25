import styles from "./styles.module.scss";

import { useCallback, useEffect, useState } from "react";
import { Standard as PlayerStandard } from "../../services/typesPlayer";

import { GetServerSideProps } from "next";
import { getAllPlayers } from "../../services/api";
import Players from "../../components/Players";

type PlayersPageProps = {
  players: PlayerStandard[];
};
function PlayersPage({ players }: PlayersPageProps) {
  const [playersNBA, setPlayersNBA] = useState<PlayerStandard[]>(
    [] as PlayerStandard[]
  );
  const [search, setSearch] = useState<Boolean>(false);

  function filterPlayer(name: string) {
    if (playersNBA.length === 0) {
      const team = [] as PlayerStandard[];
      return team;
    }
    const team = playersNBA.filter((player) => {
      const fullName =
        player.firstName.toLowerCase() + " " + player.lastName.toLowerCase();
      return fullName.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
    return team;
  }

  const getPlayersNBA = useCallback(() => {
    setPlayersNBA(players);
  }, [players]);

  useEffect(() => {
    getPlayersNBA();
  }, [getPlayersNBA]);

  const searchFilterPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3) {
      console.log(e.target.value);
      setPlayersNBA(filterPlayer(e.target.value));
      setSearch(true);
    } else {
      setPlayersNBA(players);
      setSearch(false);
    }
  };
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamSearch}>
        <fieldset>
          <label htmlFor="filterTeam">
            Tell me what player do you look for...
          </label>
          <input type="text" onChange={searchFilterPlayer} name="filterTeam" />
        </fieldset>
      </div>
      {search ? (
      playersNBA.length > 0 ? (
        <Players players={playersNBA} />
      ) : (
        <div className={styles.centerError}>
          <h2>{"Sorry, We didn't find any player with this name..."}</h2>
        </div>
      )
      ) : (
        <div className={styles.centerError}>
          <h2>{"Type a player name to search..."}</h2>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const players = await getAllPlayers();

  // Pass data to the page via props
  return { props: { players } };
};

export default PlayersPage;
