import { separator, andStr } from "./constant";
import { ISelectQuery } from "../types";

export function select(args: ISelectQuery) {
  const { table, version, columns, distinct, where } = args;
  const tableName = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const clause = columns.join(separator).toLowerCase();
  const isDistinct = distinct ? "DISTINCT " : "";
  return `SELECT ${isDistinct}${clause} FROM ${tableName} WHERE ${where.join(
    andStr
  )};`;
}
