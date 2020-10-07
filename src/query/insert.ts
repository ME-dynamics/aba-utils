import { IInsertQuery } from "../types";
import { separator } from "./constant";
export function insert(args: IInsertQuery) {
  const { table, version, values } = args;
  const tableName = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const columns = [];
  const clmnValues = [];
  for (let index = 0; index < values.length; index++) {
    const { column, value } = values[index];
    columns.push(column);
    if (value === "self") {
      clmnValues.push(`:${column}`);
    } else if (typeof value === "string") {
      clmnValues.push(`'${value}'`);
    } else if (value === null) {
      clmnValues.push("null");
    } else {
      clmnValues.push(value);
    }
  }
  return `INSERT INTO ${tableName} (${columns.join(
    separator
  )}) VALUES (${clmnValues.join(separator)});`;
}

