
export const BUSINESS_INFO = {
  name: "L.A to O.C Plumbing Pro",
  type: "PlumbingService",
  phone: "+1 323-239-8505",
  email: "latoocplumbingpro@outlook.com",
  address: {
    street: "Los Angeles and nearby areas",
    city: "Los Angeles",
    state: "CA",
    zip: "90020",
    country: "United States"
  },
  areas: [
    "Los Angeles", "Santa Monica", "Beverly Hills", "Pasadena", "Long Beach",
    "Anaheim", "Irvine", "Santa Ana", "Huntington Beach", "Newport Beach",
    "Garden Grove", "Fullerton", "Orange", "Costa Mesa", "Mission Viejo"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75dd41d54f5%3A0xfdb1d983b8a540!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1710123456789!5m2!1sen!2sus",
  social: {
    whatsapp: "https://wa.me/13232398505"
  }
};

export const SERVICES = [
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing",
    slug: "emergency-plumbing",
    description: "24/7 rapid response for burst pipes, severe leaks, and urgent plumbing failures.",
    icon: "AlertTriangle",
    features: ["24/7 Availability", "Fast Response Time", "Expert Diagnostics", "Licensed Technicians"]
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    slug: "drain-cleaning",
    description: "Professional hydro-jetting and snaking to clear even the toughest clogs.",
    icon: "Droplets",
    features: ["Hydro-Jetting", "Video Inspection", "Root Removal", "Preventative Maintenance"]
  },
  {
    id: "water-heater-repair",
    title: "Water Heater Services",
    slug: "water-heater-services",
    description: "Repair, maintenance, and installation of traditional and tankless water heaters.",
    icon: "Thermometer",
    features: ["Tankless Specialists", "Gas & Electric", "Energy Efficiency", "Same-Day Service"]
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    slug: "leak-detection",
    description: "Advanced non-invasive technology to find hidden leaks before they cause damage.",
    icon: "Search",
    features: ["Electronic Detection", "Slab Leak Repair", "Wall Leak Location", "Minimal Destruction"]
  },
  {
    id: "pipe-repair",
    title: "Pipe Repair & Repiping",
    slug: "pipe-repair",
    description: "Comprehensive solutions for copper, PEX, and galvanized piping systems.",
    icon: "Wrench",
    features: ["Whole-Home Repiping", "Burst Pipe Repair", "Corrosion Solutions", "Code Compliance"]
  },
  {
    id: "sewer-line-services",
    title: "Sewer Line Services",
    slug: "sewer-line-services",
    description: "Trenchless sewer repair and replacement to save your landscaping.",
    icon: "Waves",
    features: ["Trenchless Technology", "Main Line Cleaning", "Sewer Camera Scans", "Tree Root Removal"]
  }
];

export const BLOG_TOPICS = [
  { title: "10 Signs You Have a Hidden Water Leak", slug: "signs-hidden-water-leak" },
  { title: "How to Prevent Frozen Pipes in Southern California", slug: "prevent-frozen-pipes-socal" },
  { title: "Tankless vs. Traditional Water Heaters: Which is Best?", slug: "tankless-vs-traditional-water-heaters" },
  { title: "The Ultimate Guide to Drain Maintenance", slug: "guide-drain-maintenance" },
  { title: "Why Your Water Bill is Suddenly High", slug: "high-water-bill-causes" },
  { title: "Emergency Plumbing: What to Do Before the Plumber Arrives", slug: "emergency-plumbing-tips" },
  { title: "Common Causes of Low Water Pressure", slug: "low-water-pressure-causes" },
  { title: "Eco-Friendly Plumbing Upgrades for Your Home", slug: "eco-friendly-plumbing-upgrades" },
  { title: "How to Choose the Right Plumber in Los Angeles", slug: "choosing-plumber-los-angeles" },
  { title: "Understanding Your Home's Main Water Shut-Off Valve", slug: "main-water-shut-off-guide" }
];

export const FAQS = [
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Yes, we provide round-the-clock emergency plumbing services across Los Angeles and Orange County. Call us anytime at +1 323-239-8505."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Greater Los Angeles area and Orange County, including Santa Monica, Beverly Hills, Anaheim, Irvine, and surrounding cities."
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Absolutely. All our technicians are fully licensed, bonded, and insured to ensure the highest quality of service and protection for your property."
  },
  {
    question: "How much does a typical service call cost?",
    answer: "Service costs vary depending on the complexity of the job. We offer free estimates and transparent pricing with no hidden fees."
  }
];
