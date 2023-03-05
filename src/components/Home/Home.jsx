import React,{ useEffect } from 'react'
import './Home.scss'

const Home = () => {
  const textAnimation = () => {
    const welcome = 'welcome to ayoub portfolio.               ';
    const textBox = document.querySelector('h2.text-animation')
    let text = []
    let x = 0
    setInterval(()=> {
      textBox.textContent = ''
      textBox.textContent = text.join('')
      text.push(welcome[x])
       if (x >= welcome.length) {
        x = 0
        text = []
       } else {
        x += 1
       }
      
    },300)
  }
  useEffect(()=> {
    textAnimation()
  },[])
  return (
    <>
      <header className='home' id='home'>
        <div className="text">
          <h2 className='text-animation'></h2>
        </div>
        <div className="image">
          <img src="/ayoub.png" alt="personel image" />
        </div>
      </header>
    </>
  )
}

export default Home