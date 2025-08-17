import React from 'react';

const projects = [
  { 
    title: 'Portfolio Website', 
    description: 'A responsive personal portfolio built with React and Bootstrap to showcase my skills, projects, and experience.', 
    link: 'https://eclectic-figolla-600e66.netlify.app' 
  },
  { 
    title: 'Chidiya Udd Game', 
    description: 'An interactive reflex game where players quickly decide if the object shown can fly or not.', 
    link: 'https://inspiring-torte-4cd922.netlify.app' 
  },
  { 
    title: 'Rock Paper Scissors (Advanced)', 
    description: 'An upgraded Rock-Paper-Scissors game with extra moves, score tracking, and engaging UI animations.', 
    link: 'https://amazing-melomakarona-33f58e.netlify.app' 
  },
  { 
    title: 'Quiz App', 
    description: 'A dynamic quiz application with multiple categories, a countdown timer, and score tracking system.', 
    link: 'https://gilded-cuchufli-d6718e.netlify.app' 
  },
];

export default function Projects() {
  return (
    <section className="my-5 container">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100 border-0 rounded-3">
              <div className="card-body">
                <h5 className="card-title fw-bold">{proj.title}</h5>
                <p className="card-text text-muted">{proj.description}</p>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary mt-3"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
