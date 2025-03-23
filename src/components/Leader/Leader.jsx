import React from 'react'
import { imgInteractive, imgInteractiveMobile } from '../../const'
import "./Leader.css"

const Leader = () => {

return (
    <section className="leader-section" aria-labelledby="leading-header">
      <div className="leader-section-content">
      <div className="interactive-img-div">
        <picture>
          <source media="(min-width:375px)" srcSet={imgInteractiveMobile} title="table image of interactive vr"/>
          <img className="interactive-img" src={imgInteractive} alt="interactive-section-img" />
        </picture>
      </div>
      <div className="content-card">
        <h2 className="josefine uppercase thin no-whitespace leader-h2">The leader in<br/> interactive vr</h2>
        <p className="leader-blurb alata"> Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
      </div>
      </div>
    </section>
  )
}

export default Leader