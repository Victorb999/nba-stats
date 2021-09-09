import axios from "axios";

const date = new Date();
const year = date.getFullYear();
export const api = axios.create({
  baseURL: `https://data.nba.net/10s/prod/v1/${year}/`
});

export const apiBio = axios.create({
  baseURL: `https://data.nba.net/json/bios/`
});
