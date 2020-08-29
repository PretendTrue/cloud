import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/users", { params });
}

export function fetchDetails (id) {
  return axios.get(`/users/${id}`)
}

export function store (params) {
  return axios.post('/users', params)
}

export function update (id, params) {
  return axios.patch(`/users/${id}`, params)
}

export function destroy (id) {
  return axios.delete(`/users/${id}`)
}

export function permissions() {
  return axios.get('users/permissions')
}
