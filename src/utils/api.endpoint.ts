export const API_BASE_URL = '';

export const GLOBAL_PATH = 'http://localhost:5000';

export enum apiPath {
  // AUTH
  IS_AUTHENTICATED = '/admin/authenticate',
  USER_LOG_IN = `/api/auth/judge/login`,
  USER_REGISTER = `/api/auth/judge/register`,
  PARTICIPANT_LOG_IN = `/api/auth/participant/login`,
  PARTICIPANT_REGISTER = `/api/auth/participant/register`,
  ORG_LOG_IN = '/api/auth/org-login',
  ORG_REGISTER = '/api/auth/org-register',
  LOG_OUT = `/signout`,
  RENEW_ACCESS_TOKEN = '/auth/renew-token',
  JUDGE_EVENT = `/api/event/judge`,
  CREATE_EVENT = "/api/event/create_Event",
  ORG_GET_COMP_DETAILS='/api/organizer/org_get_comp_details',
  CREATE_TASK = "/api/event/create_task",
  ADD_USECASES = "/api/usecase/add_usecase",
  GET_PARTICIPANTS="/api/participant/getParticipants"
}