import { useContext, useEffect } from "react";
import OrderTicket from "../components/game/OrderTicket";
import { GameContext } from "../context/GameContext";
import BurgerBuilder from "../components/game/BurgerBuilder";
import WrongBurger from "../components/game/WrongBurger";
import useCountdown from "../hooks/useCountdown";
import CorrectBurger from "../components/game/CorrectBurger";



const Play = () => {
  const { state, dispatch } = useContext(GameContext);
  const countdown = useCountdown(10, "START_BUILDING", state.phase);

  const views = {
    showing: <OrderTicket />,
    building: <BurgerBuilder />, //pendiente modificar
    error: <WrongBurger />,
    success: <CorrectBurger/>,
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
