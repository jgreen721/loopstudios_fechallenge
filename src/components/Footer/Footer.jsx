import React from 'react'
import {iconLogo,links,mediaLinks} from "../../const"
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <div className="logo-div">
          <img src={iconLogo} alt="footer-logo" />
        </div>
        <ul className="footer-site-links">
          {links.map(footerSiteLink=>(
            <li key={footerSiteLink.id} className="footer-site-link-item site-link-item">
              <a className="footer-site-link site-link" href="#">{footerSiteLink.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-col">
      <ul className="footer-media-links">
          {mediaLinks.map(footerSiteLink=>(
            <li key={footerSiteLink.id} className="footer-media-link-item">
              <a className="footer-media-link" href={footerSiteLink.link}>
                <img src={footerSiteLink.icon} alt="media-icon"/>
                <img className="shadow-media-icon" src={footerSiteLink.icon} alt="media-icon"/>
              </a>
            </li>
          ))}
        </ul>
        <div className="caption-div">
          <small className="footer-caption alata">&copy; 2021 Loopstudios. All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer