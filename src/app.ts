import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { studenRoute } from './app/modules/sudent/student.routes';
import { UserRoutes } from './app/modules/User/user.routes';



const app:Application = express();

//parser
app.use(express.json())
app.use(cors())

app.use("/api/v1/student", studenRoute)
app.use("/api/v1/users", UserRoutes)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;