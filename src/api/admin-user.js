import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/users", { params });
}

export function destroy (id) {
  return axios.delete(`/users/${id}`)
}
