import styles from "./styles.module.scss";
import ImageWithFallback from "../../utils/ImageWithCallBack";
import Link from "next/link";
import { Standard as PlayerStandard } from "../../services/typesPlayer";

type PlayersProps = {
  players: PlayerStandard[];
};

function Players({ players }: PlayersProps) {
  return (
    <div className={styles.containerPlayers}>
      <h1>Players</h1>
      <div className={styles.players}>
        {players.map((player) => {
          return (
            <div key={player.personId} className={styles.player}>
              <Link href={`/player/${player.personId}`} passHref>
                <div className="navbar-brand">
                  <ImageWithFallback
                    width={200}
                    height={200}
                    src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.personId}.png`}
                    alt={player.personId}
                    fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
                  />
                  <h2>{player.firstName + " " + player.lastName}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Players;
