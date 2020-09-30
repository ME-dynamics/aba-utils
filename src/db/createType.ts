import { columnStringify } from "./columnStringify";
import { result } from "../result";
import { ICreateType, IQuery } from "../types";

export function createType(args: ICreateType) {
  const { name, version, columns } = args;
  const dbColumns = columnStringify(columns);
  const typeName = `${name.toLowerCase()}_${version.toLowerCase()}`;
  const typeQuery = `CREATE TYPE IF NOT EXISTS ${typeName} (
    ${dbColumns}
)`
  return result<IQuery>({
    success: true,
    payload: {
      name: typeName,
      query: typeQuery
    },
    error: undefined
  });
}
