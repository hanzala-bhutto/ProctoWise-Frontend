   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const userLoginRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.LOG_IN}`,
        method: 'POST',
        body: body
    }
}

const userRegisterRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.REGISTER}`,
        method: 'POST',
        body: body
    }
}

const userLogoutRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.LOG_OUT}`,
        method: 'POST',
        body: body
    }
}

const apiWithTags = Api.enhanceEndpoints({
    addTagTypes: ServiceTagTypes.LOGIN_SERVICE,
});

export const authApi = apiWithTags.injectEndpoints({
    endpoints: (build:any) => ({
    userLogin: build.mutation({
        query: userLoginRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
        },
    }),
    userRegister: build.mutation({
        query: userRegisterRequest,
        transformResponse : (rawResult:any) => {
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
        },
    }),
    userLogout: build.mutation({
        query: userLogoutRequest
    })
    })
})

export const {
    useUserLoginMutation,
    useUserLogoutMutation,
    useUserRegisterMutation,
  } = authApi;