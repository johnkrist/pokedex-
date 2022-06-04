import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/";
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {},
});

export function clearBaseURL(url) {
  const newUrl = url.replace(BASE_URL, "");
  return newUrl;
}
export function pokemons() {}
