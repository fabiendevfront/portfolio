import { useState, useEffect } from "react";
import { useFetch } from "../services/useFetch.jsx";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const Work = () => {
    const [workData, setWorkData] = useState();
    const params = useParams();
    const { data, loading, error } = useFetch("/data/works.json");

    useEffect(() => {
        const getCurrentWork = () => {
            if (data && !loading) {
                const workFilter = data.filter(work => work.id === params.id)[0];
                if (workFilter) {
                    setWorkData(workFilter);
                    console.log(workFilter);
                } else {
                    return;
                }
            }
        };
        getCurrentWork();
    }, [data, loading, params]);


    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : workData ? (
                <section className="work wrapper">
                    <div className="work__head">
                        <img src={"/src/assets/images/works/thumbnails/" + workData.thumbnail} alt="Thumbnail du projet" className="portfolio-card__thumbnail" />
                        <h2 className="work__title">{workData.name}</h2>
                        <p className="work__subtitle">{workData.subtitle}</p>
                        <p className="work__description">{workData.description}</p>
                        <div className="work__icon">
                            {workData.categories.map((categorie, index) =>
                                <Icon key={index} icon={categorie} color="#ffffff" width="30" height="30" />
                            )}
                        </div>
                    </div>
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Work;