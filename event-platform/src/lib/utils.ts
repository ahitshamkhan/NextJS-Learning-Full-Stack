// Utility/helper functions go here
// Keep pure functions that can be reused across the app

export function formatDateTime(dateString: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export function formatPrice(price: string): string {
  const amount = parseFloat(price);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Construct a URL query string from an object of params.
 */
export function buildQueryString(params: Record<string, string>): string {
  return new URLSearchParams(params).toString();
}
