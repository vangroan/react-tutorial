import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'app/reducer';

export default configureStore({
  reducer: rootReducer,
});
