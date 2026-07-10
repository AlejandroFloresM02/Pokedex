import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

import type { CLICommand } from "./command.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    // cad add more commands here
  };
}
