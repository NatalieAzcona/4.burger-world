import { useContext, useEffect } from "react"
import OrderTicket from "../components/game/OrderTicket"
import { GameContext } from "../context/GameContext"
import BurgerBuilder from "../components/game/BurgerBuilder"

const Play = () => {
  const { state, dispatch } = useContext(GameContext)

  const views = {
    showing: <OrderTicket />,
    building: <BurgerBuilder />,   //pendiente modificar
    error: <p>¡Error!</p>,           //pendiente
    gameover: <p>Fin</p>,              //pendiente
  } 
  

  useEffect(() => {
  if(state.phase !="showing") return 
    const time10 = setTimeout(() => { dispatch({ type: "START_BUILDING" })}, 10000)
    return () => clearTimeout(time10)
},  [state.phase])

  return  views[state.phase]

}
export default Play
