import { useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

/**
 * Modal component
 *
 * @component
 * @param {Object} props - Component props
 * @param {function} props.hideModal - Function to hide modal
 * @returns {JSX.Element}
 */
const Modal = ({ hideModal, project }) => {

    // Event Listener for close modal with escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                hideModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [hideModal]);


    return (
        <div
            className="modal"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div className="modal__overlay" onClick={hideModal}>
                <div className="modal__box">
                    <div className="modal__container" onClick={(e) => e.stopPropagation()} id="modal-description">
                        <div className="modal__head">
                            <img src={"/src/assets/images/works/thumbnails/" + project.thumbnail} alt="Thumbnail du projet" className="modal__thumbnail" />
                        </div>
                        <div className="modal__content">
                            <div className="modal__text">
                                <h2 className="modal__text-title" id="modal-title">{project.name}</h2>
                                <p className="modal__text-subtitle">{project.subtitle}</p>
                                <p className="modal__text-description">{parse(project.description)}</p>
                                {project.skills ? (
                                    <div className="modal__text-skills">
                                        <p>Compétences:</p>
                                        <ul>
                                            {project.skills.map((skill, index) =>
                                                <li key={index}>{skill}</li>
                                            )}
                                        </ul>
                                    </div>
                                ) : ""}
                            </div>
                            <div className="modal__details">
                                <div className="modal__categories">
                                    <h3 className="modal__categories-title">Technologies</h3>
                                    <div className="modal__categories-icon">
                                        {project.technologies.map((technology, index) =>
                                            <Icon key={index} icon={technology} color="#ffffff" width="35" height="35" />
                                        )}
                                    </div>
                                </div>
                                <div className="modal__links">
                                    <h3 className="modal__links-title">Voir le projet</h3>
                                    {project.url ? (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="modal__links-btn btn btn--link-demo">Demo <Icon icon="mdi:web" color="#ffffff" width="30" height="30" /></a>
                                    ) : ""}
                                    {project.gitlab ? (
                                        <a href={project.gitlab} target="_blank" rel="noopener noreferrer" className="modal__links-btn btn btn--link-gitlab">Code  <Icon icon="skill-icons:gitlab-light" color="#ffffff" width="30" height="30" /></a>
                                    ): ""}
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal__links-btn btn btn--link-github">Code  <Icon icon="skill-icons:github-dark" color="#ffffff" width="30" height="30" /></a>
                                    ): ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <span
                        className="modal__close-btn"
                        onClick={hideModal}
                        aria-label="Close modal"
                        role="button"
                        tabIndex="0"
                    ></span>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    hideModal: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

export default Modal;