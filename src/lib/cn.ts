type Value = string | number | false | null | undefined;
export function cn(...inputs: Value[]) {
  return inputs.filter(Boolean).join(" ");
}
