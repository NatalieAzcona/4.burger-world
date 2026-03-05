import { createContext, useContext, useState } from "react"
import { levels } from "../data/levels"
import { buildHamburger } from "../utils/buildHamburger"


const initialState = {
  phase: "showing",
  score: 0,
  attempts: 0,
  targetBurger: null,
}

const gameReducer = (state, action) => {
  switch(action.type) {
    case "START_GAME":
      return { ...state, phase: "showing", score: 0, attempts: 0};
    case "START_BUILDING":
      return { ...state, phase: "building" };
    case "BURGER_COMPLETE":
      return {...state, phase: "showing", score: state.score + 1};  //tengo que poner showing porque pasa al siguiente estado
    case "WRONG_ATTEMPT": 
      return {...state, phase: "error", attempts: state.attempts + 1};
    case "NEXT_BURGER":
      return {...state, phase: "showing"}
    case "GAME_OVER":
      return {...state, phase: "gameover" }
  }
}

const [state, dispatch] = useReducer(gameReducer, initialState)

//separar tiempo, en un solo componente que ese genere sus propias renderizaciones

// carpeta de 



//contexto que pasaré a usereducer
/* const GameContext = createContext(null) 

export const GameProvider = ({ children }) => { //valores de base
  const [gameData, setGameData] = useState({
    playerName: "",
    difficulty: "easy",
  })

  const [phase, setPhase] = useState("showing")         //Primera fase: showing en contexto

  const startGame = (formData) => {                        
    const layers = levels[formData.difficulty].layers     //guardo capas según nivel
    setGameData({
      playerName: formData.playerName,
      difficulty: formData.difficulty,
      targetBurger: buildHamburger(layers),              //llamo a buildhamburger para crear la hamburguesa y guardo en gameData.targetBurger
    })
  } */

  //paso la información wrapeada a children

  return (
    <GameContext.Provider value={{ gameData, startGame, phase }}>    
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}

//cambiar a reducer, varios estados: necesito un contexto para proveer el reducer.

//playername y difficulty 

