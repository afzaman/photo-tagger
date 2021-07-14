import { useState, useRef} from 'react'
import useToggle from '../hooks/useToggle';
import DropdownMenu from '../components/DropdownMenu'
import meme from '../images/meme.jpg'

function Gameboard(props) {

  const {randomTags} = props

  const [dropdownOpen, togggleDropdownOpen] = useToggle(false)
  const [dropdownCoords, setDropdownCoords] = useState({x: 0, y: 0})
  const imgRef = useRef()
  const [imageSize, updateImageSize] = useState({x: 0, y: 0})

  function handleImageClick(event) {
    const {"pageX": x, "pageY": y} = event
    const xSize = imgRef.current.scrollWidth
    const ySize = imgRef.current.scrollHeight
    updateImageSize({xSize, ySize})
    setDropdownCoords({x, y})
    togggleDropdownOpen()
  }

  return (
    <div>
      <div className="navbar">
        {randomTags.map((tag) =>
          <a
            key={tag.y}
            className="nav-item"
          >
            {tag.label}
          </a>
        )}
      </div>
      <div 
        onClick={handleImageClick}
      >
        {dropdownOpen && (
          <DropdownMenu
          xPos={dropdownCoords.x}
          yPos={dropdownCoords.y}
          xSize={imageSize.xSize}
          ySize={imageSize.ySize}
          tags={randomTags}
          />
        )}
        <img 
          src={meme} 
          alt=""
          ref={imgRef}
        />
      </div>
    </div>
    
  );
}

export default Gameboard;
