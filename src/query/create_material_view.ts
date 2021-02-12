import { primary_key_stringify } from "./primary_key_stringify";
import { i_material_view, i_query } from "../types";

/**
 ** builds a materialized view query for scylla db, it checks if view exists
 * @param args an object containing view name, version, select query, and primary key
 * @returns an object containing view name, and query string
 */
export function create_material_view(args: i_material_view): i_query {
  const { name, version, select_query, primary_key } = args;
  const primary_keys = primary_key_stringify(primary_key);
  const view_name = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const view_quey = `CREATE MATERIALIZED VIEW IF NOT EXISTS ${view_name} AS ${select_query}
  PRIMARY KEY ${primary_keys}`;

  return {
    entity_name: view_name,
    query: view_quey,
  };
}
