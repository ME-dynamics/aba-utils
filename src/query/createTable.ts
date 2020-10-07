import { columnStringify } from "./columnStringify";
import { primaryKeyStringify } from "./primaryKeyStringify";
import { ICreateTable, IQuery } from "../types";

export function createTable(args: ICreateTable): IQuery {
  const { name, version, columns, primaryKey } = args;
  const dbColumns = columnStringify(columns);
  const primaryKeys = primaryKeyStringify(primaryKey);
  const tableName = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const tableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (
    ${dbColumns},
    PRIMARY KEY ${primaryKeys}
)`;
  return  {
    name: tableName,
    query: tableQuery,
  }
}