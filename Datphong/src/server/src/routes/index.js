import authRouter from './auth';

const initRoutes = (app)=>{
    app.use('/api/',authRouter)

    return app.use('/',(req,res)=>{
        res.send("Server on ");
    })
}

export default initRoutes