import { State } from "./state.js";

export async function commandMap(state: State) {
  if (state.nextLocationURL === null) {
    console.log("No more locations to display.");
    return;
  }

  const response = await state.pokeAPI.fetchLocations(state.nextLocationURL);

  for (const location of response.results) {
    console.log(location.name);
  }

  state.nextLocationURL = response.next;
  state.prevLocationsURL = response.previous;
}
