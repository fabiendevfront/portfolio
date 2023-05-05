import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MyWorks from "../pages/MyWorks";
import Work from "../pages/Work";
import Error404 from "../pages/Error404";

/**
* AppRouter component manage routing in app, that renders different routes and corresponding components.
* @component
* @returns {JSX.Element}
*/
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<MyWorks />} />
            <Route path="/work/:id" element={<Work />} />
            {/* path="*" if the path does not correspond to any route declared above */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRouter;