import { Role } from "@/enums/roles.enum";

export type Jwt = {
  id: string;
  login:  string;
  application_uuid: string;
  application_name:  string;
  is_refresh: boolean;
  is_2fa_activate: boolean;
  iat: number;
  exp: number;
  roles: Role[];
  firstname:  string;
  lastname:  string;
  email: string;
};
