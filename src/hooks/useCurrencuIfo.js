import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((info) => {
                if (info && info[currency]) {
                    setData(info[currency]);
                } else {
                    setData({});
                }
            })
            .catch((error) => {
                console.error("Error fetching currency info:", error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
