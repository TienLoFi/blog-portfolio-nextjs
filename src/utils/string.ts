import { formatIncompletePhoneNumber } from "libphonenumber-js";

export function decodeEmail(email: string) {
  return email.replace(/\s+\[at\]\s+/g, "@").replace(/\s+\[dot\]\s+/g, ".");
}

export function decodePhoneNumber(phone: string) {
  return phone;
}

export function formatPhoneNumber(phone: string) {
  return formatIncompletePhoneNumber(phone);
}
