import { combineReducers } from "redux";
import medicalRecordReducer from "./record/record.reducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' //using localstorage
// import comparisonReducer from "./compare/compare.reducer";
// import historyReducer from "./history/history.reducer";


// represent all the state(reducer) for the App

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['record', 'medrecord'] //what i want to persist
}

const rootReducer = combineReducers({
    record: medicalRecordReducer,
    // comparison: comparisonReducer,
    // history: historyReducer
    
})

export default  persistReducer(persistConfig, rootReducer)
