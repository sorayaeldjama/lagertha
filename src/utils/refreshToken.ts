
import { AuthService, CredentialOutput, OpenAPI } from "@/services/openapi";
import { Lagertha } from "lagertha_js";
import { get_fingerprint } from "./getFingerPrint";
import { isValidToken } from "./isValidToken";

export const refreshToken = async (): Promise<void> => {
    try {
        const token = localStorage.getItem("token_lagertha_transfer");
        const lagertha_token = localStorage.getItem("token_lagertha")
        if (!lagertha_token) throw 'no lagertha token'
        if (!token) throw 'no token'
        if (!isValidToken(token) || !isValidToken(lagertha_token)) throw "expire jwt"
    } catch {
        const refreshToken = localStorage.getItem("refresh_token_lagertha");
        if (!refreshToken) throw 'no refresh token'
        if (!isValidToken(refreshToken)) throw "expire refresh jwt"
        const { access_token, refresh_token, open_id } = await Lagertha.refresh({
            refresh_token: refreshToken,
            application_uuid: process.env.NEXT_PUBLIC_LAGERTHA_UUID || '',
            env: process.env.NEXT_PUBLIC_LAGERTHA_API || ""
        })
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || ""
        const creds = await AuthService.authControllerLogin({
            open_id,
            fingerprint: await get_fingerprint()
        }) as CredentialOutput
        await localStorage.setItem('token_lagertha', access_token)
        await localStorage.setItem('refresh_token_lagertha', refresh_token)
        await localStorage.setItem('token_lagertha_transfer', creds.access_token)
        await localStorage.setItem('refresh_token_lagertha_transfer', creds.refresh_token)
    }
}