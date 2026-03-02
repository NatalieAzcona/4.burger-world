import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import { GameProvider } from './context/GameContext.jsx'
import { system } from './theme'
import './main.scss'
import './index.css'



createRoot(document.getElementById('root')).render(
  <ChakraProvider value={system}>
    <BrowserRouter>
      <GameProvider>
        <App />
      </GameProvider>
    </BrowserRouter>
  </ChakraProvider>
)
