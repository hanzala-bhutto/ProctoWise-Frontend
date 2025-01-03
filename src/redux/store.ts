import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Api } from '../services/api';
import authReducer from './authSlice';
// import taskReducer from './taskSlice';
import taskReducer from './taskSlice';
import singleTaskReducer from './singleTaskSlice';
import submissionReducer from './submissionSlice';

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import taskSlice from './taskSlice';


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api', 'task']
}

const rootReducer = combineReducers({
  [Api.reducerPath]: Api.reducer,  
  auth: authReducer,
  tasks: taskReducer,
  task: singleTaskReducer,
  submission: submissionReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },}).concat(Api.middleware),
  }
  ,
  

);

const persistor = persistStore(store)

export {persistor,store}

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


setupListeners(store.dispatch);