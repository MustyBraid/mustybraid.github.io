import './App.css';

const projects = [
  {title: "First Project", description: "This is the first project", image: "", descriptionLong: "This is the first project, you currently have it selected"},
  {title: "Second Project", description: "This is the second project", image: "", descriptionLong: "This is the second project, you currently have it selected"},
  {title: "Third Project", description: "This is the third project", image: "", descriptionLong: "This is the third project, you currently have it selected"},
  {title: "Fourth Project", description: "This is the fourth project", image: "", descriptionLong: "This is the fourth project, you currently have it selected"},
]

function MakeProjectCards() {
  const cards = projects.map((project, index) =>
      <div key={project.title} className="smallCard" i={index} onClick={selectCard}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        
        <div className="bigCard">
          <h1>{project.title}</h1>
          <p>{project.descriptionLong}</p>
        </div>
      </div>
    )
  return (
    <div className='cardContainer'>
      {cards}
    </div>
  )
}

function selectCard (e) {
  let youClicked = e.currentTarget;
  let childArr = Array.from(youClicked.children);
  let myBigCard = childArr.filter(el => el.className === "bigCard")[0];
  if(!myBigCard) return;
  makeFullScreen(myBigCard);
}

function makeFullScreen (card) {
  card.classList.replace("bigCard", "bigCardSelected");
}

function App () {
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
      <main>
        <MakeProjectCards />
      </main>
      <footer>
        <p>Some text here</p>
      </footer>
    </div>
  );
}

export default App;
