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

  // useEffect(() => {
  //   fetchTags()
  // }, [])

  const snapshot = firestore.collection('coordinates').get()
  console.log(snapshot)

  async function getTags() {
    const snapshot = await firestore.collection('coordinates').get()
    setImageTags(snapshot.docs.map(doc => doc.data))
    console.log(imgTags)
    // return snapshot.docs.map(doc => doc.data)
  }

  // const fetchTags = async()=>{
  //   const response = firestore.collection('coordinates')
  //   const data = await response.get()
  //   data.docs.forEach(item => {
  //     setImageTags([...imgTags, item.data()])
  //   })
  // }

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
      <button onClick={getTags}>Fetch Tags</button>
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
