// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require("../db/dbConfig.js");


const getOneUser = async (id) => {
    try {
        console.log("Executing query fetching one user")
        const oneUser = await db.oneOrNone("SELECT * FROM users WHERE id=$1", id)
        console.log("Query results:", oneUser)
        return oneUser;
    } catch(err) {
        console.error("Query failed user not retrieved")
        return err
    }
};
const getOneUserByEmail = async ({email}) => {
    try {
        const oneUserByEmail = await db.oneOrNone("SELECT * FROM users WHERE email=$1", email);
        return oneUserByEmail;
    } catch(err) {
        return err
    }
};
const createUser = async (user) => {
    const { firstname, lastname, email, password } = user
    try {
        const createNewUser = await db.one("INSERT INTO users (firstname, lastname, email,password) VALUES ($1, $2, $3, $4) RETURNING *", [firstname, lastname, email, password]);
        return createNewUser;
    } catch(err) {
        console.error
        return err
    }
}


module.exports = {
    getOneUser,
    getOneUserByEmail,
    createUser
}