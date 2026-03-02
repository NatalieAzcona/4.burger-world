import { useGame } from "../../context/GameContext"
import { IngredientPiece } from "./IngredientsCard"
import "../../assets/styles/ingredients.scss"

const OrderTicket = ({ timeLeft }) => {
  const { gameData } = useGame()
  const { targetBurger } = gameData

  return (
    <div>
      <p>{timeLeft}</p>
      <div className="hamburger">
        {targetBurger.map((ingredient, index) => (
          <IngredientPiece key={index} className={ingredient.className} />
        ))}
      </div>
    </div>
  )
}

export default OrderTicket
