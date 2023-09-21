import axios from "axios";

let baseURL;
const localApi = process.env.REACT_APP_AUTH_API_URL;
if (process.env.NODE_ENV === "production") {
  baseURL = process.env.REACT_APP_API;
} else if (process.env.NODE_ENV === "development") {
  baseURL = process.env.REACT_APP_AUTH_API_URL;
}
export const api = axios.create({
  baseURL,
});

export const apiUrl = {
  localApi,
};
