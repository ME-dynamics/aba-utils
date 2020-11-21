import { i_insert_query } from "../types";
import { separator } from "./constant";
export function insert_query(args: i_insert_query) {
  const { table, version, values } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const columns = [];
  const clmn_values = [];
  for (let index = 0; index < values.length; index++) {
    // eslint-disable-next-line security/detect-object-injection
    const { column, value } = values[index];
    columns.push(column.toLowerCase());
    if (value === "self") {
      clmn_values.push(`:${column.toLowerCase()}`);
    } else if (typeof value === "string") {
      clmn_values.push(`'${value}'`);
    } else if (value === null) {
      clmn_values.push("null");
    } else {
      clmn_values.push(value);
    }
  }
  return `INSERT INTO ${table_name} (${columns.join(
    separator
  )}) VALUES (${clmn_values.join(separator)});`;
}

