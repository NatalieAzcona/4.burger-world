import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';


const GameInfo = () => {

  const { state, dispatch } = useContext(GameContext);
    const {score, difficulty, playerName} = state

  return (
    <div>
        <p>Score: {score} </p>
        <p>Dificultad: {difficulty}</p>
        <p>Nombre: {playerName} </p>
    </div>
  )
}

export default GameInfo

