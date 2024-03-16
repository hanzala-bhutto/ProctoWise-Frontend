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
  ALL_EVENTS = `/api/event/findAll`,
  EVENT = '/api/event/findOne',
  MAKE_PAYMENT = '/api/payment/makePayment',
  VALIDATE_PAYMENT = '/api/payment/validatePayment',
  PARTICIPANT_EVENT = `/api/event/participant`,
  JUDGE_EVENT = `/api/event/judge`,
  JOIN_EVENT = `/api/event/join`,
  LEAVE_EVENT = `/api/event/leave`,
  JUDGE_JOIN_EVENT= `/api/event/judgeInvite`,
  CREATE_EVENT = "/api/event/create_Event",
  ORG_GET_COMP_DETAILS='/api/organizer/org_get_comp_details',
  CREATE_TASK = "/api/event/create_task",
  ADD_USECASES = "/api/usecase/add_usecase",
  GET_PARTICIPANTS="/api/participant/findAll",
  GET_TASK = '/api/task/getTask',
  GET_TASK_TASK_ID = '/api/task/getTaskByTaskID',
  GET_ALL_TASKS_EVENT_ID = '/api/task/getAllTasksByEventID',
  DELETE_PARTICIPANT_FROM_EVENT="/api/event/deleteParticipantEvent",
  DELETE_JUDGE_FROM_EVENT="/api/event/deleteJudgeEvent",
  GET_PARTICIPANTS_WRT_EVENTS = "/api/participant/getParticipantsWRTEvents",
  GET_JUDGE_WRT_EVENTS = "/api/judge/getJudgesWRTEvents",
  EVENT_UPDATE_TASK = "/api/event/updateTask",
  DELETE_USECASE = "/api/usecase/deleteUsecase",
  DELETE_TASK = "/api/task/deleteTask"
}