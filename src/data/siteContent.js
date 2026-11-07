const contactEmail = "hq@tuumest.net";
const quoteHref = `mailto:${contactEmail}?subject=Mac%20rental%20quote`;

export const siteContent = {
  brandName: "Tuum Est",
  legalName: "Tuum Est LLC",
  contactEmail,
  quoteHref,
  navItems: [
    { id: "rentals", label: "Rentals", href: "/rentals" },
    { id: "services", label: "Services", href: "/services" },
    { id: "about", label: "About", href: "/about" },
  ],
  footer: {
    tagline: "Dedicated Apple silicon Macs, hosted in Florida.",
    copyright: "© Tuum Est LLC 2026",
  },
  // Closing call-to-action band shown at the bottom of every page.
  cta: {
    title: "Your Mac is waiting.",
    subtitle: "Tell us the model, configuration and term — we reply with a written quote.",
    label: "Request a quote",
  },
};

// The machines on offer. Card photos are crops of the hero photograph.
export const machines = [
  {
    id: "mac-mini",
    name: "Mac mini",
    tagline: "Small machine. Serious capacity.",
    image: "mac-mini.jpg",
    context:
      "Compact and efficient — the most cost-effective way to get a dedicated Mac, for headless work over SSH or a desktop over Screen Sharing.",
    bestFor:
      "iOS and macOS build and test machines, CI runners, automation and everyday remote desktop work.",
    bullets: [
      { lead: "Scales out", body: "rent one or a rack of identical units, each configured the same way." },
      { lead: "Configurations", body: "choose memory and storage to match the job." },
    ],
  },
  {
    id: "mac-studio",
    name: "Mac Studio",
    tagline: "Workstation power, from anywhere.",
    image: "mac-studio.jpg",
    context:
      "Desktop power for the heaviest workloads: high-resolution video, 3D, audio post-production, large builds and local machine learning.",
    bestFor:
      "video editing, colour grading, visual effects, large compiles and short-term compute needs.",
    bullets: [
      {
        lead: "Configurations",
        body: "choose memory and storage to match the job; higher-tier chips available on request.",
      },
    ],
  },
];

export const steps = [
  {
    title: "Request a quote",
    body: "Tell us the model, configuration, quantity and term. We reply with a written quote.",
  },
  {
    title: "We provision",
    body: "A clean macOS install on your dedicated machine, with your SSH keys and Screen Sharing access set up.",
  },
  {
    title: "Connect",
    body: "Log in over SSH or Screen Sharing with full admin rights and start working.",
  },
  {
    title: "End of term",
    body: "Extend, add machines, or hand it back. Every Mac is securely erased before it goes to anyone else.",
  },
];

