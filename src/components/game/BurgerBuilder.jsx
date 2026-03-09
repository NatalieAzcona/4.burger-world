import { DragDropProvider } from "@dnd-kit/react";
import React, { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import Draggable from "./Draggable";
import { ingredients } from "../../data/ingredients";
import Droppable from "./Droppable";
import { IngredientPiece } from "./IngredientsCard";

const BurgerBuilder = () => {
  const { state } = useContext(GameContext);
  const { targetBurger } = state; //aqui la hamburguesa del ticket

  const [builtBurger, setBuiltBurger] = useState([]); //aqui la hamburguesa que construiremos en array

  return (
    <DragDropProvider
      onDragEnd={(e) => {
        e.operation.target !== null
          ? setBuiltBurger([...builtBurger, e.operation.source.id])
          : null;
      }}
    >
      <div>
        <p>Usa estos ingredientes</p>
        {ingredients.map((i) => (
          <Draggable key={i.id} id={i.id}>
            <IngredientPiece className={i.className} />
          </Draggable>
        ))}
      </div>
      <Droppable id="burger-zone">
        <div>
          <p>Construye tu hamburguesa</p>
          {builtBurger.map((i, index) => {
            const ingredient = ingredients.find((ing) => ing.id === i);
            return (
              <IngredientPiece key={index} className={ingredient.className} />
            );
          })}
        </div>
      </Droppable>
    </DragDropProvider>
  );
};

export default BurgerBuilder;

//event.operation.source.id es el ingrediente que se arrastra
//event.operation.target.id es donde se suelta (burger-zone)

//NOTA: usamos index en builtBurger porque React se está confundiendo con el i repetido
