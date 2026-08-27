import { State } from "./state.js";


export async function commandInspect (state: State , ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a Pokemon name to inspect");
  }

  const name = args[0];
  if (!(name in state.caughtPokemon)) {
    console.log("you have not caught that pokemon");
    return;
  }

  const caughtPokemon = state.caughtPokemon[name];
  console.log(`Name: ${caughtPokemon.name}`);
  console.log(`Height: ${caughtPokemon.height}`);
  console.log(`Weight: ${ caughtPokemon.weight }`);
  console.log("Stats:");
  for (const stat of caughtPokemon.stats) {
    console.log(` - ${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of caughtPokemon.types) {
    console.log(` - ${type.type.name}`);
  }
}
