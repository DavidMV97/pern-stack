import dotenv from 'dotenv'

dotenv.config()

const db = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:  process.env.DB_HOST,
    database:  process.env.DB_DATABASE,
}

export default db