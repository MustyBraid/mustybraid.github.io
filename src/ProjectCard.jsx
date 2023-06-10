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