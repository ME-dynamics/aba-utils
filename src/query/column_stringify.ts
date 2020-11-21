import { i_db_column } from "../types";


/**
 * generates a string of db columns with their types
 * separated by  ,  for valid syntax for cql in scylla db
 * @param columns 
 */
export function column_stringify(columns: i_db_column[]) {
  const columnString: string[] = [];
  for (let index = 0; index < columns.length; index++) {
    const { name, type, set_type, udt_name, map } = columns[index];
    /**
     * if column type is UDT (user defined types) 
     * udtName variable should be defined
     */
    if (type === "UDT") {
      if (!udt_name)
        throw new Error("udt name must be defined when type is set to UDT");
      // push db column with udt as type
      columnString.push(`${name.toLowerCase()} ${udt_name.toLowerCase()}`);
      /**
       * if type is a set, setType must be defined
       * set is a sorted list with a type : set<type>
       * also if setType is UDT, udtName should be de defined
       * and db column type in set must be frozen : set<frozen<UDT>>
       */
    } else if (type === "SET") {
      if (!set_type)
        throw new Error("setType must be defined when type is set to SET");
      if (set_type === "UDT") {
        if (!udt_name)
          throw new Error("udt name must be defined when type is set to UDT");

        columnString.push(
          `${name.toLowerCase()} set<frozen<${udt_name.toLowerCase()}>>`
        );
      } else if (set_type === "SET" || set_type === "MAP") {
        throw new Error("you cannot use set or map inside set");
      } else {
        columnString.push(
          `${name.toLowerCase()} set<${set_type.toLowerCase()}>`
        );
      }
      /**
       * if type is map, keyType nad valueType must be defined
       * map is a key value structure and both key and value must be typed
       * if value type is a udt, udtName must be defined and it must be pushed
       * frozen
       */
    } else if (type === "MAP") {
      if (!map || !map.key_type || !map.value_type)
        throw new Error(
          "you must define map key value type, when column type is map"
        );
      const { key_type, value_type } = map;

      if (value_type === "UDT") {
        if (!udt_name)
          throw new Error("udt name must be defined when type is set to UDT");
        columnString.push(
          `${name.toLowerCase()} map<${key_type.toLowerCase()}, frozen<${value_type.toLowerCase()}>>`
        );
      } else if (
        value_type === "SET" ||
        value_type === "MAP" ||
        key_type === "SET" ||
        key_type === "MAP"
      ) {
        throw new Error(
          "you cannot use set or map as key type or value type in a map"
        );
      } else {
        columnString.push(
          `${name.toLowerCase()} map<${key_type.toLowerCase()}, ${value_type.toLowerCase()}>`
        );
      }
    } else {
      columnString.push(`${name.toLowerCase()} ${type.toLowerCase()}`);
    }
  }
  return columnString.join(", ");
}




