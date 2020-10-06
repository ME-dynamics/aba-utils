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

export interface ISelect {
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