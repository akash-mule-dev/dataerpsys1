export type HeroImage = { url: string; credit: string; alt: string };

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop&fm=jpg`;

export const SERVICE_IMAGES: Record<string, HeroImage> = {
  sap: {
    url: u("1518770660439-4636190af475"),
    credit: "Alexandre Debiève",
    alt: "Close-up of an enterprise circuit board with glowing connectors",
  },
  oracle: {
    url: u("1558494949-ef010cbdcc31"),
    credit: "Massimo Botturi",
    alt: "Densely cabled data-center server rack",
  },
  "mobile-app-development": {
    url: u("1512941937669-90a1b58e7e9c"),
    credit: "Rami Al-zayat",
    alt: "Smartphone home screen showing an array of mobile apps",
  },
  "software-testing-qa": {
    url: u("1531297484001-80022131f5a1"),
    credit: "Lukas Blazek",
    alt: "Code editor on a high-resolution laptop screen",
  },
  "application-development": {
    url: u("1551434678-e076c223a692"),
    credit: "Mimi Thian",
    alt: "Two software engineers pair-programming",
  },
  "application-support": {
    url: u("1454165804606-c3d57bc86b40"),
    credit: "Andrew Neel",
    alt: "Operations workspace with multiple monitors and analytics",
  },
  "consulting-services": {
    url: u("1517048676732-d65bc937f952"),
    credit: "Mapbox",
    alt: "Strategy meeting between consultants at a modern conference table",
  },
  offshore: {
    url: u("1519389950473-47ba0277781c"),
    credit: "Marvin Meyer",
    alt: "Distributed engineering team collaborating in an open office",
  },
  "staffing-services": {
    url: u("1556761175-5973dc0f32e7"),
    credit: "krakenimages",
    alt: "Recruiter reviewing a candidate profile during an interview",
  },
};

export const INDUSTRY_IMAGES: Record<string, HeroImage> = {
  manufacturing: {
    url: u("1581092580497-e0d23cbdf1dc"),
    credit: "ThisisEngineering",
    alt: "Engineer monitoring a precision manufacturing process",
  },
  "health-care": {
    url: u("1576091160550-2173dba999ef"),
    credit: "National Cancer Institute",
    alt: "Medical research equipment in a clean hospital lab",
  },
  pharmaceutical: {
    url: u("1532187863486-abf9dbad1b69"),
    credit: "Louis Reed",
    alt: "Pharmaceutical scientist inspecting samples in a laboratory",
  },
  transportation: {
    url: u("1601584115197-04ecc0da31d7"),
    credit: "Marcin Jozwiak",
    alt: "Heavy truck on an open highway",
  },
  aerospace: {
    url: u("1474302770737-173ee21bab63"),
    credit: "Daniel Eledut",
    alt: "Private jet parked on a runway at golden hour",
  },
  "service-sector": {
    url: u("1497366216548-37526070297c"),
    credit: "Copernico",
    alt: "Bright modern office workspace serving the service industry",
  },
};

export const CAREERS_IMAGE: HeroImage = {
  url: u("1543269865-cbf427effbad"),
  credit: "Brooke Cagle",
  alt: "Diverse young team in a friendly working conversation",
};
