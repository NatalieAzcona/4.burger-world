import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../context/GameContext";

const useCountdown = (sec, statePhase) => {
  const { state, dispatch } = useContext(GameContext);

  const [count, setCount] = useState(sec);

  useEffect(() => {

    if (count === 0) {
      dispatch({ type: statePhase});
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <h2>{count}</h2>
    </>
  );
};

export default useCountdown;
