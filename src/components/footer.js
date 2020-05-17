import React, { Component } from "react"
import { Link } from "gatsby"

class Footer extends Component {
  render() {
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
                      <Link to="/store">Merch</Link>
                    </li>
                    <li>
                      <a href="https://revilers131.bandcamp.com/">Music</a>
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
                © Copyright {new Date().getFullYear()} All rights reserved.
                Crafted by <a href="https://vincegrilli.dev/">Vince Grilli</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
