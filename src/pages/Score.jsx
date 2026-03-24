import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/GameContext'
import scoreMessages from '../data/scoreMessages'
import { useNavigate } from 'react-router-dom'
import usePostScore from '../hooks/usePostScore'
import useGetScores from '../hooks/useGetScores'

const Score = () => {

  const {state} = useContext(GameContext)
  const {playerName, score, difficulty} = state
  const scoreMessage = scoreMessages.find(n => score <= n.maxScore) //para el mensaje del score
  const navigate = useNavigate() 

  //tanstack - post score
  const mutate = usePostScore()
  useEffect(() => {
    mutate({ playerName, score, difficulty })
  }, [])

  //tanstack get
  const scores = useGetScores()

  const position = scores?.findIndex(s => s.playerName === playerName) //posición en el ranking


  return (
    <div>
      <h3>¡Tenemos noticias para ti, {playerName}</h3>
      <p>Tu score es {score} para un nivel {difficulty}</p>
      <p> {scoreMessage.message}</p>
      <p>Tu posición en el ranking es: {position + 1}
      </p>
      <ul>
        {scores?.map((e) => <li key={e._id}>{e.playerName}</li>)}
      </ul>
      <button onClick = {() => navigate("/")}>
        Jugar de nuevo
      </button>
    </div>
  )
}

export default Score
