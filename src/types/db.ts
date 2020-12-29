import { Client, types } from "cassandra-driver";

export type t_result_set = types.ResultSet;
export type t_row = types.Row;
export type t_long = types.Long;

export interface i_error_path {
  error_path: string | undefined;
}
export interface i_scylla_client extends i_error_path {
  contact_points: string[],
  local_data_center: string,
  keyspace: string
}
export interface i_build_client {
  client: Client;
}

export interface i_select extends i_error_path {
  query: string;
  params: Record<string, any> | undefined;
  unique: true;
}

export interface i_query_exec extends i_error_path {
  query: string;
  params: Record<string, any> | undefined;
}

export interface i_init extends i_error_path {
  query: string;
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
  entity_name: string;
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

export type t_db_select_func = (info: i_select) => Promise<t_result_set>;
export type t_db_upsert_func = (info: i_query_exec) => Promise<t_result_set>;
export type t_db_init_func = (info: i_init) => Promise<t_result_set>;
