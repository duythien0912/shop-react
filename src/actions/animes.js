import { normalize } from "normalizr";
import { ANIME_FETCHED, ANIME_CREATED } from "../types";
import api from "../api";
import { animeSchema } from "../schemas";

// data.entities.items
const animeFetched = data => ({
  type: ANIME_FETCHED,
  data
});

const animeCreated = data => ({
  type: ANIME_CREATED,
  data
});

export const fetchAnimes = () => dispatch =>
  api.items
    .fetchAll()
    .then(items =>
      dispatch(animeFetched(normalize(items, [animeSchema])))
    );

export const createAnime = data => dispatch =>
  api.items
    .create(data)
    .then(item =>
      dispatch(animeCreated(normalize(item, animeSchema)))
    );
