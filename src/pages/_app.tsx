import "../styles/global.scss";

import styles from "../styles/app.module.scss";
import { Header } from "../components/Header";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { TeamContextProvider } from "../contexts/TeamContext";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
}

export default MyApp;
