import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.allotment.updateMany({
    where: { counsellingBody: "CEE Kerala" },
    data: { counsellingBody: "Kerala CEE" },
  });
  console.log(`Updated ${count.count} records: 'CEE Kerala' → 'Kerala CEE'`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
