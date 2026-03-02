import InitialForm from "../context/initialForm";
import "./Home.scss";
import { useGame } from "../context/GameContext"

const Home = () => {
  return (
    <div className="home">
      <InitialForm />
    </div>
  );
}



export default Home;
