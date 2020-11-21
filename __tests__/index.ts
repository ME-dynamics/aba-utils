import { select } from "../build";

console.log(
  select({
    columns: ["sds"],
    distinct: false,
    table: "sdds",
    version: "sd",
    where: ["sd"],
  })
);
