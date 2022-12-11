import {SET_DATA_JSON, SET_DATA_DETAIL, SET_DATA_COVID} from '../actionTypes/index'

let initialState = {
    postUser: [],
    detailPost: {},
    dataCovid: []
}

function dataReducer(state = initialState, action) {
    switch(action.type) {
        case SET_DATA_JSON:
            return {
                ...state,
                postUser: action.data
            }
            
        case SET_DATA_DETAIL:
            return {
                ...state,
                detailPost: action.data
            }

        case SET_DATA_COVID:
            return {
                ...state,
                dataCovid: action.data
            }

        default: {
            return state;
        }
    }
}

export default dataReducer;