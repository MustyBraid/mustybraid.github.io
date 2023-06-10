import './App.css';
import { projects, navData } from './data';
import { ProjectCard } from './ProjectCard';
import { useRef } from 'react';


function NavElement ({navDatum}) {
  return (
    <li>
      <a href={navDatum.url}>{navDatum.title}</a>
    </li>
  )
}

function App () {

  const cards = projects.map((project) => <ProjectCard key={project.title} project={project} />);
  const links = navData.map((navDatum) => <NavElement key={navDatum.title} navDatum={navDatum} />);

  function unselectCards () {
    cards.forEach((card) => console.log(card));
  }

  return (
    <div>
      <header>
        Casey Chartier
        <nav>
          <ul>
            {links}
          </ul>
        </nav>
      </header>
      <main>
        <div className='cardContainer'>
          {cards}
        </div>
      </main>
      <footer>
        <p>Some text here</p>
      </footer>
    </div>
  );
}

export default App;
