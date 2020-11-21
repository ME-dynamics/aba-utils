import { separator, and_str } from "./constant";
import { i_update_query } from "../types";

export function update_query(args: i_update_query) {
  const { table, version, values, where } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const update_info = [];
  for (let index = 0; index < values.length; index++) {
    // eslint-disable-next-line security/detect-object-injection
    const { column, value } = values[index];

    if (value === "self") {
      update_info.push(`${column.toLowerCase()} = :${column.toLowerCase()}`);
    } else if (typeof value === "string") {
      update_info.push(`${column.toLowerCase()} = '${value}'`);
    } else if (value === null) {
      update_info.push(`${column.toLowerCase()} = null`);
    } else {
      update_info.push(`${column.toLowerCase()} = ${value}`);
    }
  }
  return `UPDATE ${table_name} SET ${update_info.join(
    separator
  )} WHERE ${where.join(and_str)};`;
}
