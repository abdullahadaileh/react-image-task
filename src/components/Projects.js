import React from 'react'

export default function Projects() {
  return (
    <div>
      <section
  id="project_section"
  className="section project"
  aria-labelledby="project-label"
>
  <div className="container">
    <div className="title-wrapper" data-reveal="top">
      <div>
        <h2 className="h2 section-title" id="project-label">
          Latest Projects
        </h2>
        <p className="section-text">
          Check out some of my latest projects with creative ideas.
        </p>
      </div>
      <a
        href="https://github.com/abdullahadaileh"
        className="btn btn-secondary"
      >
        See All Projects
      </a>
    </div>
    <ul className="grid-list">
      <li>
        <div
          className="project-card project-card-2"
          style={{ backgroundColor: "#f1f5fd" }}
        >
          <div className="card-content" data-reveal="right">
            <p className=" card-tag" style={{ color: "#3f78e0" }}>
              Task Management System
            </p>
            <h3 className="h3 card-title">Tasks Buddy</h3>
            <p className="card-text">
              At Tasks Buddy, we harness the power of organization to boost
              productivity. Our dedicated team of developers and productivity
              experts has crafted a tool designed to streamline task management
              and elevate your project experience.
            </p>
            <a
              href="https://samisawalqa.github.io/Task-Managment-group-project/"
              className="btn-text"
              style={{ color: "#3f78e0" }}
            >
              <span className="span">See Project</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true" />
            </a>
          </div>
          <figure className="card-banner" data-reveal="left">
            <img
              src="./images/dashboard.png"
              width={600}
              height={367}
              loading="lazy"
              alt="Web Design"
              className="w-100"
            />
          </figure>
        </div>
        <br />
        <div
          className="project-card project-card-2"
          style={{ backgroundColor: "#f1f5fd" }}
        >
          <div className="card-content" data-reveal="right">
            <p className=" card-tag" style={{ color: "#3f78e0" }}>
              {" "}
              e-commerce site
            </p>
            <h3 className="h3 card-title">Old House</h3>
            <p className="card-text">
              An e-commerce site for selling used household items, featuring
              easy navigation, advanced search, and tools for inventory and
              sales management. It provides a secure and user-friendly
              marketplace for both buyers and sellers.
            </p>
            <a
              href="https://github.com/AbdallahAwaysheh/Old-House"
              className="btn-text"
              style={{ color: "#3f78e0" }}
            >
              <span className="span">See Project</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true" />
            </a>
          </div>
          <figure className="card-banner" data-reveal="left">
            <img
              src="./images/Green Light Brown Clean Grid Nature Video Collage1.png"
              width={600}
              height={367}
              loading="lazy"
              alt="Web Design"
              className="w-100"
            />
          </figure>
        </div>
        <br />
        <div
          className="project-card project-card-2"
          style={{ backgroundColor: "#f1f5fd" }}
        >
          <div className="card-content" data-reveal="right">
            <p className=" card-tag" style={{ color: "#3f78e0" }}>
              {" "}
              e-commerce site
            </p>
            <h3 className="h3 card-title">PlayZone</h3>
            <p className="card-text">
              A dynamic platform that connects sports enthusiasts with top
              indoor and outdoor playing fields. It simplifies the process of
              finding and reserving sports facilities, whether you're a casual
              player or&nbsp;part&nbsp;of&nbsp;a&nbsp;team.
            </p>
            <a
              href="https://github.com/abdullahadaileh/playZone"
              className="btn-text"
              style={{ color: "#3f78e0" }}
            >
              <span className="span">See Project</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true" />
            </a>
          </div>
          <figure className="card-banner" data-reveal="left">
            <img
              src="./images/xcv.PNG"
              width={600}
              height={367}
              loading="lazy"
              alt="Web Design"
              className="w-100"
            />
          </figure>
        </div>
      </li>
      <li>
        <div
          className="project-card project-card-3"
          style={{ backgroundColor: "#f5faf7" }}
        >
          <div className="card-content" data-reveal="left">
            <p className=" card-tag" style={{ color: "#7cb798" }}>
              My Projects
            </p>
            <h3 className="h3 card-title">Missio Theme</h3>
            <p className="card-text">
              Maecenas faucibus mollis interdum sed posuere porta consectetur
              cursus porta lobortis. Scelerisque id ligula felis.
            </p>
            <a
              href="https://github.com/abdullahadaileh"
              className="btn-text"
              style={{ color: "#7cb798" }}
            >
              <span className="span">See Project</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true" />
            </a>
          </div>
          <figure className="card-banner" data-reveal="right">
            <img
              src="./images/Green Light Brown Clean Grid Nature Video Collage.png"
              width={600}
              height={367}
              loading="lazy"
              alt="Web Design"
              className="w-100"
            />
          </figure>
        </div>
      </li>
    </ul>
  </div>
</section>

    </div>
  )
}
