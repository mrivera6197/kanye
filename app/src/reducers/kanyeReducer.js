
import { 
    UPDATE_QUOTE, 
    UPDATE_QUOTE_SUCCESS, 
    UPDATE_QUOTE_FAIL 
} from '../actions/kanyeAction'

const initalState = {
    loading: false,
    quote: '',
    error: '',

}

export const kanyeReducer = (state = initalState, action) => {

    switch(action.type) {
        case UPDATE_QUOTE:
            return {
                ...state, 
                loading: true, 
                error: ''
            }
        case UPDATE_QUOTE_SUCCESS:
            return {
                ...state, 
                loading: false, 
                quote: action.payload,
            }
        case UPDATE_QUOTE_FAIL:
            return {
                ...state, 
                loading: false, 
                error: action.payload,
            }
        default: 
            return state
    }
}