import BASE_URL from "./constant.js"
import axios from "axios";

//requests

//get all
export async function getAll(endpoint) {
  try {
    const response = await axios.get(BASE_URL + endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getOne(endpoint,id) {
    try {
      const response = await axios.get(BASE_URL + endpoint + `/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
}

export async function deleteOne(endpoint,id) {
    try {
      const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
}

export async function post(endpoint,payload) {
    try {
      const response = await axios.post(BASE_URL + endpoint, payload);
      return response.data;
    } catch (error) {
      return error;
    }
}

export async function putOne(endpoint,id,payload) {
    try {
      const response = await axios.put(BASE_URL + endpoint + `/${id}`, payload);
      return response.data;
    } catch (error) {
      return error;
    }
}

export async function patchOne(endpoint,id,payload) {
    try {
      const response = await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
      return response.data;
    } catch (error) {
      return error;
    }
}