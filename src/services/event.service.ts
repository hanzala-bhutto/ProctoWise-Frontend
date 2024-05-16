   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';


const findAllEventsRequest = () => {
    return {
        url: `${GLOBAL_PATH}${apiPath.ALL_EVENTS}`,
        method: 'GET',
    }
}

const findEventDetails = (id: string) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.EVENT}/${id}`,
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

const leaveEventRequest = (body:any)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.LEAVE_EVENT}`,
        method: 'DELETE',
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

const participantDetailsRequest = ()=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.GET_PARTICIPANTS}`,
        method: 'GET',
    }
}

const participantWRTEventDetailsRequest = (eventID: string)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.GET_PARTICIPANTS_WRT_EVENTS}/${eventID}`,
        method: 'GET',
    }
}

const judgeWRTEventDetailsRequest = (eventID: string)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.GET_JUDGE_WRT_EVENTS}/${eventID}`,
        method: 'GET',
    }
}

const getTaskRequest = (taskID: string)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.GET_TASK}/${taskID}`,
        method: 'GET',
    }
}

const participantSubmission = (eventID:string)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.GET_PARTICIPANTS_SUBMISSION}/${eventID}`,
        method: 'GET',
    }
}

const deleteUseCaseRequest = (taskID:string)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.DELETE_USECASE}/${taskID}`,
        method: 'DELETE',
    }
}

const deleteTaskRequest = (taskID:string)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.DELETE_TASK}/${taskID}`,
        method: 'DELETE',
    }
}

const deleteParticipantFromEvent = (body:any) => {
    return{
        url: `${GLOBAL_PATH}${apiPath.DELETE_PARTICIPANT_FROM_EVENT}`,
        method: 'DELETE',
        body:body
    }
}

const deleteJudgeFromEvent = (body:any) => {
    return{
        url: `${GLOBAL_PATH}${apiPath.DELETE_JUDGE_FROM_EVENT}`,
        method: 'DELETE',
        body:body
    }
}

const eventUpdateTaskRequest = (body : any)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.EVENT_UPDATE_TASK}`,
        method: 'POST',
        body:body
    }
}

const judgeJoinEvent = (body:any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.JUDGE_JOIN_EVENT}`,
        method: 'POST',
        body: body
    }
}
const getAllTasksRequest = (eventID:string)=>{
    return {
        url: `${GLOBAL_PATH}${apiPath.GET_ALL_TASKS}/${eventID}`,
        method: 'GET'
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
    findEventDetails : build.query({
        query: findEventDetails,
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

    leaveEvent: build.mutation({
        query: leaveEventRequest,
        transformResponse: (rawResult:any)=>{
            return rawResult
        }
    }), 

    orgGetCompDetails:build.query({
        query:orgGetCompDetailsRequest,
        transformResponse: (rawResult:any)=>{
            console.log(rawResult);
            return rawResult.data;
        }
    }),
    participantDetails:build.query({
        query:participantDetailsRequest,
        transformResponse:(rawResult:any)=>{
            console.log(rawResult);
            return rawResult;
        }
    }),

    participantWRTEventsDetails:build.query({
        query:participantWRTEventDetailsRequest,
        transformResponse:(rawResult:any)=>{
            console.log(rawResult.data);
            return rawResult.data;
        }
    }),

    judgeWRTEventsDetails:build.query({
        query:judgeWRTEventDetailsRequest,
        transformResponse:(rawResult:any)=>{
            console.log(rawResult.data);
            return rawResult.data;
        }
    }),

    getTask: build.query({
        query: getTaskRequest,
        transformResponse:(rawResult:any)=>{
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
    }),

    deleteParticipantFromEvent: build.mutation({
        query: deleteParticipantFromEvent,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult.data);
            return rawResult;
        },
    }),

    deletejudgeFromEvent: build.mutation({
        query: deleteJudgeFromEvent,
        transformResponse : (rawResult:any) => {
            
            // eslint-disable-next-line no-console
            console.log(rawResult.data);
            return rawResult;
        },
    }),

    judgeJoinEvent : build.mutation({
        query: judgeJoinEvent,
        transformResponse : (rawResult:any) => {

            // console.log(rawResult);
            return rawResult;
        }
    }),

    eventUpdateTask : build.mutation({
        query: eventUpdateTaskRequest,
        transformResponse: (rawResult:any)=>{
            return rawResult
        }
    }),

    deleteUseCase: build.mutation({
        query: deleteUseCaseRequest,
        transformResponse: (rawResult:any)=>{
            return rawResult
        }
    }), 
    deleteTask: build.mutation({
        query: deleteTaskRequest,
        transformResponse: (rawResult:any)=>{
            return rawResult
        }
    }), 
    getAllTasks: build.query({
        query: getAllTasksRequest,
        transformresponse:(rawResult:any)=>{
            return rawResult;
        }
    }),
    participantSubmission: build.query({
        query: participantSubmission,
        trasformResponse:(rawResult:any)=>{
            return rawResult.data;
        }

    })

    })
})

export const {
    useJudgeEventsQuery,
    useParticipantEventsQuery,
    useFindAllEventsQuery,
    useFindEventDetailsQuery,
    useJoinEventMutation,
    useLeaveEventMutation,
    useCreateEventsMutation,
    useOrgGetCompDetailsQuery,
    useEventCreateTaskMutation,
    useAddUseCaseMutation,
    useParticipantDetailsQuery,
    useDeleteParticipantFromEventMutation,
    useParticipantWRTEventsDetailsQuery,
    useJudgeWRTEventsDetailsQuery,
    useDeletejudgeFromEventMutation,
    useJudgeJoinEventMutation,
    useGetTaskQuery,
    useGetAllTasksQuery,
    useEventUpdateTaskMutation,
    useDeleteUseCaseMutation,
    useDeleteTaskMutation,
    useParticipantSubmissionQuery

  } = authApi;