import { db } from "../database/database"


async function getPeople(id?:number){

    let query = `SELECT * FROM people`
    let values: number[] = []

    if(!isNaN(id)){
        query += ` WHERE id = $1`
        values.push(id)
    } 

    const result = await db.query(query, values)
    return result.rows
    
}

const randomPeopleRepository = {
    getPeople
}

export default randomPeopleRepository