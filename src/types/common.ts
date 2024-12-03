import { User } from "next-auth";
export type TSigninDataType = {
  email: string;
  password: string;
};

export type TSignUpDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone?: string;
};
export type TForgetPasswordDataType = {
  email: string;
};
export type TVerifyCodeDataType = {
  otp: string;
};

export type TSetPasswordDataType = {
  email: string;
  password: string;
  rePassword: string;
};

export interface TAPIUserInfo extends User {
  message: string;
  token: string;
  user: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
    passwordChangedAt: string;
  };
}
export type TAPIInfo = {
  message: string;
  info: string;
};
export type TAPIStatus = {
  status?: string;
  message?: string;
  code?: number;
};

export type TAPIRestStatus = {
  message: string; //"success" /"reset code not verified"
  token?: string;
  code?: number;
};
