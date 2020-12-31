import { i_insert_query } from "../types";
import { and_str, separator } from "./constant";

/**
 * produce query to insert rows into scylla db
 * @param args
 * @returns an insert query string
 */
export function insert_query(args: i_insert_query) {
  const { table, version, values, lwt } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const columns = [];
  const clmn_values = [];
  const if_clause = lwt ? `IF ${lwt.join(and_str)}` : "";
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
  )}) VALUES (${clmn_values.join(separator)}) ${if_clause};`;
}

