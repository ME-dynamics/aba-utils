import { i_create_index } from "../types";

/**
 ** create index on a field that's outside primary key in scylla db, it checks if index exists
 * @param args an object containing index name, table name, index and table version (must be in sync)
 * index_key ( the key you want to index ), if needed add index locally instead of globally
 * @returns index query string 
 */
export function create_index_query(args: i_create_index) {
  const { name, table, version, index_key, local_index } = args;

  const index_name = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const table_name = `${table.toLowerCase()}_${version.toLowerCase()}`;

  return `CREATE INDEX IF NOT EXISTS ${index_name} ON ${table_name} (${
    local_index ? `(${local_index.partition_key}),` : ""
  }${index_key.toLowerCase()});`;
}
