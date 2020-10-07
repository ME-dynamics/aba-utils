import { Client, types } from "cassandra-driver";

export type TResultSet = types.ResultSet;
export type TRow = types.Row;
export type TLong = types.Long;

export interface IBuildClient {
  client: Client;
}

export interface ISelect {
  query: string;
  params: Record<string, string> | undefined;
  unique: true;
  errorPath: string | undefined;
}

export interface IUpsert {
  query: string;
  params: Record<string, string> | undefined;
  errorPath: string | undefined;
}

export interface IInit {
  query: string;
  errorPath: string | undefined;
}

export type TScyllaNativeTypes =
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

export interface IDbColumn {
  name: string;
  type: TScyllaNativeTypes;
  setType?: TScyllaNativeTypes;
  udtName?: string;
  map?: {
    keyType: TScyllaNativeTypes;
    valueType: TScyllaNativeTypes;
  };
}

export interface ICreateType {
  name: string;
  version: string;
  columns: IDbColumn[];
}

export interface IPrimaryKey {
  partition: string[];
  cluster: string[];
}

export interface ICreateTable {
  name: string;
  version: string;
  columns: IDbColumn[];
  primaryKey: IPrimaryKey;
}

export interface IQuery {
  name: string;
  query: string;
}

export interface IValues {
  column: string;
  value: "self" | string | number | boolean | null;
}
export interface IInsertQuery {
  table: string;
  version: string;
  values: IValues[];
}
export interface IUpdateQuery {
  table: string;
  version: string;
  values: IValues[];
  where: string[];
}
export interface IDeleteQuery {
  table: string;
  version: string;
  columns: string[] | undefined;
  where: string[];
}
export interface ISelectQuery {
  table: string;
  version: string;
  distinct: boolean;
  columns: string[];
  where: string[];
}
export interface IEqual {
  argument: string;
  equals: "self" | string | number | boolean;
}

export interface IGreaterThan {
  argument: string;
  equality: boolean;
  greaterThan: "self" | string | number | boolean;
}

export interface ILessThan {
  argument: string;
  equality: boolean;
  lessThan: "self" | string | number | boolean;
}

export interface INotEqual {
  argument: string;
  notEqual: "self" | string | number | boolean;
}

export interface IN {
  argument: string;
  items: "self" | string[];
}

// export interface IContains {
//   argument: string;

// }

// functions

export type TDbSelectFunc = (info: ISelect) => Promise<TResultSet>;
export type TDbUpsertFunc = (info: IUpsert) => Promise<TResultSet>;
export type TDbInitFunc = (info: IInit) => Promise<TResultSet>;
