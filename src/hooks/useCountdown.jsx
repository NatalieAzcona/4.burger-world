import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../context/GameContext";

const useCountdown = (sec, onComplete, currentPhase) => {
  const { state, dispatch } = useContext(GameContext);
  const [count, setCount] = useState(sec);

  useEffect(() => {

    if (count === 0) {
      dispatch({ type: onComplete});
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

//Resetear al cambiar de fase
  useEffect(()=> {
    setCount(sec)
  }, [currentPhase])

  return (
    <>
      <h2>{count}</h2>
    </>
  );
};

export default useCountdown;
