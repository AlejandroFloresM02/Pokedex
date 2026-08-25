import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a Pokemon name to catch");
  }
  const name = args[0];
  const pokemon = await state.pokeAPI.fetchPokemon(name);

  const K = 25;

  const experience = Math.max(pokemon.base_experience ?? 1, 1);
  const caugthChance = K / experience;
  console.log(`Throwing a Pokeball at ${name}...`);

  if (Math.random() > caugthChance) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }
  console.log(`${pokemon.name} was caught!`);
  state.pokedex[name] = pokemon;
}
