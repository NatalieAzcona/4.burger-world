import InitialForm from "../context/initialForm";
import "./Home.scss";
import { useGame } from "../context/GameContext"

const Home = () => {
  return (
    <div className="home">
      <h1>¡Bienvenido a Burger World!</h1>
      <p>El mundo donde pondras a prueba tu buen gusto</p>
      <InitialForm />
    </div>
  );
}



export default Home;
