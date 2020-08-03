import axios from "@/plugins/axios";

export function fetchList(params) {
  return axios.get("/departments", { params });
}

export function destroy (id) {
  return axios.delete(`/departments/${id}`)
}
