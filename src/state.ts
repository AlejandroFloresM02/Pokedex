import { createInterface, type Interface } from "readline";
import { PokeAPI } from "./pokeapi.js";
import { getCommands } from "./commands.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationURL: string | null | undefined;
  prevLocationsURL: string | null;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    readline: rl,
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    prevLocationsURL: null,
    nextLocationURL: undefined,
  };

}
