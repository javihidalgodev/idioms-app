import HeaderLayout from "./components/HeaderLayout"
import IdiomLayout from "./components/IdiomLayout"
import FooterLayout from "./components/FooterLayout"
import Idioms from './moks/idioms.json'
import './App.css'
import { useEffect, useState } from "react"


export default function App() {
  
  const idioms = Idioms;
  const [randomIdiom, setRandomIdiom] = useState()

  const generateRandomIdiom = () => {
    const newRandomIdiom = idioms[Math.round(Math.random() * (idioms.length - 1))]
    console.log(newRandomIdiom)
    
    setRandomIdiom(newRandomIdiom)
  }
  
  const handleSpaceBar = (e) => {
    if(e.key === ' ') {
      generateRandomIdiom()
    }
  }

  useEffect(() => {
    generateRandomIdiom()
    window.addEventListener('keyup', handleSpaceBar)

    // return window.removeEventListener('keyup', handleSpaceBar)
  }, [])


  return (
    <div className="content-container">
    <HeaderLayout />
    <main>
      <button onClick={generateRandomIdiom}>Generate!</button>
      {
        randomIdiom && <IdiomLayout idiom={randomIdiom} />
      }
    </main>
    <FooterLayout />
    </div>
  )
}