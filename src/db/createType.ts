import { columnStringify } from "./columnStringify";
import { ICreateType, IQuery } from "../types";

export function createType(args: ICreateType): IQuery {
  const { name, version, columns } = args;
  const dbColumns = columnStringify(columns);
  const typeName = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const typeQuery = `CREATE TYPE IF NOT EXISTS ${typeName} (
    ${dbColumns}
)`;
  return {
    name: typeName,
    query: typeQuery,
  };
}
