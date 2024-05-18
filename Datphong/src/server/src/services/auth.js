import db from "../models";
import bccrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { RAW } from "sequelize/lib/query-types";
import {v4} from 'uuid';
require('dotenv').config()
const hashPassword = pass => bccrypt.hashSync(pass, bccrypt.genSaltSync(10))

export const  registerService = ({ email,name,pass,address,phone })=> new Promise(async(resolve,reject)=>{
    try {
        const respone = await db.User.findOrCreate({
            where: {name},
            defaults: {
                email,
                name,
                pass:hashPassword(pass),
                address,
                phone,
                id: v4()
            }
        })
        // Mã hóa
        const token = respone[1] && jwt.sign({id: respone[0].id , phone:respone[0].phone },process.env.SECRET_KEY,{expiresIn:'2d'})
        resolve({
            err:token ? 0 : 2,
            msg: token ? "Đăng ký thành công " : "Tài khoản đã tồn tại",
            token : token || null 
        })
    } catch (error) {
        reject(error)
    }
})

export const  loginService = ({name,pass})=> new Promise(async(resolve,reject)=>{
    try {
        const respone = await db.User.findOne({
            where: {name},
            raw: true
        })
        const isCorrectPass = respone && bccrypt.compareSync(pass, respone.pass)
        // Mã hóa
        const token = isCorrectPass && jwt.sign({id: respone.id , name:respone.name },process.env.SECRET_KEY,{expiresIn:'2d'})
        resolve({
            err:token ? 0 : 2,
            msg: token ? "Đăng nhập thành công " : respone ? "Mật khẩu không chính xác" : "không tìm thấy Tên người dùng",
            token : token || null 
        })
    } catch (error) {
        reject(error)
    }
})