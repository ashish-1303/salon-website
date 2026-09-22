export function formatPrice(price: number): string {
  return `$${price}`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = minutes / 60;
  return Number.isInteger(hours) ? `${hours} hr${hours > 1 ? "s" : ""}` : `${Math.floor(hours)} hr ${minutes % 60} min`;
}
