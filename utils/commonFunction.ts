export const taskDate = (dateMilli: number | string) => {
  var d = (new Date(dateMilli) + "").split(" ");
  d[2] = d[2] + ",";

  return [d[0], d[1], d[2], d[3]].join(" ");
};
