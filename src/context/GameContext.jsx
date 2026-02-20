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

export const useGame = () => {    //centralizo en useGame
  const context = useContext(GameContext)

  if (!context) {
    console.log("useGame debe usarse dentro de <GameProvider>")
  }

  return context
}
