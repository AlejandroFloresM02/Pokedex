import { State } from "./state.js";

export async function commandMapForward(state: State) {
  if (state.nextLocationURL === null) {
    console.log("No more locations to display.");
    return;
  }

  const locations = await state.pokeAPI.fetchLocations(state.nextLocationURL);

  state.nextLocationURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const location of locations.results) {
    console.log(location.name);
  }
}

export async function commandMapBack(state: State){
  if (state.prevLocationsURL === null) {
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  state.nextLocationURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const location of locations.results) {
    console.log(location.name);
  }

}
