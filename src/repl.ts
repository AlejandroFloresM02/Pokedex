export function cleanInput(input: string): string[] {
  return input.trim().toLocaleLowerCase().split(" ");
}
