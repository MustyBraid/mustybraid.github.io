import './App.css';

const projects = [
  {title: "First Project", description: "This is the first project", image: ""},
  {title: "Second Project", description: "This is the second project", image: ""},
  {title: "Third Project", description: "This is the third project", image: ""},
  {title: "Fourth Project", description: "This is the fourth project", image: ""},
]

function ProjectCards() {
  const cards = projects.map(project =>
    <card className="card">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </card>)
  return (
    <div className='cardContainer'>
      {cards}
    </div>
  )    
}

function App() {
  return (
    <div>
      <header>
        Casey Chartier
        <nav>
            <li>
              <a href="https://github.com/MustyBraid">Github</a>
              <a href="https://www.linkedin.com/in/casey-chartier-313b/">LinkedIn</a>
            </li>
        </nav>
      </header>
      <body>
        <ProjectCards />
      </body>
      <footer>
        <p>Some text here</p>
      </footer>
    </div>
  );
}

export default App;
