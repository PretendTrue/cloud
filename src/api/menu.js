import axios from "@/plugins/axios";

export function fetchList() {
  return axios.get("/menus");
}
