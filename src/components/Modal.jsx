import { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Modal component
 *
 * @component
 * @param {Object} props - Component props
 * @param {function} props.hideModal - Function to hide modal
 * @param {string} [props.title] - Title of modal
 * @param {node} props.children - Content to display inside modal
 * @param {bool} [props.darkMode] - Whether to display modal in dark mode
 * @param {string} [props.closeBtnContainerColor] - Background color for close button
 * @returns {JSX.Element}
 */
const Modal = (props) => {

    // Close btn custom style
    const btnModalStyle = {
        backgroundColor: props.closeBtnContainerColor || ""
    };

    // Event Listener for close modal with escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                props.hideModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [props]);


    return (
        <div
            className="modal"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div className="modal__overlay" onClick={props.hideModal}>
                <div
                    className={`modal__container ${props.darkMode ? "modal__container--dark" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal__wrapper">
                        <div className="modal__head">
                            <span
                                className="modal__close-btn"
                                onClick={props.hideModal}
                                style={btnModalStyle}
                                aria-label="Close modal"
                                role="button"
                                tabIndex="0"
                            ></span>
                            {props.title &&
                                <h2 className="modal__title" id="modal-title">{props.title}</h2>
                            }
                        </div>
                        <div className="modal__content" id="modal-description">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    hideModal: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    darkMode: PropTypes.bool,
    closeBtnContainerColor: PropTypes.string
};

export default Modal;