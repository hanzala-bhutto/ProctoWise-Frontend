export const DEFAULT_TIMER = 600; // in seconds

export const TIMER_RESEND_OTP = 20; // in seconds

export const WHITE_LIST_PUBLIC_ENDPOINTS = [
  'userLogin',
  'userForgetPassword',
  'userResetPassword',
  'userSentEmail',
  'userVerifyEmail',
  'userVerifyOTP',
];

// export const NON_QUERY_PARAMS_ROUTES: string[] = [routes.DASHBOARD, routes.SETTINGS];

export const SIGN_OUT_END_POINT = 'userLogOut';

export const PORTAL = {
  APP: 'app',
  ADMIN: 'admin',
};

const THOUSAND_BYTES = 1000;
export const MIN_IMAGE_UPLOAD_SIZE = 1 * THOUSAND_BYTES;
export const MAX_IMAGE_UPLOAD_SIZE = 4 * THOUSAND_BYTES * THOUSAND_BYTES;

export const MIN_PAGE_NUMBER = 1;
export const MIN_PAGE_LIMIT = 10;
export const MAX_PAGE_SIZE = 40;
export const MIN_ACTIVITY_LOG_LIMIT = 20;
export const MIN_TOTAL_COUNT = 0;

export const CUSTOM_PAGE_SIZES = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '30', value: 30 },
  { label: '40', value: 40 },
];

export const EMAIL_REGEX_PATTERN = /^[a-zA-Z]*([-.+]*[a-zA-Z0-9])+$/;
export const SIGNUP_EMAIL_REGEX_PATTERN = /^[a-zA-Z0-9._+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const SIGNUP_PASSWORD_REGEX_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,64})/;
export const EMAIL_REGEX_NON_ORGANIZATION =
  /@(gmail|protonmail|outlook|hotmail|live|yahoo|zoho|aol|aim|gmx|icloud|yandex|mailinator|mail)\./;
export const pinRegEX = /^[0-9]{1,6}$/;
export const SUBDOMAIN_REGEX_PATTERN = /^[A-Za-z]+$/;

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export const ALL_FILTERS = 'All';
export const ENTER_KEY = 'Enter';

export const ALPHABET_CHARACTERS = /^[ A-Za-z]+\s?[A-Za-z ]*$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;