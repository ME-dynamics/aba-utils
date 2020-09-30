import { columnStringify } from "./columnStringify";
import { ICreateType } from "../types";

export function createType(args: ICreateType) {
  const { name, version, columns } = args;
  const dbColumns = columnStringify(columns);
  return `CREATE TYPE IF NOT EXISTS ${name.toLowerCase()}_${version.toLowerCase()} (
        ${dbColumns}
    )`;
}

