import { createContext, useContext, useState } from "react"

const GameContext = createContext(null) 

export const GameProvider = ({ children }) => { //valores de base
  const [gameData, setGameData] = useState({
    playerName: "",
    difficulty: "easy",
  })


  const startGame = (formData) => {              //modifico
    setGameData({
      playerName: formData.playerName,
      difficulty: formData.difficulty,
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

