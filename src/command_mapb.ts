/*Add the mapb (map back) command. It's
similar to the map command, however, instead of displaying
the next 20 locations, it displays the
previous 20 locations. It's a way to go back.*/

import { State } from "./state.js";

export async function commandMapb(state: State){
  if (state.prevLocationsURL === null) {
    console.log("no previos map has been displayed yet.");
    return
  }

  const response = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  for (const location of response.results) {
    console.log(location.name);
  }
  state.nextLocationURL = response.next;
  state.prevLocationsURL = response.previous;
}
