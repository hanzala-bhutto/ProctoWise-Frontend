   
import { apiPath, GLOBAL_PATH } from '../utils/api.endpoint';
import { ServiceTagTypes } from '../utils/tagTypes';
import { Api } from './api';

const makePaymentRequest = (body:any) => {
    return {
        url: `${GLOBAL_PATH}${apiPath.MAKE_PAYMENT}`,
        method: 'POST',
        body: body
    }
}


const apiWithTags = Api.enhanceEndpoints({
    addTagTypes: ServiceTagTypes.LOGIN_SERVICE,
});

export const paymentApi = apiWithTags.injectEndpoints({
    endpoints: (build:any) => ({

        makePayment: build.mutation({
            query: makePaymentRequest,
            transformResponse : (rawResult:any) => {
                
                // eslint-disable-next-line no-console
                console.log(rawResult);
                return rawResult;
            },
        }),

    })
})

export const {
    useMakePaymentMutation,
  } = paymentApi;