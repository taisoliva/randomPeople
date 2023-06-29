import { Router } from "express";
import randomPeopleController from "../controllers/random-people-controller";

const randomPeople = Router()
randomPeople.get("/person", randomPeopleController.getRandomPeople)

export default randomPeople;