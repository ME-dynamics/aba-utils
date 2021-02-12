import { Client, types } from "cassandra-driver";

export type t_result_set = types.ResultSet;
export type t_row = types.Row;
export type t_long = types.Long;

interface i_error_path {
  error_path: string | undefined;
}
export interface i_scylla_client extends i_error_path {
  contact_points: string[];
  local_data_center: string;
  keyspace: string;
}
export interface i_build_db_func {
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

export interface i_create_index {
  name: string;
  version: string;
  table: string;
  index_key: string;
  local_index?: {
    partition_key: string;
  };
}
export interface i_create_type {
  name: string;
  version: string;
  columns: i_db_column[];
}

export interface i_primary_key {
  partition: string[];
  cluster?: string[];
}

export interface i_create_table {
  name: string;
  version: string;
  columns: i_db_column[];
  primary_key: i_primary_key;
  order_by?: {
    key: string;
    type: "ASC" | "DESC";
  };
}

export interface i_material_view {
  name: string;
  version: string;
  select_query: string;
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
  lwt?: string[];
}
export interface i_update_query {
  table: string;
  version: string;
  values: i_values[];
  where: string[];
  lwt?: string[];
}
export interface i_delete_query {
  table: string;
  version: string;
  columns: string[] | undefined;
  where: string[];
  lwt?: string[];
}
export interface i_select_query {
  table: string;
  version: string;
  distinct?: boolean;
  columns: string[];
  where: string[];
  order_by?: {
    key: string;
    type: "ASC" | "DESC";
  };
  limit?: number;
  allow_filtering?: boolean;
}
export interface i_equal {
  argument: string;
  self?: boolean;
  equals?: string | number | boolean;
}

export interface i_greater_than {
  argument: string;
  equality: boolean;
  self?: boolean;
  greater_than?: string | number | boolean;
}

export interface i_less_than {
  argument: string;
  equality: boolean;
  self?: boolean;
  less_than?: string | number | boolean;
}

export interface i_not_equal {
  argument: string;
  self?: boolean;
  not_equal: string | number | boolean;
}

export interface i_IN {
  argument: string;
  self?: boolean;
  items?: string[];
}

// export interface IContains {
//   argument: string;

// }

// functions

export type t_db_select_func = (info: i_select) => Promise<t_result_set>;
export type t_db_upsert_func = (info: i_query_exec) => Promise<t_result_set>;
export type t_db_init_func = (info: i_init) => Promise<t_result_set>;
