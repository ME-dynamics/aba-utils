import { column_stringify } from "./column_stringify";
import { primary_key_stringify } from "./primary_key_stringify";
import { i_create_table, i_query } from "../types";

/**
 ** builds a create table query for scylla db, it checks if table exists
 * @param args an object containing table name, version, columns, and primary key
 * @returns an object containing table name, and query string
 */
export function create_table_query(args: i_create_table): i_query {
  const { name, version, columns, primary_key, order_by } = args;
  const db_columns = column_stringify(columns);
  const primary_keys = primary_key_stringify(primary_key);
  const table_name = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const table_query = `CREATE TABLE IF NOT EXISTS ${table_name} (
    ${db_columns},
    PRIMARY KEY ${primary_keys}
) ${
    order_by
      ? `WITH CLUSTERING ORDER BY ${order_by.key} ${
          order_by?.type
        }`
      : ""
  };`;
  return {
    entity_name: table_name,
    query: table_query,
  };
}

