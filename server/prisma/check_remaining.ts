import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function checkRemaining() {
  const standardSpecialties = [
    "CONSERVATIVE DENTISTRY AND ENDODONTICS",
    "ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS",
    "ORAL AND MAXILLOFACIAL SURGERY",
    "PROSTHODONTICS AND CROWN & BRIDGE",
    "PERIODONTOLOGY",
    "PEDIATRIC AND PREVENTIVE DENTISTRY",
    "ORAL MEDICINE AND RADIOLOGY",
    "ORAL PATHOLOGY AND MICROBIOLOGY",
    "PUBLIC HEALTH DENTISTRY"
  ];

  const allotments = await prisma.allotment.findMany({
    where: {
      specialty: {
        notIn: standardSpecialties
      }
    },
    select: { specialty: true }
  });

  const unique = [...new Set(allotments.map(a => a.specialty))];
  console.log("Remaining Non-Standard Specialties:", JSON.stringify(unique, null, 2));
}

checkRemaining().catch(console.error).finally(() => prisma.$disconnect());
