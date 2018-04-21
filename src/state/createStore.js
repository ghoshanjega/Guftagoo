import { createStore as reduxCreateStore, combineReducers } from "redux"
import debateReducer, {initialState} from '../reducers/debatereducer'

const reducer = combineReducers({debateReducer: debateReducer})

const createStore = () => reduxCreateStore(reducer, {debateReducer: initialState})

export default createStore
