import { http_result_client_error, status_codes } from "../index";


describe("client error", () => {
    const { bad_request } = http_result_client_error;
    it("should return error object with error message", () => {
        expect.assertions(2);
        const error = "error message";
        const bad_request_obj = bad_request({error});
        expect(bad_request_obj.code).toBe(status_codes.BAD_REQUEST);
        expect(bad_request_obj.error).toBe(error);
    })
})