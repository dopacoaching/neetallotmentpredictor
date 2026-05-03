import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const count = await prisma.allotment.count({
    where: {
      round: 'Round 2',
      year: 2025
    }
  });
  console.log(`Round 2 (2025) count: ${count}`);
}
main().catch(console.error).finally(() => prisma.$disconnect());
