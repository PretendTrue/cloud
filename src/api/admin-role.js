import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/roles", { params });
}

export function destroy (id) {
  return axios.delete(`/roles/${id}`)
}