export const pages = {
  home: {
    id: "home",
    path: "/",
    documentTitle: "Tuum Est — Mac rentals in Florida",
    hero: {
      headline: "Rent a Mac.",
      subhead: "Run it from anywhere.",
      body: "Tuum Est rents dedicated Mac mini and Mac Studio machines from a data center in Florida. The whole machine is yours — ready over SSH or Screen Sharing.",
      secondary: { label: "See the machines", href: "/rentals" },
      image: {
        src: "hero-macs.jpg",
        alt: "A Mac mini and a Mac Studio side by side on a desk",
        width: 1254,
        height: 500,
      },
    },
    features: [
      { icon: "cloud", title: "Access remotely", body: "SSH or Screen Sharing, from wherever you work." },
      { icon: "bolt", title: "High performance", body: "Bare-metal Apple silicon. No virtual machines, no neighbors." },
      { icon: "laptop", title: "No hardware. No setup.", body: "We rack, power and connect it. You just log in." },
    ],
    machinesSection: {
      eyebrow: "The machines",
      title: "Macs.",
      titleAccent: "Built for real work.",
    },
    stepsSection: {
      eyebrow: "How it works",
      title: "From quote to login.",
      titleAccent: "Four steps.",
    },
    statement: {
      eyebrow: "Tuum est — it is yours",
      quote: "When you rent one, the whole machine is yours.",
      body: "No virtual machines, no neighbors, no shared CPU. You get full admin access to a real Mac.",
      link: { label: "About Tuum Est", href: "/about" },
    },
  },
  rentals: {
    id: "rentals",
    path: "/rentals",
    documentTitle: "Rentals | Tuum Est",
    eyebrow: "Rentals",
    title: "Macs.",
    titleAccent: "Built for real work.",
    intro:
      "Tuum Est rents two machines: Mac mini and Mac Studio, both on Apple silicon, by the day, week or month. Pricing depends on the configuration and the term, so every quote is written for your project.",
  },
  services: {
    id: "services",
    path: "/services",
    documentTitle: "Services | Tuum Est",
    eyebrow: "Services",
    title: "A real Mac,",
    titleAccent: "wherever you work.",
    intro:
      "Dedicated Mac mini and Mac Studio machines in our Florida data center, rented by the day, week or month. We look after the hardware, power and network; you get the whole machine, over SSH or Screen Sharing.",
    stepsSection: {
      eyebrow: "How it works",
      title: "From quote to login.",
      titleAccent: "Four steps.",
    },
    items: [
      {
        icon: "chip",
        name: "Dedicated hardware",
        tag: "Every rental",
        context: "The whole machine is yours. No virtual machines, no neighbors, no shared CPU.",
        bullets: [
          { lead: "Bare-metal Apple silicon", body: "every CPU and GPU core, all of the memory and the full disk belong to your workload alone." },
          { lead: "Predictable performance", body: "nobody else's jobs run on your Mac, so build and render times stay consistent." },
        ],
      },
      {
        icon: "terminal",
        name: "Full admin access",
        tag: "Your Mac, your rules",
        context: "A real Mac you control end to end, reachable from anywhere.",
        bullets: [
          { lead: "SSH", body: "for terminals, scripts, build tooling and automation." },
          { lead: "Screen Sharing", body: "the full macOS desktop, for apps that need a GUI." },
          { lead: "Administrator rights", body: "install any software, change system settings and reboot when you need to." },
        ],
      },
      {
        icon: "code",
        name: "Developer & CI",
        tag: "Mac mini · Mac Studio",
        context: "macOS capacity for teams building for Apple platforms.",
        bullets: [
          { lead: "Build and test", body: "Xcode builds, simulators, code signing and notarization on hardware you don't have to buy." },
          { lead: "Self-hosted CI runners", body: "dedicated machines for your pipelines, with no queue shared with strangers." },
          { lead: "Burst capacity", body: "extra machines for a release crunch, returned when it's over." },
        ],
      },
      {
        icon: "film",
        name: "Rendering & compute",
        tag: "Mac Studio",
        context: "Heavy creative and compute work on Apple silicon, without a workstation under your desk.",
        bullets: [
          { lead: "Video, 3D and audio", body: "encode, render and export remotely, and work interactively over Screen Sharing." },
          { lead: "Machine learning", body: "run and fine-tune models locally on Apple silicon with large unified memory." },
        ],
      },
      {
        icon: "shield",
        name: "Hosting & support",
        tag: "Included",
        context: "Included with every rental.",
        bullets: [
          { lead: "Hosted in Florida", body: "racked, powered and connected in our data center." },
          { lead: "Hardware support", body: "if a machine has a fault, we troubleshoot it or replace it." },
          { lead: "Secure erase", body: "every Mac is wiped between customers." },
        ],
      },
    ],
  },
  about: {
    id: "about",
    path: "/about",
    documentTitle: "About | Tuum Est",
    eyebrow: "About",
    title: "It is yours,",
    titleAccent: "for as long as you need it.",
    intro:
      "Tuum Est rents dedicated Apple silicon Macs, hosted in a data center in Florida. When you rent one, the whole machine is yours. No virtual machines, no neighbors, no shared CPU. You get full admin access to a real Mac, ready to work over SSH or Screen Sharing.",
    audience: {
      title: "Who we serve",
      items: [
        { lead: "Engineering teams", body: "that need macOS build, test and CI capacity for iOS and macOS apps." },
        { lead: "Developers", body: "who need a real Mac without owning one, or a second Mac alongside their own machine." },
        { lead: "Creative and media teams", body: "rendering, encoding and editing on Mac Studio from wherever they work." },
        { lead: "Businesses", body: "running macOS-only software or automation around the clock." },
      ],
    },
    location: {
      title: "Where we are",
      place: "Florida",
      body: "Every Mac is hosted in a data center in Florida. You reach it over SSH or Screen Sharing from wherever you work.",
    },
  },
};
