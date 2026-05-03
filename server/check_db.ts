import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const total = await prisma.allotment.count();
  const mccCount = await prisma.allotment.count({ where: { counsellingBody: 'MCC' } });
  const keralaCount = await prisma.allotment.count({ where: { counsellingBody: 'CEE Kerala' } });
  console.log(`Total allotments: ${total}`);
  console.log(`MCC allotments: ${mccCount}`);
  console.log(`Kerala allotments: ${keralaCount}`);
}
main().catch(console.error).finally(() => prisma.$disconnect());
