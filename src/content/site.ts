/**
 * Love, Violeta Rose - Centralized Content Configuration
 *
 * This file is the single source of truth for all site content.
 * Edit prices, copy, and package details here without touching components.
 *
 * Dropbox Direct Links:
 * - Change sharing links from ?dl=0 to ?raw=1 for direct video/image access
 * - Example: https://www.dropbox.com/s/abc123/video.mp4?raw=1
 */

export const site = {
  hero: {
    headline: "Love Stories Worth Reliving Forever",
    subline: "Elegant, story-driven videography crafted with heart.",
    description: "From intimate elopements to grand celebrations, we capture the moments you'll treasure for decades",
    badge: "Cinematic Wedding Films",
    ctas: {
      primary: {
        label: "View Film Packages",
        href: "#packages"
      },
      secondary: {
        label: "Watch Our Films",
        action: "openReel" as const
      }
    },
    media: {
      videoUrl: process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? "/video/hero-fallback.mp4",
      posterUrl: process.env.NEXT_PUBLIC_HERO_POSTER_URL ?? "/images/hero-poster.jpg"
    },
    stats: [
      { value: "500+", label: "Weddings Filmed" },
      { value: "10+", label: "Years Experience" },
      { value: "5.0★", label: "Average Rating" }
    ]
  },

  packages: [
    {
      id: "p1",
      name: "The 4-Hour Elopement Film",
      tagline: "Intimate moments, cinematic forever",
      summary: "Perfect for elopements and intimate ceremonies where every frame tells your story",
      idealFor: "Elopements, intimate ceremonies, courthouse weddings",
      price: 1500,
      duration: "4 hours",
      rank: 1,
      isIdeal: false,
      isUltimate: false,
      coverage: "4 hours of continuous cinematic coverage",
      deliverables: [
        "3-5 minute highlight film (cinematic edit with music)",
        "15-20 minute ceremony film (full vows and readings)",
        "All raw footage delivered on USB drive",
        "Online viewing gallery with download access",
        "Personalized music selection consultation"
      ],
      turnaround: "4 weeks for highlight film, 6 weeks for full delivery",
      notes: [
        "Ideal for couples wanting cinematic storytelling without a full-day commitment",
        "Covers ceremony, portraits, and key moments",
        "Single-camera coverage with professional audio",
        "Perfect for intimate gatherings under 50 guests"
      ]
    },
    {
      id: "p2",
      name: "The 6-Hour Wedding Film",
      tagline: "Your celebration, beginning to first dance",
      summary: "Essential cinematic coverage of your wedding day's most treasured moments",
      idealFor: "Afternoon weddings, cocktail-style receptions, budget-conscious couples",
      price: 2200,
      duration: "6 hours",
      rank: 2,
      isIdeal: false,
      isUltimate: false,
      coverage: "6 hours of continuous cinematic coverage",
      deliverables: [
        "5-7 minute highlight film (cinematic edit with music)",
        "20-30 minute feature film (extended storytelling edit)",
        "Full ceremony film (uncut, all vows and readings)",
        "All raw footage delivered on USB drive",
        "Online viewing gallery with download access",
        "Personalized music selection consultation",
        "Social media teaser (60-90 seconds)"
      ],
      turnaround: "4 weeks for highlight film, 6 weeks for full delivery",
      notes: [
        "Covers ceremony through early reception",
        "Includes first dance and key reception moments",
        "Single-camera coverage with professional audio",
        "Perfect for weddings ending by early evening"
      ]
    },
    {
      id: "p3",
      name: "The 8-Hour Full Day Film",
      tagline: "Complete cinematic storytelling, prep to party",
      summary: "Comprehensive coverage capturing the full emotional arc of your wedding day",
      idealFor: "Traditional weddings, full-day celebrations, storytelling-focused couples",
      price: 3500,
      duration: "8 hours",
      rank: 3,
      isIdeal: false,
      isUltimate: false,
      coverage: "8 hours of continuous cinematic coverage",
      deliverables: [
        "6-8 minute highlight film (cinematic edit with music)",
        "30-40 minute feature film (full narrative storytelling)",
        "Full ceremony film (uncut, multicam where possible)",
        "Toast and speech films (edited for key moments)",
        "All raw footage delivered on premium USB drive",
        "Online viewing gallery with download access",
        "Personalized music selection consultation",
        "Social media teaser (60-90 seconds)",
        "Pre-wedding consultation and shot list planning"
      ],
      turnaround: "5 weeks for highlight film, 7 weeks for full delivery",
      notes: [
        "Covers getting ready through reception dancing",
        "Includes engagement session for comfort and chemistry",
        "Single-camera with professional audio + backup recorder",
        "Most popular for traditional full-day weddings",
        "Optional second shooter available (+$600)"
      ]
    },
    {
      id: "p4",
      name: "The 10-Hour Extended Film",
      tagline: "The ideal wedding experience",
      summary: "Extended cinematic coverage ensuring no precious moment escapes the frame",
      idealFor: "Full-day celebrations, luxury weddings, couples wanting complete coverage",
      price: 5000,
      duration: "10 hours",
      rank: 4,
      isIdeal: true,
      isUltimate: false,
      coverage: "10 hours of continuous dual-camera cinematic coverage",
      deliverables: [
        "8-10 minute highlight film (cinematic edit with music)",
        "45-60 minute feature film (full narrative with chapters)",
        "Full ceremony film (uncut, multicam)",
        "Complete toast and speech films",
        "Engagement session film (3-5 minutes)",
        "All raw footage delivered on premium USB in leather box",
        "4K online viewing gallery with download access",
        "Personalized music selection consultation",
        "Social media teaser pack (3 versions: 15s, 60s, 90s)",
        "Pre-wedding consultation and detailed shot list",
        "Same-day teaser (1-2 clips within 48 hours)"
      ],
      turnaround: "3 weeks for highlight, 6 weeks for feature film and full delivery",
      notes: [
        "Dual-camera coverage for multiple perspectives",
        "Lead videographer + second shooter throughout",
        "Covers prep through late-night dancing",
        "Professional audio: wireless mics + boom",
        "Includes 2-hour engagement session",
        "Perfect balance of coverage, quality, and value",
        "Rush preview for immediate sharing"
      ]
    },
    {
      id: "p5",
      name: "The 12-Hour Complete Film",
      tagline: "The ultimate luxury cinematic experience",
      summary: "Unparalleled comprehensive coverage from sunrise preparations to midnight celebration",
      idealFor: "Destination weddings, multi-venue celebrations, luxury productions",
      price: 7500,
      duration: "12+ hours",
      rank: 5,
      isIdeal: false,
      isUltimate: true,
      coverage: "12+ hours of continuous dual-camera cinematic coverage with drone",
      deliverables: [
        "10-12 minute highlight film (cinematic masterpiece)",
        "60-90 minute feature film (full narrative with chapters)",
        "Full ceremony film (uncut, multicam)",
        "Complete toast and speech films",
        "Engagement session film (5-7 minutes, premium location)",
        "Rehearsal dinner coverage (2 hours, highlight edit)",
        "Next-day session film (brunch or bridal portraits)",
        "Drone footage (aerial establishing shots and portraits)",
        "All raw footage on premium USB in leather presentation box",
        "4K online viewing gallery with download access",
        "Custom leather-bound USB keepsake album",
        "Personalized music selection with licensed soundtrack",
        "Social media teaser pack (5 versions optimized by platform)",
        "Pre-wedding consultation with shot list and timeline",
        "Same-day highlight reel (delivered within 72 hours)"
      ],
      turnaround: "2 weeks for highlight, 5 weeks for feature and full delivery",
      notes: [
        "Two lead videographers throughout entire day",
        "Drone pilot for aerial cinematography",
        "Covers rehearsal through after-party",
        "Professional audio: multiple wireless + boom systems",
        "Includes 3-hour engagement session at premium location",
        "Includes 2-hour rehearsal dinner coverage",
        "Includes 2-hour next-day brunch/portrait session",
        "Dedicated video producer for timeline coordination",
        "Perfect for destination and multi-day celebrations",
        "Rush delivery for immediate sharing and viewing"
      ]
    }
  ],

  addOns: [
    {
      name: "Additional Hour",
      price: 350,
      description: "Extend your coverage hour by hour"
    },
    {
      name: "Second Videographer (Full Day)",
      price: 600,
      description: "Dual perspectives throughout your celebration"
    },
    {
      name: "Drone Footage",
      price: 500,
      description: "Aerial cinematic shots and establishing footage"
    },
    {
      name: "Engagement Film",
      price: 450,
      description: "2-hour pre-wedding cinematic session"
    },
    {
      name: "Same-Day Edit",
      price: 800,
      description: "Highlights played at your reception"
    },
    {
      name: "Rush Delivery",
      price: 500,
      description: "72-hour highlight film turnaround"
    },
    {
      name: "Rehearsal Dinner Coverage",
      price: 400,
      description: "2-hour coverage with highlight edit"
    },
    {
      name: "Premium USB Keepsake Box",
      price: 150,
      description: "Leather-bound presentation box with custom USB"
    }
  ],

  testimonials: [
    {
      name: "Sarah & Michael",
      package: "10-Hour Extended Film",
      date: "June 2024",
      rating: 5,
      text: "The 10-hour package was absolutely perfect! Violeta captured everything from our getting ready moments to the last dance. The dual-camera coverage meant we didn't miss a single emotion. We're so grateful we chose the extended coverage - it was worth every penny.",
      image: "/testimonials/sarah-michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      package: "12-Hour Complete Film",
      date: "September 2023",
      rating: 5,
      text: "The ultimate luxury package exceeded all expectations. Having two videographers and the drone footage created this incredible cinematic experience. The feature film is absolutely breathtaking - we watch it on every anniversary. This is an heirloom piece we'll treasure forever.",
      image: "/testimonials/emily.jpg"
    },
    {
      name: "James & Patricia",
      package: "4-Hour Elopement Film",
      date: "March 2024",
      rating: 5,
      text: "We had a small intimate ceremony and the 4-hour package was perfect for us. Violeta captured all the important moments without being intrusive. The highlight film brings tears to our eyes every time. Highly recommend for elopements!",
      image: "/testimonials/james-patricia.jpg"
    },
    {
      name: "Alexandra Chen",
      package: "8-Hour Full Day Film",
      date: "August 2023",
      rating: 5,
      text: "The 8-hour coverage gave us exactly what we needed. From getting ready through the reception, every special moment was beautifully captured. The feature film tells our story perfectly. Our families were blown away by the quality and emotion.",
      image: "/testimonials/alexandra.jpg"
    }
  ],

  workflow: [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We'll meet to discuss your vision, cinematic style preferences, and wedding day timeline. This is where we get to know each other and ensure we're the perfect creative fit.",
      icon: "calendar" as const,
      duration: "30-60 min"
    },
    {
      step: 2,
      title: "Contract & Deposit",
      description: "Once we've agreed on the package and details, you'll sign the contract and pay a 30% deposit to secure your date on our calendar.",
      icon: "document" as const,
      duration: "Same day"
    },
    {
      step: 3,
      title: "Engagement Session",
      description: "If included in your package, we'll schedule your engagement film session. This helps us build rapport, understand your chemistry, and get comfortable working together.",
      icon: "camera" as const,
      duration: "2-3 hours"
    },
    {
      step: 4,
      title: "Pre-Wedding Planning",
      description: "About a month before your wedding, we'll finalize the timeline, shot list, music preferences, and any special requests. Final payment is due two weeks before the wedding.",
      icon: "checklist" as const,
      duration: "Ongoing"
    },
    {
      step: 5,
      title: "Your Wedding Day",
      description: "We'll arrive early to capture all the cinematic moments from getting ready through the reception. Just relax, be present, and enjoy your day - we've got you covered!",
      icon: "heart" as const,
      duration: "Package hours"
    },
    {
      step: 6,
      title: "Film Delivery",
      description: "Your edited films will be delivered via a premium online gallery where you can view, download, and share. Physical USBs will arrive separately in beautiful presentation packaging.",
      icon: "gift" as const,
      duration: "2-7 weeks"
    }
  ],

  gallery: [
    {
      url: "/gallery/wedding-1.jpg",
      alt: "Bride and groom at sunset - cinematic shot",
      category: "ceremony" as const
    },
    {
      url: "/gallery/wedding-2.jpg",
      alt: "Wedding rings closeup - detail shot",
      category: "details" as const
    },
    {
      url: "/gallery/wedding-3.jpg",
      alt: "First dance - emotional moment",
      category: "reception" as const
    },
    {
      url: "/gallery/wedding-4.jpg",
      alt: "Bride getting ready - preparation",
      category: "preparation" as const
    },
    {
      url: "/gallery/wedding-5.jpg",
      alt: "Couple portrait in nature - cinematic",
      category: "portraits" as const
    },
    {
      url: "/gallery/wedding-6.jpg",
      alt: "Wedding party celebration - reception",
      category: "reception" as const
    },
    {
      url: "/gallery/wedding-7.jpg",
      alt: "Ceremony moment - vows",
      category: "ceremony" as const
    },
    {
      url: "/gallery/wedding-8.jpg",
      alt: "Reception details - decor",
      category: "details" as const
    }
  ],

  faq: [
    {
      id: "booking",
      question: "How far in advance should I book?",
      answer: "I recommend booking 9-12 months in advance, especially for peak wedding season (May-October). However, I occasionally have availability for dates within 3-6 months, so don't hesitate to reach out!"
    },
    {
      id: "deposit",
      question: "What is your deposit and payment structure?",
      answer: "I require a 30% deposit along with a signed contract to secure your date. The remaining balance is due two weeks before your wedding day. I accept payment via check, bank transfer, or credit card (3% processing fee applies)."
    },
    {
      id: "travel",
      question: "Do you travel for weddings?",
      answer: "Absolutely! I love destination weddings. Travel within 50 miles is complimentary. For destinations beyond that, I charge for travel time and expenses (flight, hotel, meals), which we'll discuss during consultation."
    },
    {
      id: "style",
      question: "How would you describe your videography style?",
      answer: "My style is cinematic, romantic, and authentic. I focus on capturing genuine emotions and candid moments while also creating beautifully composed scenes. I use natural light whenever possible and aim for a soft, elegant aesthetic with narrative-driven storytelling."
    },
    {
      id: "delivery",
      question: "When will I receive my wedding films?",
      answer: "You'll receive a teaser clip within 48-72 hours for immediate sharing. Your highlight film will be delivered within 2-4 weeks, and the full feature film within 5-7 weeks, depending on your package. All films are delivered via a premium online gallery with download access."
    },
    {
      id: "backup",
      question: "What if you can't make it to my wedding?",
      answer: "Your wedding is a once-in-a-lifetime event, and I take that responsibility seriously. I maintain backup equipment and have a network of trusted professional videographers. In the unlikely event of an emergency, I'll ensure you have excellent coverage."
    },
    {
      id: "editing",
      question: "What does your editing process include?",
      answer: "All delivered films are professionally edited for color grading, audio mixing, and cinematic enhancement. This includes selecting the best footage, syncing audio, adding music, and crafting a narrative arc. I don't provide RAW footage, as the edited films represent my artistic vision."
    },
    {
      id: "prints",
      question: "Can I download and share my films?",
      answer: "Yes! All packages include full download rights, meaning you can download, share, and save your films wherever you'd like. You'll receive high-quality video files optimized for sharing on social media, as well as full-resolution files for archival purposes."
    },
    {
      id: "family",
      question: "How do you capture audio from the ceremony and speeches?",
      answer: "I use professional wireless microphones for the officiant, couple, and speakers to ensure crystal-clear audio capture. This allows me to record every word of your vows, readings, and toasts perfectly. We'll coordinate mic placement during our pre-wedding consultation to be as unobtrusive as possible."
    },
    {
      id: "rain",
      question: "What happens if it rains on my wedding day?",
      answer: "Rain doesn't stop me! I come prepared with protective gear for equipment and creative solutions. Some of my favorite cinematic moments have been captured in the rain - it adds drama and romance. We'll work with your venue to find beautiful indoor and covered locations as backup."
    },
    {
      id: "guests",
      question: "What film lengths will I receive?",
      answer: "Every package includes multiple film deliverables. You'll receive a 3-10 minute highlight film (perfect for sharing), a 15-90 minute feature film (full narrative storytelling), and full ceremony coverage. Plus social media teasers and any additional films specified in your package. I believe in capturing every important moment while maintaining cinematic pacing."
    },
    {
      id: "timeline",
      question: "Can you help with our wedding day timeline?",
      answer: "Absolutely! I have years of experience and I'm happy to help you create a timeline that allows for beautiful cinematic moments while keeping your day flowing smoothly. I'll provide recommendations during our planning meeting to ensure optimal lighting and meaningful coverage."
    }
  ],

  trustIndicators: {
    packages: [
      { value: "500+", label: "Weddings Captured" },
      { value: "10+", label: "Years Experience" },
      { value: "5★", label: "Average Rating" },
      { value: "98%", label: "Client Satisfaction" }
    ]
  },

  sectionHeaders: {
    packages: {
      title: "Wedding Film Packages",
      subtitle: "Cinematic storytelling for your perfect day",
      description: "Each package is thoughtfully designed to capture your unique love story with artistry and elegance"
    },
    addOns: {
      title: "Enhance Your Experience",
      subtitle: "Customize your package with these premium add-ons"
    },
    cta: {
      question: "Not sure which package is right for you?",
      primary: { label: "Schedule a Consultation", href: "#contact" },
      secondary: { label: "View FAQ", href: "#faq" }
    }
  }
} as const;

// Type exports for component consumption
export type Package = typeof site.packages[number];
export type AddOn = typeof site.addOns[number];
export type Testimonial = typeof site.testimonials[number];
export type WorkflowStep = typeof site.workflow[number];
export type GalleryImage = typeof site.gallery[number];
export type FAQ = typeof site.faq[number];
