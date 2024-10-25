import { ApiCore } from "../../utilities/core";

const url = "employee/users";

const ApiUsers = new ApiCore({
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

export default ApiUsers;