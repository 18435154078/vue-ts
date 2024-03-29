// 登录接口需要携带的ts类型
export interface loginForm {
  username: string;
  password: string;
}
// 登录接口返回的数据类型
export interface loginRes {
  code: number;
  data: string;
  message: string;
  ok: boolean;
}

// 用户信息返回的ts类型
interface userInfoData {
  avatar: string;
  button: string[];
  name: string;
  roles: string[];
  routes: string[];
}
export interface userInfoRes {
  code: number;
  data: userInfoData;
  message: string;
  ok: string;
}
