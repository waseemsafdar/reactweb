import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    auht: authReducer,
    project: projectReducer 
})

export default rootReducers