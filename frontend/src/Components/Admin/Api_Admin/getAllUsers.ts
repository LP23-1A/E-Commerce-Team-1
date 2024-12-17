import axios from "axios";

const GET_ALL_Admin = "http://localhost:8000/user/getAllUsers";

export const fetchAllAdmins = async () => {
  try {
    const response = await axios.get(GET_ALL_Admin);
    return response.data;
  } catch (error) {
    console.error("cannot fetch data", error);
    throw error;
  }
};
