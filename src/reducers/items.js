import { createSelector } from "reselect";
import { ANIME_FETCHED, ANIME_CREATED } from "../types";

export default function items(state = {}, action = {}) {
  switch (action.type) {
    case ANIME_FETCHED:
    case ANIME_CREATED:
      return { ...state, ...action.data.entities.items };
    default:
      return state;
  }
}

// SELECTORS

export const itemsSelector = state => state.items;

export const allItemSelector = createSelector(
  itemsSelector,
  ItemsHash => Object.values(ItemsHash)
);
