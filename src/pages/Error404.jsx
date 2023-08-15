import LinkButton from "../components/LinkButton";

/**
* Component for Error404
* @component
* @returns {JSX.Element}
*/
const Error404 = () => {
    return (
        <div className="error-404">
            <h2 className="error-404__title">Oups ! La page demandée n'existe pas</h2>
            <LinkButton btnLink="/" btnStyle="error-404__btn btn btn--link" label="Aller à la page d'accueil" />
        </div>
    );
};

export default Error404;