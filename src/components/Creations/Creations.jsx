import React from 'react'
import {creationItems} from "../../const";
import "./Creations.css"


// type creationItem = {
//   id:num,
//   title:string,
//   img:string,
//   mobile:string
// }

const Creations = () => {

  console.log(creationItems)

  return (
    <section className="creations-section">
      <div className="creations-title-row">
        <h2 className="josefine thin creations-section-title">Our Creations</h2>
        <div className="desktop-tablet">
        <button className="btn see-all-btn uppercase">See All</button>
        </div>
      </div>
      <ul className="creation-items-list" role="creation-items">
        {creationItems.map(creationItem=>(
          <li key={creationItem.id} className="creation-item">
            <div className="creation-img-div">
               <picture>
                <source media="(min-width:650px)" srcSet={creationItem.img}/>
                <img loading="lazy" className="creation-img" src={creationItem.mobile} alt="img"/>
              </picture>
            </div>
            <h3 className="josefine thin creation-item-title uppercase">{creationItem.title}</h3>
          </li>
        ))}
      </ul>
      {/* <div className="mobile"> */}
        <button className="btn see-all-btn uppercase mobile">See All</button>
      {/* </div> */}
    </section>
  )
}

export default Creations