import { IEqual, INotEqual, IGreaterThan, ILessThan, IN } from "../types";
import { separator } from "./constant";
/**
 * will generate a equal statement
 * like id = :id
 * if equals self, returns argument = :argument
 * else returns argument = valueGiven, note that
 * this given value is hard coded to values
 * @param args
 */
export function equal(args: IEqual) {
  const { argument, equals } = args;
  if (equals === "self") {
    return `${argument} = :${argument}`;
  } else {
    return `${argument} = ${equals}`;
  }
}

export function greaterThan(args: IGreaterThan) {
  const { argument, greaterThan, equality } = args;
  if (greaterThan === "self") {
    return `${argument} >${equality ? "=" : ""} :${argument}`;
  } else {
    return `${argument} >${equality ? "=" : ""} ${greaterThan}`;
  }
}

export function lessThan(args: ILessThan) {
  const { argument, lessThan, equality } = args;
  if (lessThan === "self") {
    return `${argument} <${equality ? "=" : ""} :${argument}`;
  } else {
    return `${argument} <${equality ? "=" : ""} ${lessThan}`;
  }
}

export function notEqual(args: INotEqual) {
  const { argument, notEqual } = args;
  if (notEqual === "self") {
    return `${argument} = :${argument}`;
  } else {
    return `${argument} = ${notEqual}`;
  }
}

export function IN(args: IN) {
  const { argument, items } = args;
  if (items === "self") {
    return `${argument} IN :${argument}`;
  } else {
    return `${argument} IN (${items.join(separator)})`;
  }
}


// export function contains(args) {

// }