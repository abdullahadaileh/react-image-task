import React from 'react'

export default function Nav() {
  return (
    <div>
            <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <h3>Abdallah</h3>
          </a>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <h3>Abdallah</h3>
              </a>

              <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <a href="#hero_section" className="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#About_section" className="navbar-link">
                  About
                </a>
              </li>
              <li>
                <a href="#project_section" className="navbar-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact_section" className="navbar-link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="wrapper">
              <a href="mailto:abdullahadaileh957@gmail.com" className="contact-link">
                abdullahadaileh957@gmail.com
              </a>
              <a href="tel:+962781075450" className="contact-link">
                +962781075450
              </a>
            </div>

            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/in/abdallah-adailah-9bb1aa308" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://x.com/AbdullahAdaile0" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://github.com/abdullahadaileh" className="social-link">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/a7____05" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
            </ul>
          </nav>

          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </div>
  )
}
