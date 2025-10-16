import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create default site settings
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "BLUE WAVE LAUNDRY",
      tagline: "Fast, clean, and built for big loads.",
      hours: "Open daily, 6am–10pm",
      address: "545 SE Baseline St, Hillsboro, OR",
      email: "info@bluewavelaundry.net",
      ebt: false,
    },
  })

  // Create default services
  const services = [
    {
      title: "High-Capacity Washing",
      blurb:
        "Speed Queen Quantum Touch machines with washers up to 100 lb capacity and 200G spin for faster dry times.",
      order: 0,
    },
    {
      title: "Ozone Sanitation",
      blurb:
        "Chemical-free sanitization system that eliminates bacteria, mold, and odors while preserving fabric quality.",
      order: 1,
    },
    {
      title: "Contactless Payment",
      blurb:
        "No quarters needed - pay with Visa, Mastercard, American Express, Discover, or debit cards.",
      order: 2,
    },
    {
      title: "Multi-Language Support",
      blurb:
        "Machine instructions available in 30+ languages for our diverse community.",
      order: 3,
    },
  ]

  // Clear existing services and create new ones
  await prisma.service.deleteMany({})
  await prisma.service.createMany({
    data: services,
  })

  // Create default amenities
  const amenities = [
    { label: "Free Wi-Fi", order: 0 },
    { label: "Plenty of Parking", order: 1 },
    { label: "Pull-up Loading/Unloading", order: 2 },
    { label: "Well-Lit Facility", order: 3 },
    { label: "ADA Accessible", order: 4 },
    { label: "Security Cameras", order: 5 },
  ]

  // Clear existing amenities and create new ones
  await prisma.amenity.deleteMany({})
  await prisma.amenity.createMany({
    data: amenities,
  })

  // Create default ozone benefits
  const ozonePoints = [
    { text: "Softer, brighter linens", order: 0 },
    { text: "Longer fabric life", order: 1 },
    { text: "Eliminates odors (no heavy chemicals)", order: 2 },
    { text: "Faster dry times", order: 3 },
    { text: "Consistent sanitation every cycle", order: 4 },
    { text: "Kills mold and mildew", order: 5 },
  ]

  // Clear existing ozone points and create new ones
  await prisma.ozonePoint.deleteMany({})
  await prisma.ozonePoint.createMany({
    data: ozonePoints,
  })

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
