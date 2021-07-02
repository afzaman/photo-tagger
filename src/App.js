import meme from './images/meme.jpg'
import { useState, useRef } from 'react'
import useToggle from './hooks/useToggle';
import getRandom from './hooks/getRandom'
import DropdownMenu from './components/DropdownMenu'
import memeTags from './images/memeTags.js'

function App() {

  const [dropdownOpen, togggleDropdownOpen] = useToggle(false)
  const [dropdownCoords, setDropdownCoords] = useState({x: 0, y: 0})
  const [imgTags] = useState(getRandom(memeTags, 3))
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
      {imgTags.map((tag) =>
        <p key={tag.y}>
          {tag.label}
        </p>
      )}
      <div 
        onClick={handleImageClick}
        
      >
        {dropdownOpen && (
          <DropdownMenu
          xPos={dropdownCoords.x}
          yPos={dropdownCoords.y}
          xSize={imageSize.xSize}
          ySize={imageSize.ySize}
          tags={imgTags}
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

export default App;
