
import { Lagertha } from "lagertha_js";
import { isValidToken } from "./isValidToken";
import {jwtDecode} from "jwt-decode";
export const generateLagerthaConfig =  async (env: string) => {
    const token = localStorage.getItem('token_lagertha');
    const refresh_token = localStorage.getItem('refresh_token_lagertha')
    if (token && isValidToken(token) ) {
        return {
            access_token: token,
            env,
        }
    } else if (refresh_token && isValidToken(refresh_token)) {
        const decoded: any = jwtDecode(refresh_token)
        const creds = await Lagertha.refresh({
            refresh_token,
            application_uuid: decoded.application_uuid,
            env
        })
        localStorage.setItem('token_lagertha', creds.access_token)
        localStorage.setItem('refresh_token_lagertha', creds.refresh_token)
        // localStorage.setItem('pk', creds.pk)
        return {
            access_token: creds.access_token,
            env,
        }
    }
    return null
}