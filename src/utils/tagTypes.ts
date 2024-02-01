export enum Tags {
    USER_AUTHENTICATED = 'isUserAuthenticated',
    USER_PROFILE = 'userProfile',
    USER_PERMISSIONS = 'userPermissions',
    USERS_LIST = 'usersList',
    ACCESS_PROFILE = 'accessProfile',
  }
  
  export const ServiceTagTypes = {
    LOGIN_SERVICE: [Tags.USER_PROFILE, Tags.USERS_LIST, Tags.ACCESS_PROFILE, Tags.USER_PERMISSIONS],
    USER_SERVICE: [Tags.USERS_LIST],
  };