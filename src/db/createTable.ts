import { columnStringify } from "./columnStringify";
import { primaryKeyStringify } from "./primaryKeyStringify";
import { ICreateTable } from "../types";

export function createTable(args: ICreateTable) {
  const { name, version, columns, primaryKey } = args;
  const dbColumns = columnStringify(columns);
  const primaryKeys = primaryKeyStringify(primaryKey);
  return `CREATE TABLE IF NOT EXISTS ${name.toLowerCase()}_${version.toLowerCase()} (
        ${dbColumns},
        PRIMARY KEY ${primaryKeys}
    )`;
}


