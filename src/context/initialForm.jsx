import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useGame } from "./GameContext"

import "./initialForm.scss"

const InitialForm = () => {
  const { startGame } = useGame()        //me lo traigo de GameContext
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      playerName: "",
      difficulty: "easy",
    },
  })

  const onSubmit = (data) => {
    startGame(data)     //Me traigo playerName y difficulty
    navigate("/play")
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="playerName">¿Cuál es tu burgernombre?</label>
        <input
          placeholder="¿Hamburguesio Anastasio..?"
          type="text"
          id="playerName"
          {...register("playerName", {
            required: "No olvides escribir tu nombre :)",
            minLength: 2,
          })}
        />

        <h2>¿Cómo quieres la carne?</h2>
        <div>
          <h3 className="form-section-title">Selecciona el punto de la carne</h3>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" value="easy" {...register("difficulty")} />
              Poco hecha 🔥
            </label>
            <label className="radio-option">
              <input type="radio" value="medium" {...register("difficulty")} />
              Al punto 🔥🔥
            </label>
            <label className="radio-option">
              <input type="radio" value="hard" {...register("difficulty")} />
              Muy hecha 🔥🔥🔥
            </label>
          </div>
        </div>

        <button type="submit">Jugar</button>
      </form>
    </div>
  )
}

export default InitialForm
