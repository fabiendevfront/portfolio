import { ColorRing } from  "react-loader-spinner";

const Loader = () => {
    return (
        <div className="loader">
            <ColorRing
                visible={true}
                height="220"
                width="220"
                ariaLabel="blocks-loading"
                colors={["#17B7A1", "#17665C", "#17B7A1", "#17665C", "#17B7A1"]}
            />
        </div>
    );
};

export default Loader;