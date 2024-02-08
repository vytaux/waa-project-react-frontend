import { useEffect, useState } from "react";
import axios from "../config/Api";

const useFetch = (url, accessToken) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get(url, {headers: {Authorization: "Bearer " + accessToken}})
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }, [url, accessToken, refresh]);

    return {data, error, isLoading, setRefresh};
}

export default useFetch;