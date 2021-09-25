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
                  <div className={styles.playerPhoto}>
                    <div className={styles.playerPhotoContainer}>
                      <ImageWithFallback
                        width={280}
                        height={280}
                        src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.personId}.png`}
                        alt={player.personId}
                        fallbackSrc={`https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png`}
                      />
                    </div>
                    <div className={styles.playerTitleBottom}>
                      <h2>
                        #
                        {`${player.jersey}  ${player.firstName}  ${player.lastName}`}
                      </h2>
                    </div>
                  </div>
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
