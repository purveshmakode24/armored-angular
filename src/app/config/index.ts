declare const window: any;

export const APP_NAME = window.NG_APP_NAME as string;
export const APP_VERSION = window.NG_APP_VERSION as string;
export const APP_ROOT_URL = window.NG_APP_ROOT_URL as string;
export const APP_ROOT_SERVICE_URL = window.NG_APP_SERVICE_ROOT_URL as string;
export const JWT_SECRET = '123456' as string;
export const HTTP_HEADERS_COMMON = {
    'Access-Control-Allow-Headrs': 'Content-Type',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache'
};
export enum ROLES {
    ADMIN = "admin",
    USER = "user"
}