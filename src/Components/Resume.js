import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        const points = work.description.split("-");

        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <ul>
              {points.map((point, i) => {
                return (
                  <li key={i}>
                    <span>&bull;</span> {point}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });

      var projects = this.props.data.projects.map(function (project) {
        const points = project.description.split("-");

        return (
          <div key={project.name}>
            <h3>{project.name}</h3>
            <p className="info">
              <em className="date">{project.years}</em>
            </p>
            <ul>
              {points.map((point, i) => {
                return (
                  <li key={i}>
                    <span>&bull;</span> {point}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });

      function importAll(r) {
        return r.keys().map(r);
      }
      const images = importAll(
        require.context(
          "../../public/images/technologies",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      var skills = images.map(function (image) {
        return <img key={image} src={image} />;
      });

      // var skills = this.props.data.skills.map(function (skills) {
      //   var className = "bar-expand " + skills.name.toLowerCase();
      //   return (
      //     <li key={skills.name}>
      //       <span style={{ width: skills.level }} className={className}></span>
      //       <em>{skills.name}</em>
      //     </li>
      //   );
      // });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Projects</span>
            </h1>
          </div>

          <div className="nine columns main-col">{projects}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Technologies</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
