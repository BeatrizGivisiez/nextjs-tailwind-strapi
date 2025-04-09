import { DateTime } from "luxon";

export const formatDateInPortuguese = (dateString: string): string => {
  const formattedDate = DateTime.fromISO(dateString)
    .setLocale("pt") // Set locale to Portuguese
    .toLocaleString({
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return formattedDate;
};

export const formatDateInShortPortuguese = (dateString: string): string => {
  const formattedDate = DateTime.fromISO(dateString)
    .setLocale("pt") // Set locale to Portuguese
    .toLocaleString({
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return formattedDate;
};
