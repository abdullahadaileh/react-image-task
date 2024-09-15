import React from 'react'

export default function About() {
  return (
    <div>
      <section id="About_section" className="section about" aria-label="about">
  <div className="container">
    <div className="wrapper">
      <div data-reveal="left">
        <h2 className="h2 section-title">What I Do?</h2>
        <p className="section-text">
          I've worked on projects designing and coding websites that are
          user-friendly, as well as developing mobile applications. I'm
          proficient in languages such as HTML, CSS, JavaScript, PHP, Laravel,
          React, and WordPress."
        </p>
      </div>
      <ul className="progress-list" data-reveal="right">
        <li className="progress-item">
          <div className="label-wrapper">
            <p>HTML, CSS, JavaScript, WordPress</p>
            <span className="span">100 %</span>
          </div>
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: "100%", backgroundColor: "#c7b1dd" }}
            />
          </div>
        </li>
        <li className="progress-item">
          <div className="label-wrapper">
            <p>PHP, Laravel, React</p>
            <span className="span">80 %</span>
          </div>
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: "80%", backgroundColor: "#8caeec" }}
            />
          </div>
        </li>
        <li className="progress-item">
          <div className="label-wrapper">
            <p>SEO</p>
            <span className="span">90 %</span>
          </div>
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: "90%", backgroundColor: "#e3a6b6" }}
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
    </div>
  )
}
