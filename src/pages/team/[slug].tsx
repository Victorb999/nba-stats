import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import { Standard } from "../../services/typesRoster";
import Image from "next/image";

type Team = {
  city: string;
  fullName: string;
  isNBAFranchise: boolean;
  confName: string;
  tricode: string;
  teamShortName: string;
  divName: string;
  isAllStar: boolean;
  nickname: string;
  urlName: string;
  teamId: string;
  altCityName: string;
};

type TeamProps = {
  teamEdit: Standard;
};

export default function Team({ teamEdit }: TeamProps) {
  return (
    <div>
      <Image
        width={150}
        height={150}
        src={`https://cdn.nba.com/logos/nba/${teamEdit.teamId}/global/L/logo.svg`}
        alt={teamEdit.teamId}
        objectFit="cover"
      />

      {teamEdit.players.map((team) => {
        return (
          <Image
            width={150}
            height={150}
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${team.personId}.png`}
            alt={team.personId}
            key={team.personId}
            objectFit="cover"
          />
        );
      })}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get("teams.json");
  const data = res.data.league.vegas;

  const paths = data.map((team: Team) => {
    if (team.isNBAFranchise || team.urlName !== null) {
      return {
        params: {
          slug: team.urlName,
        },
      };
    }
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`/teams/${slug}/roster.json`);

  const team: Standard = data.league.standard;

  let teamEdit: Standard = {
    teamId: team.teamId,
    teamLogo: `https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`,
    players: team.players,
  };

  teamEdit.players.map((person) => {
    person.personImg = `https://cdn.nba.com/headshots/nba/latest/1040x760/${person.personId}.png`;
  });

  return {
    props: {
      teamEdit,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
