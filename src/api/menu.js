import axios from "@/plugins/axios";

export function tree() {
  return axios.get("/menus/tree");
}
