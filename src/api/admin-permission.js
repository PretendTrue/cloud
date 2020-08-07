import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/permissions", { params });
}

export function fetchDetails (id) {
  return axios.get(`/permissions/${id}`)
}

export function store (params) {
  return axios.post('/permissions', params)
}

export function update (id, params) {
  return axios.patch(`/permissions/${id}`, params)
}

export function destroy (id) {
  return axios.delete(`/permissions/${id}`)
}
