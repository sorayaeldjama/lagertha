import { jwtDecode } from "jwt-decode"

export const isValidToken = (token: string): boolean => {
    const decoded: any = jwtDecode(token)
    return (decoded ? decoded.exp > (Date.now() / 1000) : false)
}