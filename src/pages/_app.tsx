import "../styles/global.scss";

import styles from "../styles/app.module.scss";
import { Header } from "../components/Header";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </div>
      </PlayerContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
