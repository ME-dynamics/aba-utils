import { i_equal, i_not_equal, i_greater_than, i_less_than, IN } from "../types";
import { separator } from "./constant";
/**
 * will generate a equal statement
 * like id = :id
 * if equals self, returns argument = :argument
 * else returns argument = valueGiven, note that
 * this given value is hard coded to values
 * @param args
 */
export function equal(args: i_equal) {
  const { argument, equals } = args;
  if (equals === "self") {
    return `${argument.toLowerCase()} = :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} = ${equals}`;
  }
}

export function greater_than(args: i_greater_than) {
  const { argument, greater_than, equality } = args;
  if (greater_than === "self") {
    return `${argument.toLowerCase()} >${equality ? "=" : ""} :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} >${equality ? "=" : ""} ${greater_than}`;
  }
}

export function less_than(args: i_less_than) {
  const { argument, less_than, equality } = args;
  if (less_than === "self") {
    return `${argument.toLowerCase()} <${equality ? "=" : ""} :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} <${equality ? "=" : ""} ${less_than}`;
  }
}

export function not_equal(args: i_not_equal) {
  const { argument, not_equal } = args;
  if (not_equal === "self") {
    return `${argument.toLowerCase()} = :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} = ${not_equal}`;
  }
}

export function IN(args: IN) {
  const { argument, items } = args;
  if (items === "self") {
    return `${argument.toLowerCase()} IN :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} IN (${items.join(separator)})`;
  }
}


// export function contains(args) {

// }