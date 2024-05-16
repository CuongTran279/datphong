import * as authService from '../services/auth'

export const register = async (req,res) =>{
    const { email,name,pass,address,phone } = req.body;
    try {
        if(!name || !email || !pass || !address || !phone) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin: '
        })
        const respone = await authService.registerService(req.body);
        return res.status(200).json(respone)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at authController: ' + error
        })
    }
}