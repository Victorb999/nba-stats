import axios from "axios";

export const api = axios.create({
  baseURL: 'http://data.nba.net/10s/prod/v1/2021/'
})