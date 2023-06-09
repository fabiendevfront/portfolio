import { useFetch } from "../services/useFetch.jsx";
import PortfolioCard from "../components/PortfolioCard.jsx";

const Portfolio = () => {
    const { data, loading, error } = useFetch("/data/works.json", true);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : data ? (
                <section className="portfolio wrapper wrapper--pages">
                    <div className="portfolio__head">
                        <h2 className="portfolio__title">Mes réalisations</h2>
                        <p className="portfolio__subtitle">Vous retrouverez ci-dessous mes réalisations, cliquez dessus pour plus de détails.</p>
                    </div>
                    <div className="portfolio__works">
                        {data.map((work) =>
                            <PortfolioCard key={work.id} id={work.id} thumbnail={work.thumbnail} name={work.name} categories={work.categories} />
                        )}
                    </div>
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Portfolio;