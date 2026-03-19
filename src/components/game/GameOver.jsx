import React, { useContext, useEffect } from 'react'
import { GameContext } from '../../context/GameContext';
import { Navigate, useNavigate } from 'react-router-dom';



const GameOver = () => {
const { state, dispatch } = useContext(GameContext);
const {playerName} = state
const navigate = useNavigate()

useEffect(() => {
    setTimeout(() => navigate("/score"), 3000)
}, [])


  return (
    <div>
        <h3>¡Se ha acabado el tiempo, {playerName}!</h3>
        <p>Estamos calculando qué tan bien cocinas...</p>
    </div>
  )
}

export default GameOver
