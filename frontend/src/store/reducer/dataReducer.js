import {SET_DATA_JSON, SET_DATA_DETAIL} from '../actionTypes/index'

let initialState = {
    postUser: [],
    detailPost: {}
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

        default: {
            return state;
        }
    }
}

export default dataReducer;