import HeroBanner from "../components/HeroBanner";
import mountainCover from "../assets/images/mountain.png";

const Home = () => {
    return (
        <div className="home">
            <div className="home__hero">
                <HeroBanner/>
            </div>
            <div className="home__cover">
                <img src={mountainCover} alt="Image de couverture montagnes" />
            </div>
        </div>
    );
};

export default Home;