import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlwares/globalErrorHandeler';
import notFoundMiddleware from './app/middlwares/notfound';
import router from './app/routes/index';



const app:Application = express();

//parser
app.use(express.json())
app.use(cors())

app.use("/api/v1/", router)



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


app.use(globalErrorHandler)
app.use(notFoundMiddleware)
export default app;