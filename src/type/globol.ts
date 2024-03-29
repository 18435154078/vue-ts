export interface LoginData {
  username: string;
  password: string;
}

interface roleObj {
  required?: boolean;
  message: string;
  trigger: string;
  min?: number;
  max?: number;
}

export interface FormRules {
  [key: string]: roleObj[];
}
