import type { State } from "./state.js";

export async function commandPokedex(state: State) {
  for (const pokemon in state.caughtPokemon) {
    console.log(`- ${pokemon}`);
  }
}
