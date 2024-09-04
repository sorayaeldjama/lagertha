
export enum Page {
    HOME = '/',
    TRANSFER = '/transfer',
    USER = '/user',
    NEWLINK = '/newlink',
    FILES = '/files',
    SETTINGS = '/settings',
    LINKS = '/links',
    FORGET = '/forget',
    LOGIN = '/login',
    CONTACT = '/contact',
    LAGERTHA = 'https://lagertha.tech/',
    CUSTOMER_SUCCESS_LINKS = "/customer-success/links",
    CUSTOMER_SUCCESS_STATS = "/customer-success/stats",
    ADMIN_USERS = "/admin/users",
    ADMIN_SYSTEM = "/admin/system",
    BUY_CREDITS = "/credits",
    PRODUCTS = "/finance/products",
    SIGNUP = "/signup",
    SIGNUP_PASSWORD = "/signupPassword"
}

// export class Pages {
//     private locale: string
//     constructor(locale: string) {
//         this.locale = locale
//     }
//     public get = (page: Page) => {
//         return page.replace('{{locale}}', this.locale)
//     }
// }

// const pages = new Pages('en')

// pages.get(Page.HOME)

// export const usePage = (locale: string): Pages => {
//     return new Pages(locale)
// }