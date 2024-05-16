   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const verifyParticipantRequest = (body) => {

    return {
        url: `${GLOBAL_PATH}${apiPath.VERIFY_PARTICIPANT}`,
        method: 'POST',
        body:body
    }

}

const detectFaceRequest = (body) => {

    return {
        url: `${GLOBAL_PATH}${apiPath.DETECT_FACE}`,
        method: 'POST',
        body:body
    }

}


const apiWithTags = Api.enhanceEndpoints({
    addTagTypes: ServiceTagTypes.LOGIN_SERVICE,
});

export const proctorApi = apiWithTags.injectEndpoints({
    endpoints: (build:any) => ({

        verifyParticipant: build.mutation({
            query: verifyParticipantRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                // console.log(rawResult);
                return rawResult;
            },
        }),
        detectFace: build.mutation({
            query: detectFaceRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                // console.log(rawResult);
                return rawResult;
            },
        }),


    })
})

export const {
    useVerifyParticipantMutation,
    useDetectFaceMutation
  } = proctorApi