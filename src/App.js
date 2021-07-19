import React from 'react'
import { HashRouter as BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Gameboard from './components/Gameboard'
import StartMenu from './components/StartMenu'
import Footer from './components/Footer'
import GameOver from './components/GameOver';
import { firestore } from './firebase/config'
import { useState, useEffect } from 'react'
import getRandom from './hooks/getRandom'


function App() {

  const [imgTags, setImageTags] = useState([])
  const [randomTags, setRandomTags] = useState([])
  const [time, updateTime] = useState(0)
  const [retrievingData, updateRetrievingData] = useState(true)

  useEffect(() => {
      fetchTags()
  }, [])
  
  const fetchTags = async()=>{
      const response = firestore.collection('coordinates')
      const data = await response.get()
      data.docs.forEach(item => {
          setImageTags(imgTags => [...imgTags, item.data()])
      })
      updateRetrievingData(false)
  }

  function handleClick(difficulty){
    let tags = getRandom(imgTags, difficulty)
    tags.forEach((e) => {
      e.found = "false"
    })
    setRandomTags(tags)
  }

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Redirect to="/StartMenu" />
        </Route>

        <Route path="/StartMenu">
          <StartMenu handleClick={handleClick} retrievingData={retrievingData}/>
        </Route>

        <Route path="/Gameboard">
          <Gameboard randomTags={randomTags} time={time} updateTime={updateTime}/>
        </Route>

        <Route path="/GameOver">
          <GameOver time={time}/>
        </Route>

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;