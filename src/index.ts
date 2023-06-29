import  express, { Request,Response}  from "express";
import randomPeople from "./routers/random-people-router"

const app = express()

app.get("/health", (req: Request, res : Response) => {
    res.status(200).send("to de boa")
})

app.use(randomPeople)

app.listen(5000, () => {
    console.log("Server is running")
})