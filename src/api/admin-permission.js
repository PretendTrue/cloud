import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/permissions", { params });
}

export function fetchDetails (id) {
  return axios.get(`/permissions/${id}`)
}

export function destroy (id) {
  return axios.delete(`/permissions/${id}`)
}
