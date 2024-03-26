import axios from "axios";

const FETCH_ALL_PRODUCTS = "http://localhost:8000/product/get";

export const FetchAllProducts = async () => {
    try {
        const response = await axios.get(FETCH_ALL_PRODUCTS);
        return response.data
    } catch (error) {
        console.error(error);
    }
}