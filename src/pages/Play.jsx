import { useContext, useEffect } from "react";
import OrderTicket from "../components/game/OrderTicket";
import { GameContext } from "../context/GameContext";
import BurgerBuilder from "../components/game/BurgerBuilder";
import useCountdown from "../hooks/useCountdown";



const Play = () => {
  const { state, dispatch } = useContext(GameContext);
  const countdown = useCountdown(10, "START_BUILDING");

  const views = {
    showing: <OrderTicket />,
    building: <BurgerBuilder />, //pendiente modificar
    error: <p>¡Error!</p>, //pendiente
    gameover: <p>Fin</p>, //pendiente
  };

  return (
    <>
      {state.phase === "showing" ? countdown : null}
      {views[state.phase]}
    </>
  )
};
export default Play;
