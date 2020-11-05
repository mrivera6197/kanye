
import axios from 'axios'

export const UPDATE_QUOTE = 'UPDATE_QUOTE'
export const UPDATE_QUOTE_SUCCESS = 'UPDATE_QUOTE_SUCCESS'
export const UPDATE_QUOTE_FAIL = 'UPDATE_QUOTE_FAIL'

export const updateQuote = () => (dispatch) => {
    dispatch({type: UPDATE_QUOTE})

    axios.get('https://api.kanye.rest')
    .then(res => {
        // console.log('here is the quote', res.data.quote)
        dispatch({type: UPDATE_QUOTE_SUCCESS, payload: res.data.quote})
    },[])
    .catch(err => {
        console.log(err)
        dispatch({type: UPDATE_QUOTE_FAIL, payload: err.message})
    })
}