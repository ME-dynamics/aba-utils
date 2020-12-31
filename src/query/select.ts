import { separator, and_str } from "./constant";
import { i_select_query } from "../types";

/**
 ** builds select query for scylla db
 * @param args an object containing select arguments
 * @returns a query string
 */

export function select_query(args: i_select_query) {
  const {
    table,
    version,
    columns,
    distinct,
    where,
    order_by,
    limit,
    allow_filtering,
  } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const clause = columns.join(separator).toLowerCase();
  const is_distinct = distinct ? "DISTINCT " : "";
  return `SELECT ${is_distinct}${clause} FROM ${table_name} WHERE ${where.join(
    and_str
  )} ${limit ? `LIMIT ${limit}` : ""}  ${order_by ? `ORDER BY ${order_by.key}` : ""} ${order_by ? order_by.type : ""}  
  ${allow_filtering ? "ALLOW FILTERING" : ""};`;
}