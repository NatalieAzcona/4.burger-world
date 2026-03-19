import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import scoreMessages from '../data/scoreMessages'
import { useNavigate } from 'react-router-dom'

const Score = () => {
const {state} = useContext(GameContext)
const {playerName, score, difficulty} = state
const scoreMessage = scoreMessages.find(n => score <= n.maxScore)
const navigate = useNavigate()

  return (
    <div>
      <h3>¡Tenemos noticias para ti, {playerName}</h3>
      <p>Tu score es {score} para un nivel {difficulty}</p>
      <p> {scoreMessage.message}</p>
      <button onClick = {() => navigate("/")}>
        Jugar de nuevo
      </button>
    </div>
  )
}

export default Score
