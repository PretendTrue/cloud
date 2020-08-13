import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/roles", { params });
}

export function fetchDetails (id) {
  return axios.get(`/roles/${id}`)
}

export function store (params) {
  return axios.post('/roles', params)
}

export function update (id, params) {
  return axios.patch(`/roles/${id}`, params)
}

export function destroy (id) {
  return axios.delete(`/roles/${id}`)
}
