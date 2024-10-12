import { UserRequestBodyT } from "../../../app/types";

export type LoginResponseTypeT = {
  accessToken: string;
  refreshToken: string;
  user: UserRequestBodyT;
};

export type LoginRequestErrorT = any;
