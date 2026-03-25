import React, { useContext, useEffect } from "react";
import { Button } from "@chakra-ui/react";
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
      <Button
        onClick={() => navigate("/ranking")}
        bg="ash"
        color="white"
        border="3px solid"
        borderRadius="full"
        borderColor="choco"
        boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
        _hover={{ bg: "gray.500", transform: "translateY(-1px)" }}
      >
        Ranking
      </Button>
      <Button
        onClick={() => navigate("/")}
        bg="ketchup"
        color="white"
        border="3px solid"
        borderRadius="full"
        borderColor="choco"
        boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
        _hover={{ bg: "berry", transform: "translateY(-1px)" }}
      >
        Jugar de nuevo
      </Button>
    </div>
  );
};

export default Score;
