import meme from './images/meme.jpg'
import { useState, useRef, useEffect } from 'react'
import useToggle from './hooks/useToggle';
import getRandom from './hooks/getRandom'
import DropdownMenu from './components/DropdownMenu'
import { firestore } from './firebase/config';

function App() {

  const [imgTags, setImageTags] = useState([])
  const [dropdownOpen, togggleDropdownOpen] = useToggle(false)
  const [dropdownCoords, setDropdownCoords] = useState({x: 0, y: 0})
  const imgRef = useRef()
  const [imageSize, updateImageSize] = useState({x: 0, y: 0})

  useEffect(() => {
    fetchTags()
  }, [])

  const fetchTags = async()=>{
    const response = firestore.collection('coordinates')
    const data = await response.get()
    data.docs.forEach(item => {
      setImageTags(imgTags => [...imgTags, item.data()])
    })
    
  }

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
        {imgTags.map((tag) =>
          <a key={tag.y}>
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
