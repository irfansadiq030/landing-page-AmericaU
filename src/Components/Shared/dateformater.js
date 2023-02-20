export const formateDate = (dateNumbers) => {
  if (!dateNumbers) return "Add date";

  return new Date(dateNumbers * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
