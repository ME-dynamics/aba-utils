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
  setType? : TScyllaNativeTypes;
  udtName?: string
  map?: {
    keyType: TScyllaNativeTypes;
    valueType: TScyllaNativeTypes;
  }
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