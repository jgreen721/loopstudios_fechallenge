import React, {useState,useEffect} from 'react'
import { MobileMenu } from './components'
import {iconLogo, iconHamburger,links} from "../../const"
import "./Header.css"


const Header = () => {
    const [showNav,setShowNav] = useState(false);
  


    useEffect(() => {
        if(!showNav)return;

        const handleKeyDown = (e) => {
          if (e.key === 'Escape' && showNav) {
            setShowNav(false);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
    
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [showNav]);
    

 
  return (
    <header>
        <nav className="nav">
            <div className="logo-div">
                <img src={iconLogo} alt="site-logo" />
            </div>
            <div className="desktop">
                <ul className="nav-links">
                    {links.map(link=>(
                        <li key={link.id} className="nav-link-item site-link-item">
                            <a href="#" className="nav-link site-link">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tablet-mobile">
                <div className="mobile-hamburger-icon-div">
                    <button onClick={()=>setShowNav(true)} className="btn-transparent btn hamburger-btn">
                    <img src={iconHamburger} alt="hamburger-icon" />
                    </button>
                </div>
            </div>
        </nav>

        <div className="header-h1-content">
            <h1 className="header-h1 josefine">Immersive</h1>
            <h1 className="header-h1 josefine">Experiences</h1>
            <h1 className="header-h1 josefine">That Deliver</h1>
        </div>
        <div className="tablet-mobile">
             <MobileMenu links={links} showNav={showNav} setShowNav={setShowNav}/>
        </div>
    </header>
  )
}

export default Header