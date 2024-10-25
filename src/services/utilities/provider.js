// provider.js

import axios from "axios";
import { handleResponse, handleError } from "./response";
import { LOCALHOST_URL } from "../api";



const BASE_URL = LOCALHOST_URL;
const token = localStorage.getItem("CRM-token");
//axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
                                        //01
/** @param {string} resource */
const getAll = async (resource, signal,) => {
  //const headers = isAuthorized ? {'Authorization': token} : { };

  try {
    const response = await axios.get(`${BASE_URL}/${resource}`, {
      signal: signal,
      headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};


                                          //02
/** @param {string} resource */
/** @param {string} id */
/** @param {string} additionalParam */
const getSingle = async (resource, id, signal, additionalParam = "", isAuthorized = false) => {
 
  try {
    let response;
    if (additionalParam === 'string' && additionalParam.trim() !=="") {
      response = await axios.get(`${BASE_URL}/${resource}/${additionalParam}/${id}`,
        {
        signal: signal,
        headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
      });
    } else {
      response = await axios.get(
        `${BASE_URL}/${resource}/${additionalParam}/${id}`,
        {
          signal: signal,
          headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
        }
      );
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                          //03
/** @param {string} resource */
/** @param {string} params */
const getByParams = async (
  resource,
  signal,
  params,
  additionalParam = "",
  isAuthorized = false
) => {
  const headers = isAuthorized ? { "auth-token": token } : {};

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.get(`${BASE_URL}/${resource}`, {
        signal: signal,
        headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
        params: params,
      });
    } else {
      response = await axios.get(`${BASE_URL}/${resource}/${additionalParam}`, {
        signal: signal,
        headers: headers,
        params: params,
      });
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                            //04
/** @param {string} resource */
/** @param {object} model */
const post = async (
  resource,
  model,
  additionalParam = "",
  
) => {
  //console.log({ model });
  //const headers = isAuthorized ? { "auth-token": token } : {};

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.post(`${BASE_URL}/${resource}`, model, {
        headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
      });
    } else {
      response = await axios.post(
        `${BASE_URL}/${resource}/${additionalParam}`,
        model,
        {
          headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
        }
      );
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                            //05
/** @param {string} resource */
/** @param {object} model */

const postFormData = async (
  resource,
  model,
  additionalParam = "",
  isAuthorized = false
) => {
  // console.log("invoked");
  const headers = isAuthorized
    ? {
        "Content-Type": "multipart/form-data",
        "auth-token": `${token}`,
      }
    : { "Content-Type": "multipart/form-data" };

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.post(`${BASE_URL}/${resource}`, model, {
        headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
      });
    } else {
      response = await axios.post(
        `${BASE_URL}/${resource}/${additionalParam}`,
        model,
        {
          headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
        }
      );
    }
    // console.log(await response);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                              //06
/** @param {string} resource */
/** @param {object} model */
const put = async (resource, model, additionalParams="") => {

  try {
    let response;
    if (additionalParams === "") {
      response = await axios.put(`${BASE_URL}/${resource}`, model, {
        headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
      });
    } else {
      response = await axios.put(
        `${BASE_URL}/${resource}/${additionalParams}`,
        model,
        {
          headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
        }
      );
    }

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                                  //07
/** @param {string} resource */
/** @param {object} model */
const putById = async (resource, id, model, signal) => {
  try {
    console.log(id);
    const response = await axios.put(`${BASE_URL}/${resource}/${id}`, model, {
      signal: signal,
      headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                                  //08
/** @param {string} resource */
/** @param {object} model */

const putFormData = async (
  resource,
  model,
  additionalParam = "",
  isAuthorized = false
) => {
  const headers = isAuthorized
    ? {
        "Content-Type": "multipart/form-data",
        "auth-token": `${token}`,
      }
    : { "Content-Type": "multipart/form-data" };

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.put(`${BASE_URL}/${resource}`, model, {
        headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
      });
    } else {
      response = await axios.put(
        `${BASE_URL}/${resource}/${additionalParam}`,
        model,
        {
          headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
        }
      );
    }
    // console.log(await response);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                                    //09
/** @param {string} resource */
/** @param {object} model */
const patch = async (resource, model, signal, isAuthorized = false) => {
  const headers = isAuthorized ? { "auth-token": token } : {};
  try {
    const response = await axios.patch(`${BASE_URL}/${resource}`, model, {
      signal: signal,
      headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                                    //10
// has no body
/** @param {string} resource */
const patchByParams = async (
  resource,
  additionalParams,
  queryParams,
  model,
  isAuthorized = false
) => {
  const headers = isAuthorized ? { "auth-token": token } : {};

  try {
    let request = axios.create({
      method: "PATCH",
      baseURL: `${BASE_URL}/${resource}/${additionalParams}?${queryParams}`,
      headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
    });
    const response = await request.patch(model);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
                                                    //11
/** @param {string} resource */
/** @param {string} id */
const remove = async (resource, id, additionalParams, isAuthorized = false) => {
  const headers = isAuthorized ? { "auth-token": token } : {};

  console.log(`${BASE_URL}/${resource}/${id}`);
  try {
    let response;
    if (additionalParams === "") {
      response = await axios.delete(`${BASE_URL}/${resource}/${id}`, {
        headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
      });
    } else {
      response = await axios.delete(
        `${BASE_URL}/${resource}/${additionalParams}/${id}`,
        {
          headers: {'Authorization': `${localStorage.getItem('CRM-token')}`},
        }
      );
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const apiProvider = {
  getAll,
  getSingle,
  getByParams,
  post,
  postFormData,
  put,
  putById,
  putFormData,
  patch,
  patchByParams,
  remove,
};
