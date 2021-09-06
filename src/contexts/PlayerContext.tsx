import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,useCallback
} from "react";
import { api } from "../services/api";
import { Standard } from "../services/typesPlayer"

type PlayerContextData = {
  players: Standard[];
  getPlayers: () => void;
  getPlayer:(id:string) => Standard;
};
type PlayerContextProviderProps = {
  children: ReactNode;
};
export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [players, setPlayers] = useState<Standard[]>([] as Standard[]);

  const getPlayers = useCallback(async () => {
    const res = await api.get("/players.json");
    setPlayers(res.data.league.standard);
  },[]);

  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  function getPlayer(id: string){
    const player = players.filter( player => { return player.personId == id})
    return player[0];
  }

  return (
    <PlayerContext.Provider value={{ players, getPlayers, getPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};
