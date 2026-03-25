import { DragDropProvider } from "@dnd-kit/react";
import React, { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import compareHamburger from "../../utils/compareHamburger";
import "./BurgerBuilder.scss";
import useCountdown from "../../hooks/useCountdown";
import GameInfo from "./GameInfo";
import IngredientsPanel from "./ingredientsPanel";
import DropZone from "./DropZone";

const BurgerBuilder = () => {
  const { state, dispatch } = useContext(GameContext);
  const { targetBurger } = state; //aqui la hamburguesa del ticket
  const [builtBurger, setBuiltBurger] = useState([]); //aqui la hamburguesa que construiremos en array
  const countdown = useCountdown(60, "GAME_OVER", state.phase);

  return (
    <>
      {countdown}
      <GameInfo />
      <DragDropProvider
        onDragEnd={(e) => {
          if (e.operation.target === null) return;
          const newBurger = [...builtBurger, e.operation.source.id]; //guardo porque es asíncrono y no lo pilla de una
          setBuiltBurger(newBurger);
        }}
      >
        <div className="burger-builder-wrapper">
          <div className="burger-builder">
            <IngredientsPanel />
            <DropZone builtBurger={builtBurger} />
          </div>
          <button
            onClick={() => {
              const compared = compareHamburger(targetBurger, builtBurger);
              compared
                ? dispatch({ type: "BURGER_COMPLETE" })
                : dispatch({ type: "WRONG_ATTEMPT" });
            }}
          >
            Comprobar
          </button>
          <button
            onClick={() => {
              const builtBurgerUndo = [...builtBurger];
              builtBurgerUndo.pop();
              setBuiltBurger(builtBurgerUndo);
            }}
          >
            Deshacer
          </button>
        </div>
      </DragDropProvider>
    </>
  );
};

export default BurgerBuilder;

//event.operation.source.id es el ingrediente que se arrastra
//event.operation.target.id es donde se suelta (burger-zone)

//NOTA: usamos index en builtBurger porque React se está confundiendo con el i repetido */
