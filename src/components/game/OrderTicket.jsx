import { IngredientPiece } from "./IngredientsCard";
import "../../assets/styles/ingredients.scss";
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";

const OrderTicket = ({ timeLeft }) => {
  const { state } = useContext(GameContext);
  const { targetBurger } = state;

  return (
    <div>
      <p>{timeLeft}</p>
      <div className="hamburger">
        {targetBurger &&
          targetBurger.map((ingredient, index) => (
            <IngredientPiece key={index} className={ingredient.className} />
          ))}
      </div>
    </div>
  );
};

export default OrderTicket;
