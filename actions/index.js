export const GET_DECKS = "GET_DECKS";

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}
