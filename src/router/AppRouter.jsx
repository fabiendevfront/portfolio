import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Work from "../pages/Work";
import Error404 from "../pages/Error404";
import Animation from "../components/Animation";
import { popUp, slideLeft } from "../utils/animationVariants";

/**
* AppRouter component manage routing in app, that renders different routes and corresponding components.
* @component
* @returns {JSX.Element}
*/
const AppRouter = () => {
    const location = useLocation();

    return (
        <Routes>
            <Route
                path="/"
                element={<Animation key={location.pathname} variants={popUp}><Home /></Animation>}
            />
            <Route
                path="/about"
                element={<Animation key={location.pathname} variants={slideLeft}><About /></Animation>}
            />
            <Route
                path="/skills"
                element={<Animation key={location.pathname} variants={slideLeft}><Skills /></Animation>}
            />
            <Route
                path="/portfolio"
                element={<Portfolio />}
            />
            <Route
                path="/contact"
                element={<Animation key={location.pathname} variants={slideLeft}><Contact /></Animation>}
            />
            <Route
                path="/work/:id"
                element={<Animation key={location.pathname} variants={slideLeft}><Work /></Animation>}
            />
            {/* path="*" if the path does not correspond to any route declared above */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRouter;