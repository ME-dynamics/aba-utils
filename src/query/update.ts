import { separator, and_str } from "./constant";
import { i_update_query } from "../types";

/**
 * produce query to update row in scylla db
 * @param args
 * @returns a query string
 */
export function update_query(args: i_update_query) {
  const { table, version, values, where, lwt } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const update_info = [];
  const if_clause = lwt ? `IF ${lwt.join(and_str)}` : "";
  for (let index = 0; index < values.length; index++) {
    // eslint-disable-next-line security/detect-object-injection
    const { column, value, self } = values[index];

    if (self) {
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
  )} WHERE ${where.join(and_str)} ${if_clause};`;
}
