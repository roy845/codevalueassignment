export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
};

export const formatDateAsLocal = (date: Date): string => {
  return date.toISOString();
};
