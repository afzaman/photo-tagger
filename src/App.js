import React from 'react'
import { HashRouter as BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Gameboard from './components/Gameboard'
import StartMenu from './components/StartMenu'
import Header from './components/Header'
import Footer from './components/Footer'
import { firestore } from './firebase/config'
import { useState, useEffect } from 'react'
import getRandom from './hooks/getRandom'


function App() {

  const [imgTags, setImageTags] = useState([])
  const [randomTags, setRandomTags] = useState([])

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

  function handleClick(){
    let tags = getRandom(imgTags, 3)
    tags.forEach((e) => {
      e.found = "false"
    })
    setRandomTags(tags)
  }

  return (
    <BrowserRouter>
      <Header/>
      <Switch>

        <Route exact path="/">
          <Redirect to="/StartMenu" />
        </Route>

        <Route path="/StartMenu">
          <StartMenu handleClick={handleClick}/>
        </Route>

        <Route path="/Gameboard">
          <Gameboard randomTags={randomTags}/>
        </Route>

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;