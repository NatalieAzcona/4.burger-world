import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import '../../assets/styles/emoji.scss'

const CorrectBurger = () => {
    const { state, dispatch } = useContext(GameContext)
    const score = state.score

    return (
    <div>
        <h3>¡Al cliente le encanta cómo cocinas!</h3>
        <p>Score: {score}</p>
      <div className="emoji smile">
       <figure className="face">
          <span className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </span>
          <span className="mouth"></span>
        </figure>
      </div>

      <button onClick={() => dispatch({ type: 'NEXT_BURGER' })}>
        ¡A por otra hamburguesa!
      </button>
    </div>
  )
}

export default CorrectBurger
