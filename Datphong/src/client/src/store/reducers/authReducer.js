import actionTypes from '../actions/actionTypes';
const initState = {
    isLoggedIn: false,
    isRegisted: false,
    token: null,
    msg: '',
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isRegisted: true,
                token: action.data,
                msg: '',
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isRegisted: false,
                token: action.data,
                msg: '',
            };
        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                isRegisted: false,
                msg: action.data,
                token: '',
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isRegisted: false,
                token: null,
                msg: '',
            };
        default:
            return state;
    }
};

export default authReducer;
