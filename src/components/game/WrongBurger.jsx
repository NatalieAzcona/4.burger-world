import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import '../../assets/styles/emoji.scss'

const WrongBurger = () => {
  const { state, dispatch } = useContext(GameContext)
  const score = state.score

  return (
    <div>
      <div className="emoji speechless">

      <h3>Ups, el cliente no está satisfecho con esta hamburguesa</h3>
      <p>Score: {score}</p>
        <figure className="face">
          <span className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </span>
          <span className="mouth"></span>
        </figure>
      </div>

      <button onClick={() => dispatch({ type: 'START_BUILDING' })}>
        Intenta de nuevo
      </button>
    </div>
  )
}

export default WrongBurger
