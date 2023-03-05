import React from 'react'
import './Navigation.scss'

const Navigation = () => {
  const navList = () => {
    const nav_bg_dark = document.querySelector('.nav-bg-dark');
    const nav_list = document.querySelector('.nav-list');
    nav_bg_dark.style.display = 'block';
    nav_list.style.display = 'block';
    setTimeout(() => {
      nav_list.style.left = 0
    }, 100);
  }
  const rmNavList = () => {
    const nav_bg_dark = document.querySelector('.nav-bg-dark');
    const nav_list = document.querySelector('.nav-list');
    nav_list.style.left = '-250px'
    setTimeout(()=> {
      nav_bg_dark.style.display = 'none';
      nav_list.style.display = 'none';
    },600)
  }
  return (
    <>
      <nav>
        <div className="nav-left">
          <span className="material-icons menu-btn" onClick={() => navList()}>menu</span>
          <img src="/logo/yrcode01.png" alt="logo" className="logo" />
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="nav-bg-dark" onClick={()=> rmNavList()}></div>
      <div className="nav-list">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navigation