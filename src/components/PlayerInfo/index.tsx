import Image from "next/image";
import { Standard as PlayerStandard } from "../../services/typesPlayer";

import { getAge } from "../../utils/getAge";

type PropsStats = {
  player: PlayerStandard;
  teamName: string;
};

function PlayerInfo({ player, teamName }: PropsStats) {
  return (
    <>
      <div>
        <h2>
          <Image
            width={50}
            height={50}
            src={`https://cdn.nba.com/logos/nba/${player.teamId}/global/D/logo.svg`}
            alt={`Team`}
            objectFit="cover"
          />
          {teamName}
        </h2>
        <h2>{player.teamSitesOnly.posFull}</h2>
        <h2>{`${player.heightMeters}m `}</h2>
        <h2>{`${player.weightKilograms}Kg`} </h2>
        <h2>{getAge(player.dateOfBirthUTC)} years old</h2>
        <h2>{player.yearsPro} years as pro </h2>
      </div>
      <div>
        <h2>Pick #{player.draft.pickNum} </h2>
        <h2>Country: {player.country} </h2>
        <h2>
          Round: {player.draft.roundNum}/{player.draft.seasonYear}
        </h2>
        <h2>College: {player.collegeName} </h2>
      </div>
    </>
  );
}

export default PlayerInfo;
