import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Error404 from "../pages/Error404";
import Animation from "../components/Animation";
import { popUp } from "../utils/animationVariants";

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
                element={<Animation key={location.pathname} style={{ width: "100%" }} variants={popUp} ><Home /></Animation>}
            />
            <Route
                path="/about"
                element={<About />}
            />
            <Route
                path="/portfolio"
                element={<Portfolio />}
            />
            {/* path="*" if the path does not correspond to any route declared above */}
            <Route
                path="*"
                element={<Error404 />}
            />
        </Routes>
    );
};

export default AppRouter;