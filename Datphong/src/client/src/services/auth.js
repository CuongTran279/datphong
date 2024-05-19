import axiosConfig from '../axiosConfig';

export const apiRegister = (payload)=>new Promise(async(resolve,reject)=>{
    try{
        const respone = await axiosConfig({
            method:"post",
            url:'/api/register',
            data:payload
        })
        resolve(respone)
    }catch(error){
        reject(error)
    }
})
