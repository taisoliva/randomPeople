import randomPeopleRepository from "../repositories/random-people-repository"

async function getPeople(){

    const result = await randomPeopleRepository.getPeople()
    const randomId = Math.floor(Math.random() * result.length) + 1
    
    const people = await randomPeopleRepository.getPeople(randomId)
    return people 

}

const randomPeopleService = {
    getPeople
}

export default randomPeopleService