   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const userLoginRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.USER_LOG_IN}`,
        method: 'POST',
        body: body
    }
}

const userRegisterRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.USER_REGISTER}`,
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

const participantLoginRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.PARTICIPANT_LOG_IN}`,
        method: 'POST',
        body: body
    }
}

const participantRegisterRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.PARTICIPANT_REGISTER}`,
        method: 'POST',
        body: body
    }
}

const orgLoginRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.ORG_LOG_IN}`,
        method: 'POST',
        body: body
    }
}

const orgRegisterRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.ORG_REGISTER}`,
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
    }),
    participantLogin: build.mutation({
        query: participantLoginRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
        },
    }),
    participantRegister: build.mutation({
        query: participantRegisterRequest,
        transformResponse : (rawResult:any) => {
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
        },
    }),
    orgLogin: build.mutation({
        query: orgLoginRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
        },
    }),
    orgRegister: build.mutation({
        query: orgRegisterRequest,
        transformResponse : (rawResult:any) => {
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
        },
    })
    })
})

export const {
    useUserLoginMutation,
    useUserLogoutMutation,
    useUserRegisterMutation,
    useParticipantLoginMutation,
    useParticipantRegisterMutation,
    useOrgLoginMutation,
    useOrgRegisterMutation
  } = authApi;