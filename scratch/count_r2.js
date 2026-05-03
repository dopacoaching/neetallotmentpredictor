const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.allotment.count({
    where: { round: 'Round 2', counsellingBody: 'MCC', year: 2025 }
  });
  console.log(`Round 2 MCC 2025 count: ${count}`);
  await prisma.$disconnect();
}

main();
