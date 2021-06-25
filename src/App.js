import meme from './images/meme.jpg'

function handleImageClick(event) {
  const {"pageX": x, "pageY": y} = event
  console.log(x,y)
}

function App() {
  return (
    <div>
      <img src={meme} alt="" 
        onClick={handleImageClick}
      />
    </div>
  );
}

export default App;
