import React from "react"
import { Link } from "gatsby"

import logo from "../images/btc-logo.png"

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer_inner">
        <div className="container">
          <div className="footer-widget footer-content">
            <section id="nav_menu-8" className="widget widget_nav_menu">
              <div className="menu-main-container">
                <ul id="menu-main" className="menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blogs">News</Link>
                  </li>
                  <li>
                    <a href="https://www.audioepidemic.net/">Merch</a>
                  </li>
                  <li>
                    <a href="https://deadlowpunk.bandcamp.com/">Bandcamp</a>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="footer-bottom social-right-menu ">
            <div className="site-info">
              © Copyright {new Date().getFullYear()} All rights reserved. Site
              crafted by{" "}
              <a href="https://www.builttocode.dev">
                <img
                  style={{
                    maxWidth: `6rem`,
                    margin: 0,
                  }}
                  src={logo}
                  alt="Built to Code"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
