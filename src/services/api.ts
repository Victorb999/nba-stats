import axios from "axios";

const date = new Date();
const year = date.getFullYear();
export const api = axios.create({
  baseURL: `http://data.nba.net/10s/prod/v1/${year}/`
})