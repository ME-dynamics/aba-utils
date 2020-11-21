import { i_delete_query } from "../types";
import { separator, and_str } from "./constant";

export function delete_query(args: i_delete_query) {
  const { table, version, columns, where } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const delete_columns = columns ? ` ${columns.join(separator)}` : "";
  return `DELETE${delete_columns.toLowerCase()} FROM ${table_name} WHERE ${where.join(
    and_str
  )};`;
}
