/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suite } from "benchmark";
import { httpResult } from "../dist";

const suite = new Suite();

suite
  .add("returns server error", () => {
    httpResult.serverError.serviceUnavailable({
      error: "dbDown",
      payload: undefined,
    });
  })
  .add("return response ok", () => {
    httpResult.success.ok({ payload: "yo", error: undefined });
  })
  
  // @ts-ignore
  .on("cycle", function (event) {
    // @ts-ignore
    console.log(String(event.target));
  })
  .on("complete", function () {
    // @ts-ignore
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run();
