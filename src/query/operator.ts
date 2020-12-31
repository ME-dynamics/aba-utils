import {
  i_equal,
  i_not_equal,
  i_greater_than,
  i_less_than,
  i_IN,
} from "../types";
import { separator } from "./constant";



/**
 ** will generate a equal statement
 ** like id = :id
 ** if equals self, returns argument = :argument
 ** else returns argument = value_given
 * @param args an object containing argument, equal value or self for parameters
 * @returns an equality string for scylla db
 */
export function equal(args: i_equal) {
  const { argument, equals, self } = args;
  if (self) {
    return `${argument.toLowerCase()} = :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} = ${equals}`;
  }
}

/**
 ** produce greater than or equal and greater than a value string
 ** using self will result in argument > :argument for passing parameter
 * @param args an object containing argument, greater_than value or self for parameters
 * @returns a greater than string for scylla db
 */
export function greater_than(args: i_greater_than) {
  const { argument, greater_than, equality, self } = args;
  if (self) {
    return `${argument.toLowerCase()} >${
      equality ? "=" : ""
    } :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} >${equality ? "=" : ""} ${greater_than}`;
  }
}



/**
 ** produce less than or equal and less than a value string
 ** using self will result in argument < :argument for passing parameter
 * @param args an object containing argument, less_than value or self for parameters
 * @returns a less than string for scylla db
 */
export function less_than(args: i_less_than) {
  const { argument, less_than, equality, self } = args;
  if (self) {
    return `${argument.toLowerCase()} <${
      equality ? "=" : ""
    } :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} <${equality ? "=" : ""} ${less_than}`;
  }
}


/**
 ** produce not equal to a value string
 ** using self will result in argument != :argument for passing parameter
 * @param args an object containing argument, not equal value or self for parameters
 * @returns a not equal string for scylla db
 */
export function not_equal(args: i_not_equal) {
  const { argument, not_equal, self } = args;
  if (self) {
    return `${argument.toLowerCase()} != :${argument.toLowerCase()}`;
  } else {
    return `${argument.toLowerCase()} != ${not_equal}`;
  }
}
/**
 ** produce IN operator, use one argument and a group of items like
 ** arg1 IN (1, 2, 3). it can use argument as should pass in array in.
 ** arg1 IN :arg1 =====> {arg1: [1,2,3]}; 
 * @param args an object containing argument, items or self indicator
 * @returns a IN operation string
 */
export function IN(args: i_IN) {
  const { argument, items, self } = args;
  if (self) {
    return `${argument} IN :${argument}`;
  } else {
    return `${argument.toLowerCase()} IN (${items?.join(separator)})`;
  }
}



/**
 ** returns a is null check for scylla db
 * @param argument argument, string
 * @returns a string , is null check 
 */
export function is_null(argument: string) {
  return `${argument} = NULL`;
}
/**
 * returns a not null check for scylla db
 * @param argument argument string
 * @returns a string , not null check 
 */
export function not_null(argument: string) {
  return `${argument} != NULL`;
}

/**
 * @returns EXISTS string
 */
export function exists() {
  return "EXISTS"
}

/**
 * @returns NOT EXISTS string
 */
export function not_exists() {
  return "NOT EXISTS"
}

// export function contains(args) {

// }
