import React from 'react'
import './Skills.scss'

const Skills = () => {
  const frontend = [
    {id:1,name:'HTML5',num:90},{id:2,name:'CSS3',num:90},
    {id:3,name:'SCSS',num:85},{id:4,name:'JS',num:90},
    {id:5,name:'React',num:80},
  ]
  const backend = [
    {id:1,name:'Python',num:83},{id:2,name:'Django',num:82},
  ]
  const ux_ui = [
    {id:1,name:'Figma',num:75}
  ]
  const mapping = (x) => {
    return x.map(el=> {
      return <div className='skills-box_item' key={el.id}>
        <div className="skills-box_item_name">{el.name}</div>
        <div className="skills-box_item_bar">
          <div className="skills-box_item_bar_bg" style={{"width":`${el.num}%`}}></div>
        </div>
        <div className="skills-box_item_num">{el.num}%</div>
      </div>
    })
  }
  return (
    <div className='container' id='skills'>
      <h2 className='skills_title'>Professional Skills</h2>
      <section className='skills'>
        <div className="frontend skills-box">
          <h3>FRONTEND</h3>
          {mapping(frontend)}
        </div>
        <div className="backend skills-box">
          <h3>BACKEND</h3>
          {mapping(backend)}
        </div>
        <div className="ux-ui skills-box">
          <h3>UX/UI</h3>
          {mapping(ux_ui)}
        </div>
      </section>
    </div>
  )
}

export default Skills