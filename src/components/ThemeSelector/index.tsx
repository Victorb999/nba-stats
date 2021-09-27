import styles from "./styles.module.scss";
import { useTheme } from "../../contexts/ThemeContext";
function ThemeSelector() {
  const { toogleTheme, darkTheme } = useTheme();
  return (
    <button className={styles.themeSelector} onClick={() => toogleTheme()}>
      {darkTheme ? (
        <span role="img" aria-label="sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="moon">
          🌙
        </span>
      )}
    </button>
  );
}

export default ThemeSelector;
