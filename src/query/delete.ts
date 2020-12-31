import { i_delete_query } from "../types";
import { separator, and_str } from "./constant";


/**
 ** builds delete query for deleting rows 
 * @param args an object containing table name, version, columns, and where clause
 * lwt clause, an array of string usually filled with operators for LWT in scylla db
 * @returns delete query string
 */
export function delete_query(args: i_delete_query) {
  const { table, version, columns, where, lwt } = args;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const delete_columns = columns ? ` ${columns.join(separator)}` : "";
  const if_clause = lwt ? `IF ${lwt.join(and_str)}`: "";
  return `DELETE${delete_columns.toLowerCase()} FROM ${table_name} WHERE ${where.join(
    and_str
  )} ${if_clause};`;
}
