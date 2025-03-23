import React from 'react'
import { iconLogo,iconClose } from '../../../../const'
import "./MobileMenu.css";


const MobileMenu = ({links,showNav,setShowNav}) => {
  return (
    <nav className={`mobile-nav ${showNav ? 'show-nav' : 'hide-nav'}`} aria-label="mobile-navigation">
        <div className="nav-top-row">
            <div className="icon-div">
                <img src={iconLogo} alt="logo" />
            </div>
            <button onClick={()=>setShowNav(false)} className="btn btn-transparent">
                <img src={iconClose} alt="close-menu" />
            </button>
        </div>
        <ul className="mobile-nav-links">
            {links.map(link=>(
                <li key={link.id} className="mobile-nav-link-item">
                    <a className="mobile-link josefine" href="#">{link.name}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default MobileMenu