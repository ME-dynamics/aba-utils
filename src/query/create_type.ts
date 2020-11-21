import { column_stringify } from "./column_stringify";
import { i_create_type, i_query } from "../types";

export function create_type(args: i_create_type): i_query {
  const { name, version, columns } = args;
  const db_columns = column_stringify(columns);
  const type_name = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const type_query = `CREATE TYPE IF NOT EXISTS ${type_name} (
    ${db_columns}
);`;
  return {
    name: type_name,
    query: type_query,
  };
}
