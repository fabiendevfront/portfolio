import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = (url, reverse = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!url || url === null) {
            navigate("/error404");
            return;
        }

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
    }, [url, navigate, reverse]);

    return { data, loading, error };
};