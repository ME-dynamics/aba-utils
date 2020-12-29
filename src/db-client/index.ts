import { Client } from "cassandra-driver";
import { build_init } from "./init";
import { build_select } from "./select";
import { build_upsert } from "./upsert";
import { build_delete } from "./delete";
import { i_scylla_client } from "../types";
import { Error_Factory } from "../../index";



/**
 ** create a scylla db client then builds CRUD methods
 * @param info an object containing database info needed to connect
 * @returns an object containing init, select, upsert, delete methods
 */
export function scylla_client(info: i_scylla_client) {
  const { contact_points, keyspace, local_data_center, error_path } = info;
  try {
    const client = new Client({
      contactPoints: contact_points,
      localDataCenter: local_data_center,
      keyspace,
    });  
    return {
      init: build_init({client}),
      select: build_select({client}),
      upsert: build_upsert({client}),
      delete: build_delete({client})
  }
  } catch (error) {
    throw new Error_Factory({
      name: "scylla_client_failed",
      message: "Error in creating scylla db client",
      detail: "",
      native_error: error,
      path: error_path
    })
  }
  
  
}
