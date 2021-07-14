import { Link } from "react-router-dom"
import '../index.css'
import meme from '../images/meme.jpg'

function StartMenu(props) {
    
    const {handleClick} = props

  return (
    <div className="start-page" >
      <div className="start-menu-container">
        <h1>Can you find the memes?</h1>
        <Link to="/Gameboard">
          <button className="start-button" onClick={handleClick}>Start Game</button>
        </Link> 
      </div>
    </div>
  );
}

export default StartMenu;