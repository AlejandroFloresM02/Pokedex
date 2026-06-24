import { createInterface } from "readline";

export function startRepl() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    words.length === 0
      ? rl.prompt()
      : console.log(`Your command was: ${words[0]}`);
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLocaleLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
