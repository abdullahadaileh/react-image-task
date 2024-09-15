import React from 'react'

export default function Hero() {
  return (
    <div>
      <section id="hero_section" className="section hero" aria-label="home">
  <div className="container">
    <figure className="hero-banner">
      <img
        src="./images/WhatsApp Image 2024-05-05 at 23.33.11_c88fa655.jpg"
        width={560}
        height={540}
        alt="me"
        className="w-100"
        id="porimage"
        data-reveal="top"
      />
    </figure>
    <div className="hero-content">
      <h1 className="h1 hero-title" data-reveal="top" data-reveal-delay="0.5s">
        I'm Full stack developer.
      </h1>
      <p className="section-text" data-reveal="top" data-reveal-delay="0.75s">
        I've worked on projects designing and coding websites that are
        user-friendly
      </p>
      <div className="btn-wrapper" data-reveal="top" data-reveal-delay="1s">
        <a
          href="https://github.com/abdullahadaileh"
          className="btn btn-primary"
        >
          See My Works
        </a>
        <a
          href="mailto:abdullahadaileh957@egmail.com"
          className="btn btn-secondary"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
