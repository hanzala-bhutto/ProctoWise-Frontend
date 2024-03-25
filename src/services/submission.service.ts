   
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
    })
})

export const {
    useRunCodeMutation,
  } = submissionApi