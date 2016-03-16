import { createAction, handleActions } from 'redux-actions';

export const INITIAL_COUNTER = 'app/todo/initial_counter';
const initialState = 'initialstate';
const reducer = handleActions({
    [INITIAL_COUNTER]: (state, action) => {
        if(state === 'initialstate') {
            return 1;
        }else {
            return state+1;
        }
    }
}, initialState);
export default reducer;

export const initialCounter = createAction(INITIAL_COUNTER);

export function initial() {
    return (dispatch) => {
        return dispatch(initialCounter());
    }
}