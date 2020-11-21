import { separator, and_str } from "./constant";
import { i_select_query } from "../types";

export function select_query(args: i_select_query) {
  const { table, version, columns, distinct, where } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const clause = columns.join(separator).toLowerCase();
  const is_distinct = distinct ? "DISTINCT " : "";
  return `SELECT ${is_distinct}${clause} FROM ${table_name} WHERE ${where.join(
    and_str
  )};`;
}
