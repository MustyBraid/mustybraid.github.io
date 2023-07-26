import './App.css';
import { projects, navData } from './data';
import { ProjectCard } from './ProjectCard';


function NavElement ({navDatum}) {
  return (
    <li>
      <a href={navDatum.url}>{navDatum.title}</a>
    </li>
  )
}

function App () {

  const cards = projects.map(
    (project, index) => {
      if (projects.length % 2 !== 0) {
        if (index === projects.length - 1) {
          return <ProjectCard key={project.title} project={project} isLast={true} />;
        }
        else {
          return <ProjectCard key={project.title} project={project} isLast={false} />
        }
      }
      else {return <ProjectCard key={project.title} project={project} isLast={false} />;
      }
    }
  );
  

  const links = navData.map((navDatum) => <NavElement key={navDatum.title} navDatum={navDatum} />);

  function unselectCards () {
    cards.forEach((card) => console.log(card));
  }

  return (
    <>
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
    </>
  );
}

export default App;
