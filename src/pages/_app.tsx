import "../styles/global.scss";

import styles from "../styles/app.module.scss";
import { Header } from "../components/Header";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import { TeamContextProvider } from "../contexts/TeamContext";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamContextProvider>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </div>
      </PlayerContextProvider>
    </TeamContextProvider>
  );
}

export default MyApp;
