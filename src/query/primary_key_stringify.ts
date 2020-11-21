import { i_primary_key } from "../types";




/**
 * turn partition key and clustering key into valid
 * scylla db cql format
 * @param keys 
 */
export function primary_key_stringify(keys: i_primary_key) {
  const { partition, cluster } = keys;
  /**
   * check if keys contain ',' character, it's not allowed 
   * because it is used as separator for keys
   * NOTE: using join with space so search method works for all
   * of the keys provided
   */
  if (
    partition.join(" ").search(",") !== -1 ||
    cluster.join(" ").search(",") !== -1
  ) {
    throw new Error("not allowed to use ',' in your keys");
  }
  let partition_key: string;
  if (partition.length === 0) {
    throw new Error("you must define at least one partition key");
  } else if (partition.length === 1) {
    partition_key = `${partition[0]}`;
  } else {
    partition_key = `(${partition.join(", ")})`;
  }
  if (cluster.length === 0) {
    return `(${partition_key})`;
  } else {
    return `(${partition_key}, ${cluster.join(", ")})`;
  }
}
