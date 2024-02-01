export const API_BASE_URL = '';

export const GLOBAL_PATH = 'http://localhost:5000';

export enum apiPath {
  // AUTH
  IS_AUTHENTICATED = '/admin/authenticate',
  LOG_IN = `/api/auth/judge/login`,
  REGISTER = `/api/auth/judge/register`,
  LOG_OUT = `/signout`,
  RENEW_ACCESS_TOKEN = '/auth/renew-token',
  JUDGE_EVENT = `/api/event/judge`
}