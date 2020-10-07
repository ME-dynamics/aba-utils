import { separator } from "./constant";
import { IUpdateQuery } from "../types";


export function update(args: IUpdateQuery) {
  const { table, version, values, where } = args;
  const tableName = `${table.toLowerCase()}_${version.toLowerCase()}`;
  const updateInfo = [];
  for (let index = 0; index < values.length; index++) {
    // eslint-disable-next-line security/detect-object-injection
    const { column, value } = values[index];

    if (value === "self") {
      updateInfo.push(`${column} = :${column}`);
    } else if (typeof value === "string") {
      updateInfo.push(`${column} = '${value}'`);
    } else if (value === null) {
      updateInfo.push(`${column} = null`);
    } else {
      updateInfo.push(`${column} = ${value}`);
    }
  }
  return `UPDATE ${tableName} SET ${updateInfo.join(
    separator
  )} WHERE ${where.join(" AND ")};`;
}


