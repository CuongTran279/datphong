import actionTypes from './actionTypes';
import { apiRegister } from '../../services/auth';

export const register = (payload)=>async (dispatch)=>{
    try {
        const respone = await apiRegister(payload)
        console.log(respone);
        if(respone?.data.err === 0){
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: respone.data.token
            })
        }else{
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data:respone.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data:null
        })
    }
}