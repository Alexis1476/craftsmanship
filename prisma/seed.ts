import "dotenv/config";
import {PrismaClient} from "./generated/client";
import {PrismaPg} from "@prisma/adapter-pg";

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL!});
const prisma = new PrismaClient({adapter});

async function main() {
    const alex = await prisma.user.create({
        data: {
            fullName: "Alexis Rojas",
            email: "alex@prisma.io",
        },
    });
    console.log(`Created user: ${alex.fullName}`);
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });