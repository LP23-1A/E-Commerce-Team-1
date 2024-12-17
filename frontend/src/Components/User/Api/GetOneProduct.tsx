import axios from "axios";

export async function fetchOneProduct(id: any) {
  const selectedProductAPI = `http://localhost:8000/product/getOne/${id}`;
  try {
    const response = await axios.get(selectedProductAPI);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
