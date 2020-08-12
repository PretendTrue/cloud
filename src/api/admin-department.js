import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/departments", { params });
}

export function fetchDetails (id) {
  return axios.get(`/departments/${id}`)
}

export function store (params) {
  return axios.post('/departments', params)
}

export function update (id, params) {
  return axios.patch(`/departments/${id}`, params)
}

export function destroy (id) {
  return axios.delete(`/departments/${id}`)
}
