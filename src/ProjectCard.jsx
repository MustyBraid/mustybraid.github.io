import { useRef } from 'react';

export function ProjectCard({ project }) {
    const bigCard = useRef(null);
    const closeButton = useRef(null);
    const smallCard = useRef(null)



    function select(e) {
        e.stopPropagation();

        if (bigCard.current.classList.contains("selected")) return;
        //get small card bounding rect
        let coord = smallCard.current.getBoundingClientRect();
        //give those coordinates to big card
        bigCard.current.style.left = `${coord.x}px`;
        bigCard.current.style.top = `${coord.y}px`;
        bigCard.current.style.height = `${coord.height}px`;
        bigCard.current.style.width = `${coord.width}px`;
        //toggle small card visibility off
        smallCard.current.classList.toggle("invisible");
        //unhide big card (absolutely positioned where smallcard was)
        bigCard.current.classList.toggle("hide");
        //background fades in as big card expands
        closeButton.current.classList.toggle("transparent");
        closeButton.current.classList.toggle("invisible");
        //timeouts separate changes so they transition properly
        setTimeout(() => {
            bigCard.current.classList.toggle("selected");
            bigCard.current.style.left = `10vw`;
            bigCard.current.style.top = `10vh`;
            bigCard.current.style.height = `80vh`;
            bigCard.current.style.width = `80vw`;
        }, 100);

    }

    function unselect(e) {
        e.stopPropagation();

        if (bigCard.current.classList.contains("selected")) {
            bigCard.current.classList.toggle("selected")
            //get small card bounding rect
            let coord = smallCard.current.getBoundingClientRect();
            //give those coordinates to big card
            bigCard.current.style.left = `${coord.x}px`;
            bigCard.current.style.top = `${coord.y}px`;
            bigCard.current.style.height = `${coord.height}px`;
            bigCard.current.style.width = `${coord.width}px`;
            closeButton.current.classList.toggle("transparent");
            //timeouts separate changes so they transition properly
            setTimeout(() => {
                bigCard.current.classList.toggle("hide");
                smallCard.current.classList.toggle("invisible");
                closeButton.current.classList.toggle("invisible");
            }, 1000);
        }
    }

    return (
        <div className='projectCard' onClick={select}>
            <div ref={smallCard} className="smallCard">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
            <div ref={closeButton} className="closeButtonDiv transparent invisible" onClick={unselect}>
            </div>
            <div ref={bigCard} className="bigCard hide">
                <h1>{project.title}</h1>
                <p>{project.descriptionLong}</p>
            </div>
        </div>
    )
}