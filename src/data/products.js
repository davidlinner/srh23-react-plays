import ky from "ky";

const BASE_URL = import.meta.env.VITE_API_URL;

const fetchProducts = (limit = 10, skip = 0) => async () => {
    return await ky.get(`${BASE_URL}/products?limit=${limit}&skip=${skip}`).json()
}

export {fetchProducts}