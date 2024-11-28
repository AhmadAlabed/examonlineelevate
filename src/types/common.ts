// export type TState = {
//   zodError?: { email?: string[]; password?: string[] } | null;
//   apiError: string | null;
//   data: {
//     email: string;
//     password: string;
//   };
//   message: string | null;
// };

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
