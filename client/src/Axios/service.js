import axiosInstance from "./axios";

export const getdata = async (values) => {
  try {
    // Making a POST request to admin login endpoint with provided values
    return await axiosInstance("").get(`table/${values}`);
  } catch (error) {
    // Logging the error and returning it in case of an exception
    console.log(error);
    return error;
  }
};
