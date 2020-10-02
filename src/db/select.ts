// import { separator } from "./constant"
// import { ISelect } from "../types"





// export function select(args: ISelect) {
//     const { table, version, columns, distinct, where, orderBy } = args;
//     const tableName = `${table.toLowerCase()}_${version.toLowerCase()}`;
//     const clause = columns.join(separator);
//     const isDistinct = distinct ? "DISTINCT" : "";
//     const query = `SELECT ${isDistinct} ${clause} FROM ${tableName} WHERE ${where.join(separator)}`
//     return query;
// }