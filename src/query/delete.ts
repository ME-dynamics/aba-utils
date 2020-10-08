import { IDeleteQuery } from "../types";
import { separator, andStr } from "./constant";

export function deleteQuery(args: IDeleteQuery) {
  const { table, version, columns, where } = args;
  const tableName = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const deleteColumns = columns ? ` ${columns.join(separator)}` : "";
  return `DELETE${deleteColumns.toLowerCase()} FROM ${tableName} WHERE ${where.join(
    andStr
  )};`;
}
