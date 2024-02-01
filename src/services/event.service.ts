   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const judgeEventRequest = (id: string) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.JUDGE_EVENT}/${id}`,
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

    })
})

export const {
    useJudgeEventsQuery,
  } = authApi;