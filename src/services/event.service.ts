   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';


const findAllEventsRequest = () => {
    return {
        url: `${GLOBAL_PATH}${apiPath.ALL_EVENTS}`,
        method: 'GET',
    }
}

const participantEventRequest = (id: string) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.PARTICIPANT_EVENT}/${id}`,
        method: 'GET',
    }
}

const judgeEventRequest = (id: string) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.JUDGE_EVENT}/${id}`,
        method: 'GET',
    }
}

const joinEvent = (body:any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.JOIN_EVENT}`,
        method: 'POST',
        body: body
    }
}

const createEventRequest = (body: any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.CREATE_EVENT}`,
        method: 'POST',
        body: body
    }
}

const createTaskRequest = (body:any) => {
    return{
        url: `${GLOBAL_PATH}${apiPath.CREATE_TASK}`,
        method:`POST`,
        body:body
    }
}

const createUseCaseRequest = (body:any)=>{
    return{
        url:  `${GLOBAL_PATH}${apiPath.ADD_USECASES}`,
        method: "POST",
        body:body
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
    findAllEvents: build.query({
        query: findAllEventsRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
        },
    }),    
    judgeEvents: build.query({
        query: judgeEventRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult;
        },
    }),
    participantEvents: build.query({
        query: participantEventRequest,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult);
            return rawResult.data;
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

    joinEvent : build.mutation({
        query: joinEvent,
        transformResponse : (rawResult:any) => {

            // console.log(rawResult);
            return rawResult;
        }
    }),

    orgGetCompDetails:build.query({
        query:orgGetCompDetailsRequest,
        transformResponse: (rawResult:any)=>{
            console.log(rawResult);
            return rawResult.data;
        }
    }),

    eventCreateTask:build.mutation({
        query:createTaskRequest,
        transformResponse: (rawResult:any)=>{
            console.log(rawResult);
            return rawResult
        }
    }),

    addUseCase:build.mutation({
        query:createUseCaseRequest,
        transformResponse:(rawResult:any)=>{
            console.log(rawResult);
            return rawResult
        }
    })

    })
})

export const {
    useJudgeEventsQuery,
    useParticipantEventsQuery,
    useFindAllEventsQuery,
    useJoinEventMutation,
    useCreateEventsMutation,
    useOrgGetCompDetailsQuery,
    useEventCreateTaskMutation,
    useAddUseCaseMutation

  } = authApi;