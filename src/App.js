import meme from './images/meme.jpg'
import { useState } from 'react'
import useToggle from './hooks/useToggle';
import DropdownMenu from './components/DropdownMenu'

function App() {

  const [dropdownOpen, togggleDropdownOpen] = useToggle(false)
  const [dropdownCoords, setDropdownCoords] = useState({x: 0, y: 0})

  function handleImageClick(event) {
    const {"pageX": x, "pageY": y} = event
    setDropdownCoords({x, y})
    togggleDropdownOpen()
  }

  return (
    <div onClick={handleImageClick}>
      {dropdownOpen && (
        <DropdownMenu
        xPos={dropdownCoords.x}
        yPos={dropdownCoords.y}
        />
      )}
      <img 
        src={meme} 
        alt=""
      />
    </div>
  );
}

export default App;
