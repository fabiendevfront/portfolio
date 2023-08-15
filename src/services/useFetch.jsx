import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
* A custom hook for fetching data from a specified URL.
*
* @function
* @param {string} url - Url of Data.
* @param {boolean} reverse - If data should be reversed or not.
* @returns {{ data: object | null, loading: boolean, error: boolean, loadingComplete: boolean }} - Returns object with data, loading, status of loading and error.
*/
export const useFetch = (url, reverse = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [loadingComplete, setLoadingComplete] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the URL is empty or null, navigate to error page if so
        if (!url || url === null) {
            navigate("/error404");
            return;
        }

        // Fetch data from the specified URL
        const getData = async () => {
            try {
                const response = await fetch(url);
                const dataJSON = await response.json();
                const finalData = reverse ? dataJSON.reverse() : dataJSON;
                setData(finalData);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getData();

        // Set loading completion status based on loading and error states
        setLoadingComplete(!loading && !error);

    }, [url, navigate, reverse, loading, error]);

    return { data, loading, error, loadingComplete };
};