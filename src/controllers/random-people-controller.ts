import httpStatus from "http-status";
import { Request, Response } from "express";
import randomPeopleService from "../services/random-people-service";


async function getRandomPeople(req : Request, res : Response) {

    const people = await randomPeopleService.getPeople();
    res.status(httpStatus.OK).send(people)

}

const randomPeopleController = {
    getRandomPeople
}

export default randomPeopleController