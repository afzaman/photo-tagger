import { Link } from "react-router-dom";
function StartMenu(props) {
    
    const {handleClick} = props

  return (
    <div>
        <h1>Can you find the memes?</h1>
        <Link to="/Gameboard"><button onClick={handleClick}> Start Game </button></Link>
        
    </div>
    
  );
}

export default StartMenu;