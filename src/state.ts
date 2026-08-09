import { createInterface, type Interface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { PokeAPI } from "./pokeapi.js";
import { commandMapb } from "./command_mapb.js";
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

  const commands = {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the location map",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previos location map",
      callback: commandMapb,
    }
  };
  const pokeAPI = new PokeAPI();
  const state: State = {
    readline: rl,
    commands: commands,
    pokeAPI: pokeAPI,
    prevLocationsURL: null,
    nextLocationURL: undefined,
  };
  return state;
}
