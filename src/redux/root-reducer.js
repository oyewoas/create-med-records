import { combineReducers } from "redux";
import medicalRecordReducer from "./record/record.reducer";
import allRecordsReducer from "./allrecords/allrecords.reducer"
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' //using localstorage



// represent all the state(reducer) for the App

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['record', 'allrecords'] //what i want to persist
}

const rootReducer = combineReducers({
    record: medicalRecordReducer,
    allrecords: allRecordsReducer,
    
})

export default  persistReducer(persistConfig, rootReducer)
