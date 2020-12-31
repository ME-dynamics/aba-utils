import { column_stringify } from "./column_stringify";
import { i_create_type, i_query } from "../types";


/**
 ** creates UDT (user defined types) query, it checks if type exists
 * @param args an object containing UDT's name, version, and columns
 * @returns an object containing UDT name and query string 
 */
export function create_type_query(args: i_create_type): i_query {
  const { name, version, columns } = args;
  const db_columns = column_stringify(columns);
  const type_name = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const type_query = `CREATE TYPE IF NOT EXISTS ${type_name} (
    ${db_columns}
);`;
  return {
    entity_name: type_name,
    query: type_query,
  };
}
