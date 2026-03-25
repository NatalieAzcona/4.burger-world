import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import scoreMessages from "../data/scoreMessages";
import { useNavigate } from "react-router-dom";
import usePostScore from "../hooks/usePostScore";

const Score = () => {
  const { state } = useContext(GameContext);
  const { playerName, score, difficulty } = state;
  const scoreMessage = scoreMessages.find((n) => score <= n.maxScore); //para el mensaje del score
  const navigate = useNavigate();

  //tanstack - post score
  const mutate = usePostScore();
  useEffect(() => {
    mutate({ playerName, score, difficulty });
  }, []);

  return (
    <div>
      <h3>¡Tenemos noticias para ti, {playerName}</h3>
      <p>
        Tu score es {score} para un nivel {difficulty}
      </p>
      <p> {scoreMessage.message}</p>
      <button onClick={() => navigate("/ranking")}>
        Ver mi posición en el ranking
      </button>
      <button onClick={() => navigate("/")}>Jugar de nuevo</button>
    </div>
  );
};

export default Score;
