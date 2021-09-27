import type { NextPage } from "next";
import Head from "next/head";
import LeagueStandings from "../components/LeagueStandings";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | NBA stats</title>
      </Head>
      <div className="welcomeContainer">
        <h1>Welcome to NBA stats</h1>
        <h3>here you can search all about nba stuffs</h3>
      </div>
      <div>        
        <LeagueStandings />
      </div>
    </>
  );
};

export default Home;
