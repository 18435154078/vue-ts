import request from "@/utils/request";
import { loginForm, loginRes, userInfoRes } from "./type";

enum API {
  LOGIN_URL = "/admin/acl/index/login",
  USER_INFO_URL = "/admin/acl/index/info",
}
// 暴露请求函数
export const login = (data: loginForm) =>
  request<loginRes, any>({ method: "post", url: API.LOGIN_URL, data });
export const userInfo = () =>
  request<userInfoRes>({ method: "get", url: API.USER_INFO_URL });
