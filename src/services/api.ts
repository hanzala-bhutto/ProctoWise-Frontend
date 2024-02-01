import {
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
    BaseQueryFn,
    FetchArgs,
  } from '@reduxjs/toolkit/query/react';
  
  // Redux
  import { setAuth } from '../redux/authSlice';
  // import { RootState } from '../redux/store';
  import { apiPath, API_BASE_URL, GLOBAL_PATH } from '../utils/api.endpoint';
  import queryString from 'query-string';
  
  // API Path
  
  import { SIGN_OUT_END_POINT, WHITE_LIST_PUBLIC_ENDPOINTS } from '../utils/constants';
//   import { IProfileApiData } from './response.interface';
  
  // initialize an empty api service that we'll inject endpoints into later as needed
  export const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, {endpoint }) => {
      if (endpoint === SIGN_OUT_END_POINT) {
        // const user = (getState() as RootState)?.auth?.user as any;
        // headers.set('email', user.email);
      }
    //   headers.set('x-custom-lang', i18next.language);
      return headers;
    },
    paramsSerializer: (params: Record<string, unknown>) =>
      queryString.stringify(params, { arrayFormat: 'none' }),
  });
  
  export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result?.error?.status === 401 && !WHITE_LIST_PUBLIC_ENDPOINTS.includes(api.endpoint)) {
      const newAccessToken = await baseQuery(
        `${GLOBAL_PATH}${apiPath.RENEW_ACCESS_TOKEN}`,
        api,
        extraOptions,
      );
      if (newAccessToken.error && newAccessToken.error.status === 401) {
        api.dispatch(setAuth({ isAuthenticated: false, user: null }));
        return newAccessToken;
      }
      result = await baseQuery(args, api, extraOptions);
    }
    return result;
  };
  
  export const Api = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
  });