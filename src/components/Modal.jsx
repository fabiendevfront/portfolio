import { useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

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
                                <h2 className="modal__title" id="modal-title">{project.name}</h2>
                                <p className="modal__subtitle">{project.subtitle}</p>
                                <p className="modal__description">{project.description}</p>
                            </div>
                            <div className="modal__details">
                                <h3 className="modal__details-title">Catégories</h3>
                                <div className="modal__details-icon">
                                    {project.categories.map((categorie, index) =>
                                        <Icon key={index} icon={categorie} color="#ffffff" width="35" height="35" />
                                    )}
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