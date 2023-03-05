import React from 'react'
import './Projects.scss'

const Projects = () => {
  const carousel = [
    {id:1,img:'/projects/yrshop/01.png',title:'YRShop home page',desc:'',link:'https://yrshop.tk'},
    {id:2,img:'/projects/yrshop/02.png',title:'YRShop home page',desc:'',link:'https://yrshop.tk'},
    {id:3,img:'/projects/yrshop/03.png',title:'YRShop home page',desc:'',link:'https://yrshop.tk'},
    {id:4,img:'/projects/yrshop/04.png',title:'YRShop category and filter',desc:'',link:'https://yrshop.tk/product/list/3'},
    {id:5,img:'/projects/yrshop/05.png',title:'YRShop product page',desc:'',link:'https://yrshop.tk/product/details/1'},
    {id:6,img:'/projects/yrshop/06.png',title:'product details',desc:'',link:'https://yrshop.tk/product/details/1'},
    {id:7,img:'/projects/yrshop/07.png',title:'product details',desc:'',link:'https://yrshop.tk/product/details/1'},
    {id:8,img:'/projects/yrshop/08.png',title:'dark mode change it',desc:'',link:'https://yrshop.tk/product/details/1'},
    {id:9,img:'/projects/yrshop/09.png',title:'menu',desc:'',link:'https://yrshop.tk/product/details/1'},
    {id:10,img:'/projects/yrshop/10.png',title:'login page',desc:'',link:'https://yrshop.tk/accounts/login/'},
    {id:11,img:'/projects/yrshop/11.png',title:'sign up page',desc:'',link:'https://yrshop.tk/accounts/signup'},
    {id:12,img:'/projects/yrshop/12.png',title:'profile (login required)',desc:'',link:'https://yrshop.tk/accounts/profile'},
    {id:13,img:'/projects/yrshop/13.png',title:'profile (login required)',desc:'',link:'https://yrshop.tk/accounts/profile'},
    {id:14,img:'/projects/yrshop/14.png',title:'profile (login required)',desc:'',link:'https://yrshop.tk/accounts/profile'},
    {id:15,img:'/projects/yrshop/15.png',title:'favorite (login required)',desc:'',link:'https://yrshop.tk/favorite'},
    {id:16,img:'/projects/yrshop/16.png',title:'shopping cart (login required)',desc:'',link:'https://yrshop.tk/shopping-cart'},
    {id:17,img:'/projects/yrshop/17.png',title:'search engine page',desc:'',link:'https://yrshop.tk/search/page?name=lp40'},
    {id:18,img:'/projects/yrshop/18.png',title:'delete product (login required)',desc:'',link:'https://yrshop.tk/accounts/profile'},
    {id:19,img:'/projects/yrshop/19.png',title:'edit product (login required)',desc:'',link:'https://yrshop.tk/accounts/profile'},
  ]
  const carousel_mapping = (x) => {
    return x.map(el=> {
      return <div key={el.id} className="carousel-item">
              <a href={el.link} target='_blank'>
                <img src={el.img} alt={el.title} title={el.title} />
              </a>
              <div className="carousel-item_caption">
                <h5>{el.title}</h5>
              </div>
            </div>
    })
  }
  let lft = 0
  const left = () => {
    const carouselP = document.querySelector('.carousel')
    const itemWidth = Array.from(document.querySelectorAll('.carousel-item'))[0].offsetWidth;
    let p = ((-itemWidth * 19) + (-10 * 18)) + window.screen.width
    if (lft >= -itemWidth) {
      lft = p
      carouselP.style.left = `${lft}px`
    } else {
      lft += (itemWidth+10)
      carouselP.style.left = `${lft}px` 
    }
  }
  const right = () => {
    const carouselP = document.querySelector('.carousel')
    const itemWidth = Array.from(document.querySelectorAll('.carousel-item'))[0].offsetWidth;
    let p = ((-itemWidth * 19) + (-10 * 18)) + window.screen.width
    if (lft <= p) {
      lft = 0
      carouselP.style.left = `${lft}px`
    } else {
      lft -= (itemWidth+10)
      carouselP.style.left = `${lft}px` 
    }
  }
  return (
    <div className='projects' id='projects'>
      <h2 className='projects_title'>My Best Project</h2>
      <div className="carousel_box">
        <div className="carousel">
          {carousel_mapping(carousel)}
        </div>
        <span className="material-icons-outlined left" onClick={()=> left()}>chevron_left</span>
        <span className="material-icons-outlined right" onClick={()=> right()}>chevron_right</span>
      </div>
    </div>
  )
}

export default Projects