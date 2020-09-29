export function normalizeReference(str: string) {
  return str.trim().replace(/\s+/g, ' ').toUpperCase();
};
