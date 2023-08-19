import HeroBanner from "../components/HeroBanner";

/**
* Component for Homepage
* @component
* @returns {JSX.Element}
*/
const Home = () => {
    return (
        <div className="home wrapper">
            <div className="home__hero">
                <HeroBanner/>
            </div>
        </div>
    );
};

export default Home;