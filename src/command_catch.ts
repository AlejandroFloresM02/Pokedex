import { error } from "node:console";
import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a Pokemon name to catch");
  }

  const name = args[0];
  const res = await state.pokeAPI.fetchPokemon(name);



}
