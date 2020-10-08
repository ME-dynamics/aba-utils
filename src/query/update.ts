import { separator, andStr } from "./constant";
import { IUpdateQuery } from "../types";

export function update(args: IUpdateQuery) {
  const { table, version, values, where } = args;
  const tableName = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const updateInfo = [];
  for (let index = 0; index < values.length; index++) {
    // eslint-disable-next-line security/detect-object-injection
    const { column, value } = values[index];

    if (value === "self") {
      updateInfo.push(`${column.toLowerCase()} = :${column.toLowerCase()}`);
    } else if (typeof value === "string") {
      updateInfo.push(`${column.toLowerCase()} = '${value}'`);
    } else if (value === null) {
      updateInfo.push(`${column.toLowerCase()} = null`);
    } else {
      updateInfo.push(`${column.toLowerCase()} = ${value}`);
    }
  }
  return `UPDATE ${tableName} SET ${updateInfo.join(
    separator
  )} WHERE ${where.join(andStr)};`;
}
