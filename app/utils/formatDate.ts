// utils/formatDate.ts
export function formatDateString(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleString("en-AU", {
    year: "numeric",
    month: "short",   // "Aug"
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Australia/Sydney",   // lock to AEST/AEDT
    timeZoneName: "short",          // shows "AEST" or "AEDT"
  });
}
