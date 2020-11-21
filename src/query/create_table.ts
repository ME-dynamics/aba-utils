import { column_stringify } from "./column_stringify";
import { primary_key_stringify } from "./primary_key_stringify";
import { i_create_table, i_query } from "../types";

export function create_table(args: i_create_table): i_query {
  const { name, version, columns, primary_key } = args;
  const db_columns = column_stringify(columns);
  const primary_keys = primary_key_stringify(primary_key);
  const table_name = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const table_query = `CREATE TABLE IF NOT EXISTS ${table_name} (
    ${db_columns},
    PRIMARY KEY ${primary_keys}
);`;
  return  {
    name: table_name,
    query: table_query,
  }
}
