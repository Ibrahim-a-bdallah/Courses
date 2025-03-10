//Redux
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//Slices
// import auth from "./signInAuth/authSlice.js";
// import courses from "./courses/coursesSlice.js";

//axios
import "../services/axios.global.js";
import coursesReducer from "./coursesSlice/coursesSlice.js";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["courses"], // only navigation will be persisted
};

const coursesPersistConfig = {
  key: "courses",
  storage,
  whitelist: ["records"],
};

const rootReducer = combineReducers({
  courses: persistReducer(coursesPersistConfig, coursesReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };

export default persistReducer(rootPersistConfig, rootReducer);
