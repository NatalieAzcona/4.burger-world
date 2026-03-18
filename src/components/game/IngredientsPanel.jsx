import React from 'react'
import Draggable from './Draggable'
import { IngredientPiece } from './IngredientsCard'
import { ingredients } from '../../data/ingredients'

const IngredientsPanel = () => {
  return (
    <div>
        <p>Usa estos ingredientes</p>
            {ingredients.map((i) => (
            <Draggable key={i.id} id={i.id}>
            <IngredientPiece className={i.className} />
            </Draggable>))}
    </div>
  )
}

export default IngredientsPanel
