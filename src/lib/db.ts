import { Pool, neonConfig } from "@neondatabase/serverless"
import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import ws from "ws"

dotenv.config()

neonConfig.webSocketConstructor = ws

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
const db = global.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV === "development") global.prisma = db

export { db }
