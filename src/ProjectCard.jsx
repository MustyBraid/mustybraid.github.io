import { useRef } from 'react';

export function ProjectCard({ project }) {
    const bigCard = useRef(null);

    function select() {
        if (bigCard.current.className === "bigCard") {
            bigCard.current.classList.replace("bigCard", "bigCardSelected");
        }
    }

    function unselect() {
        console.log("unselecting: ", bigCard.current);
        if (bigCard.current.className === "bigCardSelected") {
            bigCard.current.classList.replace("bigCardSelected", "bigCard");
        }
    }
    return (
        <div className="smallCard" onClick={select}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <div ref={bigCard} className="bigCard">
                <h1>{project.title}</h1>
                <p>{project.descriptionLong}</p>
            </div>
        </div>
    )
}

/* TODO: Figure out to make select and unselect work nicely with React. This may be moving the functions elsewhere, turning them into
props/states, or a secret third option. The current implementation doesn't seem to be working because we can't call unselect from the
app (the parent). */