import { ApiCore } from "../../utilities/core";


const url = "employee/leads";

export const apiLeads = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParams: true,
  post: true,
  postFormData: true,
  put: true,
  putById: true,
  putFormData: true,
  patch: true,
  patchByParams: true,
  remove: true,
  url: url,
});