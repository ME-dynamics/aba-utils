
export interface i_build_client<Client> {
  client: Client;
}

export interface i_select {
  query: string;
  params: Record<string, any> | undefined;
  unique: true;
  error_path: string | undefined;
}

export interface i_upsert {
  query: string;
  params: Record<string, any> | undefined;
  error_path: string | undefined;
}

export interface i_init {
  query: string;
  error_path: string | undefined;
}

export type t_scylla_native_types =
  | "ASCII"
  | "BIGINT"
  | "BLOB"
  | "BOOLEAN"
  | "COUNTER"
  | "DATE"
  | "DECIMAL"
  | "DOUBLE"
  | "DURATION"
  | "FLOAT"
  | "INET"
  | "INT"
  | "SMALLINT"
  | "TEXT"
  | "TIME"
  | "TIMESTAMP"
  | "TIMEUUID"
  | "TINYINT"
  | "UUID"
  | "VARCHAR"
  | "VARINT"
  | "SET"
  | "MAP"
  | "UDT";

export interface i_db_column {
  name: string;
  type: t_scylla_native_types;
  set_type?: t_scylla_native_types;
  udt_name?: string;
  map?: {
    key_type: t_scylla_native_types;
    value_type: t_scylla_native_types;
  };
}

export interface i_create_type {
  name: string;
  version: string;
  columns: i_db_column[];
}

export interface i_primary_key {
  partition: string[];
  cluster: string[];
}

export interface i_create_table {
  name: string;
  version: string;
  columns: i_db_column[];
  primary_key: i_primary_key;
}

export interface i_query {
  name: string;
  query: string;
}

export interface i_values {
  column: string;
  value: "self" | string | number | boolean | null;
}
export interface i_insert_query {
  table: string;
  version: string;
  values: i_values[];
}
export interface i_update_query {
  table: string;
  version: string;
  values: i_values[];
  where: string[];
}
export interface i_delete_query {
  table: string;
  version: string;
  columns: string[] | undefined;
  where: string[];
}
export interface i_select_query {
  table: string;
  version: string;
  distinct: boolean;
  columns: string[];
  where: string[];
}
export interface i_equal {
  argument: string;
  equals: "self" | string | number | boolean;
}

export interface i_greater_than {
  argument: string;
  equality: boolean;
  greater_than: "self" | string | number | boolean;
}

export interface i_less_than {
  argument: string;
  equality: boolean;
  less_than: "self" | string | number | boolean;
}

export interface i_not_equal {
  argument: string;
  not_equal: "self" | string | number | boolean;
}

export interface IN {
  argument: string;
  items: "self" | string[];
}

// export interface IContains {
//   argument: string;

// }

// functions

export type t_db_select_func<result_set> = (info: i_select) => Promise<result_set>;
export type t_db_upsert_func<result_set> = (info: i_upsert) => Promise<result_set>;
export type t_db_init_func<result_set> = (info: i_init) => Promise<result_set>;
