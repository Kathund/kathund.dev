export function randomCase(str: string): string {
  return str.replace(/[a-z]/gi, (char) => (Math.random() < 0.5 ? char.toLowerCase() : char.toUpperCase()));
}
