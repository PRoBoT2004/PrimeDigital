// This file exports an array of project objects
export const projectsData = [
  {
    id: 1,
    slug: 'ecommerce-platform', // Unique slug for URL
    title: 'E-Commerce Platform',
    category: 'Web Development',
    client: 'Global Retailer Inc.',
    duration: '6 Months',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'GraphQL'],
    heroImage: 'https://picsum.photos/1200/600?random=1', // Placeholder hero image
    description: 'A robust and scalable e-commerce platform designed for high-traffic retail operations. Features real-time inventory, advanced analytics, and personalized shopping experiences.',
    challenge: 'To build a high-performance e-commerce solution capable of handling millions of users while providing a seamless, secure, and personalized shopping journey.',
    solution: 'We architected a microservices-based system with React for the frontend and Node.js with GraphQL for efficient data fetching. Implemented secure payment gateways and optimized database queries for speed.',
    results: [
      '300% increase in conversion rate within first 6 months.',
      '50% reduction in page load times, improving user experience.',
      'Achieved 99.9% uptime during peak sales periods.',
      'Enabled personalized product recommendations, boosting average order value by 25%.'
    ],
    testimonial: {
      text: "PrimeDigital truly understood our vision and delivered a platform that exceeded our expectations. Their attention to detail and technical prowess are unmatched.",
      author: "Jane Doe",
      position: "CEO, Global Retailer Inc."
    },
    // You can add more images/sections here
    gallery: [
      'https://picsum.photos/800/500?random=11',
      'https://picsum.photos/800/500?random=12',
      'https://picsum.photos/800/500?random=13'
    ]
  },
  {
    id: 2,
    slug: 'mobile-banking-app',
    title: 'Secure Mobile Banking App',
    category: 'Mobile App',
    client: 'FinTech Innovators',
    duration: '8 Months',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'AWS Amplify', 'Biometric Auth'],
    heroImage: 'https://picsum.photos/1200/600?random=2',
    description: 'An intuitive and highly secure mobile banking application, offering real-time transaction monitoring, budgeting tools, and biometric authentication.',
    challenge: 'To develop a mobile banking app that combines bank-grade security with an exceptionally user-friendly interface, encouraging high daily engagement.',
    solution: 'Leveraged React Native for cross-platform development, integrated advanced encryption protocols, and implemented streamlined UX flows based on extensive user research and testing.',
    results: [
      'Achieved 4.9-star rating on app stores within 3 months of launch.',
      'Increased daily active users by 70% due to intuitive design.',
      'Zero reported security incidents since deployment.',
      'Enabled seamless integration with third-party financial services.'
    ],
    testimonial: {
      text: "The team at PrimeDigital delivered an app that's both beautiful and rock-solid secure. Our users love it!",
      author: "Mark Johnson",
      position: "CTO, FinTech Innovators"
    },
    gallery: [
      'https://picsum.photos/800/500?random=21',
      'https://picsum.photos/800/500?random=22',
      'https://picsum.photos/800/500?random=23'
    ]
  },
  {
    id: 3,
    slug: 'brand-identity-design',
    title: 'Comprehensive Brand Identity',
    category: 'UI/UX Design',
    client: 'Innovative Startup Co.',
    duration: '3 Months',
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Principle'],
    heroImage: 'https://picsum.photos/1200/600?random=3',
    description: 'A complete brand identity redesign, including logo, typography, color palette, and a detailed brand style guide for consistent multi-platform representation.',
    challenge: 'To create a modern, memorable, and adaptable brand identity that resonates with a tech-savvy audience and stands out in a competitive market.',
    solution: 'Conducted in-depth market research and brand workshops. Developed multiple design concepts, iteratively refining chosen directions. Delivered a comprehensive style guide and asset library for future use.',
    results: [
      'Improved brand recognition by 80% among target demographics.',
      'Reduced design inconsistencies by 90% across all marketing materials.',
      'Client received positive feedback from investors and early adopters.',
      'Enabled rapid creation of new marketing collateral using the new design system.'
    ],
    testimonial: {
      text: "PrimeDigital didn't just design a logo; they crafted our entire brand story. Professional, creative, and highly responsive.",
      author: "Emily White",
      position: "Founder, Innovative Startup Co."
    },
    gallery: [
      'https://picsum.photos/800/500?random=31',
      'https://picsum.photos/800/500?random=32',
      'https://picsum.photos/800/500?random=33'
    ]
  }
  // Add more projects here
];