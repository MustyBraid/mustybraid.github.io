import { useRef } from 'react';

export function ProjectCard({ project }) {
    const bigCard = useRef(null);
    const closeButton = useRef(null);

    function select(e) {
        e.stopPropagation();
        if (bigCard.current.className === "bigCard") {
            bigCard.current.classList.replace("bigCard", "bigCardSelected");
            closeButton.current.classList.toggle("hide");
        }
    }

    function unselect(e) {
        e.stopPropagation();
        // console.log("unselecting: ", bigCard.current);
        if (bigCard.current.classList.contains("bigCardSelected")) {
            bigCard.current.classList.replace("bigCardSelected", "bigCard");
        }
        closeButton.current.classList.toggle("hide");
    }
    return (
        <div className="smallCard" onClick={select}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div ref={closeButton} className="closeButtonDiv hide" onClick={unselect}>
            </div>
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