import { RotatingLines } from  "react-loader-spinner";

/**
* Component for Loader
* @component
* @returns {JSX.Element}
*/
const Loader = () => {
    return (
        <div className="loader">
            <RotatingLines
                strokeColor="#17B7A1"
                strokeWidth="5"
                animationDuration="0.75"
                width="220"
                visible={true}
                ariaLabel="blocks-loading"
            />
        </div>
    );
};

export default Loader;