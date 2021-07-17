import { Link } from "react-router-dom"
import '../index.css'

function GameOver(props) {
    
    const { time } = props

  return (
    <div className="start-page">
      <div className="start-menu-container">
        <h1>You Win!</h1>
        <p>And it only took you... <h1>{time} seconds</h1> What a legend.</p>
        <Link to="/StartMenu">
          <button className="start-button"> Play Again</button>
        </Link> 
      </div>
    </div>
  );
}

export default GameOver;