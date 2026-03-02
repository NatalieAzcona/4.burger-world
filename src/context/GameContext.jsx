import { createContext, useContext, useState } from "react"
import { levels } from "../data/levels"
import { buildHamburger } from "../utils/buildHamburger"

const GameContext = createContext(null) 

export const GameProvider = ({ children }) => { //valores de base
  const [gameData, setGameData] = useState({
    playerName: "",
    difficulty: "easy",
  })


  const startGame = (formData) => {
    const layers = levels[formData.difficulty].layers
    setGameData({
      playerName: formData.playerName,
      difficulty: formData.difficulty,
      targetBurger: buildHamburger(layers),
    })
  }

  //paso la información wrapeada a children

  return (
    <GameContext.Provider value={{ gameData, startGame }}>    
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

