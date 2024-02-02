   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const judgeEventRequest = (id: string) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.JUDGE_EVENT}/${id}`,
        method: 'GET',
    }
}

const createEventRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.CREATE_EVENT}`,
        method: 'POST',
        body: body
    }
}

const orgGetCompDetailsRequest = (organizerID: string) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.ORG_GET_COMP_DETAILS}/${organizerID}`,
        method: 'GET',
    }
}

const apiWithTags = Api.enhanceEndpoints({
    addTagTypes: ServiceTagTypes.LOGIN_SERVICE,
});

export const authApi = apiWithTags.injectEndpoints({
    endpoints: (build:any) => ({
    judgeEvents: build.query({
        query: judgeEventRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult;
        },
    }),
    
    createEvents: build.mutation({
        query: createEventRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult;
        },
    }),

    orgGetCompDetails:build.query({
        query:orgGetCompDetailsRequest,
        transformResponse: (rawResult:any)=>{
            console.log(rawResult);
            return rawResult.data;
        }
    })

    })
})

export const {
    useJudgeEventsQuery,
    useCreateEventsMutation,
    useOrgGetCompDetailsQuery,

  } = authApi;