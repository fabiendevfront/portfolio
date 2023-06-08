import { useFetch } from "../services/useFetch.jsx";

const Portfolio = () => {
    const { data, loading, error } = useFetch("/data/works.json");
    console.log(data);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : data ? (
                <section className="portfolio">
                    <div className="portfolio__head">
                        <div className="portfolio__container">
                            <h2 className="portfolio__title">Mes réalisations</h2>
                            <p className="portfolio__subtitle">Vous retrouverez ci-dessous mes réalisations en développement web</p>
                        </div>
                    </div>

                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Portfolio;