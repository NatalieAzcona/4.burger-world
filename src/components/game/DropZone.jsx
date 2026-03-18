import React from 'react'
import { ingredients } from '../../data/ingredients';
import { IngredientPiece } from './IngredientsCard';
import Droppable from './Droppable';

const DropZone = ({builtBurger}) => {
  return (
            <Droppable id="drop-zone">
              <div>
                <p>Construye tu hamburguesa</p>
                {builtBurger.map((i, index) => {
                  const ingredient = ingredients.find((ing) => ing.id === i);
                  return (
                    <IngredientPiece
                      key={index}
                      className={ingredient.className}
                    />
                  );
                })}
              </div>
            </Droppable>
  )
}

export default DropZone
