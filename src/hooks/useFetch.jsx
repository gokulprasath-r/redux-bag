import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch(url);
                const json = await res.json();
                const filteredData = json.products.map((item) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    images: item.images[0],
                    description: item.description,
                    category: item.category,
                    brand: item.brand,
                    reviews: item.reviews,
                    rating:item.rating
                }));
                setData(filteredData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
