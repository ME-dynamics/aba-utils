import { separator } from "./constant";
import { ISelect } from "../types";

export function select(args: ISelect) {
  const { table, version, columns, distinct, where } = args;
  const tableName = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const clause = columns.join(separator);
  const isDistinct = distinct ? "DISTINCT " : "";
  return `SELECT ${isDistinct}${clause} FROM ${tableName} WHERE ${where.join(
    " AND "
  )};`;
}

