import type { NextPage } from 'next'
import Teams  from '../components/Teams'
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | NBA stats</title>
      </Head>
      <Teams />
    </>
  )
}

export default Home
