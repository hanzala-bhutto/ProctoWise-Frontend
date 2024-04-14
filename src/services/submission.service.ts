   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const runCodeRequest = (body:any) => {
    return{
        url: `${GLOBAL_PATH}${apiPath.RUN_CODE}`,
        method: 'POST',
        body: body
    }
}  

const submitCodeRequest = (body:any) => {
    return{
        url: `${GLOBAL_PATH}${apiPath.SUBMIT_CODE}`,
        method: 'POST',
        body: body
    }
}

const submissionStatusRequest = (body:any) => {

    const {eventID, participantID} = body;

    return {
        url: `${GLOBAL_PATH}${apiPath.SUBMISSION_STATUS}/${participantID}/${eventID}`,
        method: 'GET',
    }
}

const submitEventRequest = (body:any) => {
    return{
        url: `${GLOBAL_PATH}${apiPath.SUBMIT_EVENT}`,
        method: 'POST',
        body: body
    }
}

const apiWithTags = Api.enhanceEndpoints({
    addTagTypes: ServiceTagTypes.LOGIN_SERVICE,
});

export const submissionApi = apiWithTags.injectEndpoints({
    endpoints: (build:any) => ({

        runCode: build.mutation({
            query: runCodeRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                // console.log(rawResult);
                return rawResult;
            },
        }),
        submitCode: build.mutation({
            query: submitCodeRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                // console.log(rawResult);
                return rawResult;
            },
        }),
        submitEvent: build.mutation({
            query: submitEventRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                // console.log(rawResult);
                return rawResult;
            },
        }),
        submissionStatus: build.query({
            query: submissionStatusRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                console.log(rawResult);
                return rawResult.data;
            },
        }), 
    })
})

export const {
    useRunCodeMutation,
    useSubmitCodeMutation,
    useSubmitEventMutation,
    useSubmissionStatusQuery
  } = submissionApi