   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const GetTaskByTaskIDRequest = (taskID: string) => {
    return{
        url: `${GLOBAL_PATH}${apiPath.GET_TASK_TASK_ID}/${taskID}`,
        method: 'GET',
    }
}  

const getAllTaskByEventIDRequest = (eventID: string)=>{
    return{
        url: `${GLOBAL_PATH}${apiPath.GET_ALL_TASKS_EVENT_ID}/${eventID}`,
        method: 'GET',
    }
}


const apiWithTags = Api.enhanceEndpoints({
    addTagTypes: ServiceTagTypes.LOGIN_SERVICE,
});

export const taskApi = apiWithTags.injectEndpoints({
    endpoints: (build:any) => ({

        getTaskByTaskID: build.query({
            query: GetTaskByTaskIDRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                console.log(rawResult);
                return rawResult.data;
            },
        }),

        getAllTasksByEventID: build.query({
            query: getAllTaskByEventIDRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                console.log(rawResult);
                return rawResult.data;
            },
        }),
    })
})

export const {
    useGetAllTasksByEventIDQuery,
    useGetTaskByTaskIDQuery
  } = taskApi