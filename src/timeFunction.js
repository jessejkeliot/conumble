export function getTimeFromFirstConumble() {
  const today = new Date();
  const startDate = new Date("2024-09-17");
  const timeDiff = today.valueOf() - startDate.valueOf(); //in milliseconds
  return timeDiff;
}
