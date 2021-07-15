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

  function handleButtonClick(tag, index, relX, relY){
    console.log(tag, relX, relY)
    if (relX < tag.x + .1 && relX > tag.x - .1){
      console.log("x is correct")
      if (relY < tag.y + .1 && relY > tag.y - .1){
          randomTags[index].found = "true"
        }
    } else {
  }
  }

  return (
    <div>
      <div className="navbar">
        {randomTags.map((tag) =>
          <div
            key={tag.y}
            className="nav-item"
            found={tag.found}
          >
            {tag.label}
          </div>
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
          handleButtonClick={handleButtonClick}
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
