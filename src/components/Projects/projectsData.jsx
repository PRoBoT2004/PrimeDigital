// projectsData.jsx
import React from 'react';

export const projectsData = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform with AI-powered recommendations and real-time analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
    stats: {
      users: "50K+",
      revenue: "$2M+",
      performance: "99.9%"
    },
    featured: true,
    // Case Study Details
    caseStudy: {
      client: "TechMart Inc.",
      duration: "6 months",
      team: "8 developers",
      overview: "TechMart needed a complete overhaul of their outdated e-commerce platform to compete in the modern digital marketplace. The challenge was to create a scalable, fast, and user-friendly platform that could handle high traffic volumes while providing personalized shopping experiences.",
      challenge: "The existing platform was built on legacy technology, causing slow load times, frequent crashes during peak traffic, and limited customization options. Customer conversion rates were declining, and the admin panel was difficult to use.",
      solution: "We built a modern, microservices-based e-commerce platform using React for the frontend and Node.js for the backend. The platform features AI-powered product recommendations, real-time inventory management, and a comprehensive analytics dashboard.",
      results: [
        "300% increase in page load speed",
        "150% improvement in conversion rates",
        "99.9% uptime achieved",
        "$2M+ in additional revenue generated",
        "50K+ active users within first quarter"
      ],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      testimonial: {
        text: "The new platform exceeded our expectations. The team delivered a solution that not only solved our immediate problems but positioned us for future growth.",
        author: "Sarah Johnson",
        position: "CTO, TechMart Inc."
      }
    }
  },
  {
    id: 2,
    slug: "healthcare-mobile-app",
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "Telemedicine app connecting patients with doctors through secure video consultations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "WebRTC", "Stripe"],
    gradient: "from-emerald-500 to-teal-500",
    stats: {
      downloads: "100K+",
      consultations: "25K+",
      rating: "4.8/5"
    },
    featured: true,
    caseStudy: {
      client: "HealthConnect",
      duration: "8 months",
      team: "6 developers",
      overview: "HealthConnect wanted to revolutionize healthcare accessibility by creating a comprehensive telemedicine platform that connects patients with healthcare providers through secure, HIPAA-compliant video consultations.",
      challenge: "Creating a secure, reliable platform that ensures patient privacy while providing seamless video consultations. The app needed to handle sensitive medical data, integrate with existing healthcare systems, and work across multiple devices.",
      solution: "We developed a cross-platform mobile application using React Native with end-to-end encryption, secure video calling via WebRTC, and integration with major healthcare databases. The app includes features like appointment scheduling, prescription management, and secure messaging.",
      results: [
        "100K+ app downloads in first 6 months",
        "25K+ successful consultations completed",
        "4.8/5 average user rating",
        "40% reduction in missed appointments",
        "HIPAA compliance achieved"
      ],
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop"
      ],
      testimonial: {
        text: "This app has transformed how we deliver healthcare. Our patients love the convenience, and we've seen significant improvements in patient engagement.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, HealthConnect"
      }
    }
  },
  {
    id: 3,
    slug: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    category: "AI & Analytics",
    description: "Real-time business intelligence dashboard with predictive analytics and machine learning insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    gradient: "from-purple-500 to-pink-500",
    stats: {
      accuracy: "94%",
      insights: "1M+",
      clients: "200+"
    },
    featured: false,
    caseStudy: {
      client: "DataCorp Analytics",
      duration: "10 months",
      team: "12 specialists",
      overview: "DataCorp needed an advanced analytics platform that could process massive datasets and provide actionable insights through machine learning algorithms and predictive modeling.",
      challenge: "Processing terabytes of data in real-time while maintaining accuracy and providing intuitive visualizations. The system needed to handle multiple data sources and provide predictive insights for business decision-making.",
      solution: "We created an AI-powered analytics platform using Python and TensorFlow for machine learning, React for the frontend, and D3.js for advanced data visualizations. The platform includes real-time data processing, predictive modeling, and customizable dashboards.",
      results: [
        "94% prediction accuracy achieved",
        "1M+ data points processed daily",
        "200+ enterprise clients onboarded",
        "60% faster decision-making process",
        "85% reduction in manual analysis time"
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      testimonial: {
        text: "The AI insights have revolutionized our business strategy. We can now predict market trends with incredible accuracy.",
        author: "Lisa Rodriguez",
        position: "VP of Analytics, DataCorp"
      }
    }
  },
  // Add more projects with similar structure...
  {
    id: 4,
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    category: "DevOps & Cloud",
    description: "Scalable microservices architecture deployed on AWS with auto-scaling and monitoring.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    gradient: "from-indigo-500 to-blue-500",
    stats: {
      uptime: "99.99%",
      requests: "10M+",
      latency: "<100ms"
    },
    featured: false,
    caseStudy: {
      client: "ScaleUp Technologies",
      duration: "4 months",
      team: "5 DevOps engineers",
      overview: "ScaleUp Technologies needed a robust cloud infrastructure that could automatically scale based on demand while maintaining high availability and performance.",
      challenge: "The existing infrastructure couldn't handle traffic spikes, leading to downtime during peak usage. Manual scaling was time-consuming and error-prone.",
      solution: "We designed and implemented a microservices architecture on AWS using Docker containers orchestrated by Kubernetes. The infrastructure includes auto-scaling, load balancing, and comprehensive monitoring.",
      results: [
        "99.99% uptime achieved",
        "10M+ requests handled daily",
        "Sub-100ms response times",
        "80% reduction in infrastructure costs",
        "Zero-downtime deployments"
      ],
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      testimonial: {
        text: "Our infrastructure is now bulletproof. We can handle any traffic spike without breaking a sweat.",
        author: "James Wilson",
        position: "CTO, ScaleUp Technologies"
      }
    }
  },
  {
    id: 5,
    slug: "fintech-security-platform",
    title: "Fintech Security Platform",
    category: "Cybersecurity",
    description: "Advanced fraud detection system with real-time monitoring and threat intelligence.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "Redis", "PostgreSQL"],
    gradient: "from-red-500 to-orange-500",
    stats: {
      threats: "99.8%",
      response: "<1min",
      savings: "$5M+"
    },
    featured: true,
    caseStudy: {
      client: "SecureBank",
      duration: "12 months",
      team: "10 security experts",
      overview: "SecureBank needed an advanced fraud detection system to protect against increasingly sophisticated cyber threats while maintaining a seamless user experience.",
      challenge: "Traditional security measures were causing too many false positives, frustrating legitimate customers while still allowing some fraudulent transactions to slip through.",
      solution: "We developed an AI-powered fraud detection system using machine learning algorithms that analyze transaction patterns in real-time. The system includes behavioral analysis, risk scoring, and automated response mechanisms.",
      results: [
        "99.8% fraud detection accuracy",
        "Sub-1-minute response time",
        "$5M+ in prevented losses",
        "90% reduction in false positives",
        "24/7 automated monitoring"
      ],
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
      ],
      testimonial: {
        text: "The fraud detection system has saved us millions while improving customer satisfaction. It's a game-changer.",
        author: "Maria Garcia",
        position: "Chief Security Officer, SecureBank"
      }
    }
  },
  {
    id: 6,
    slug: "smart-iot-dashboard",
    title: "Smart IoT Dashboard",
    category: "IoT & Automation",
    description: "Comprehensive IoT management platform for smart buildings and industrial automation.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MQTT", "InfluxDB"],
    gradient: "from-yellow-500 to-orange-500",
    stats: {
      devices: "10K+",
      efficiency: "+35%",
      savings: "$1.2M"
    },
    featured: false,
    caseStudy: {
      client: "SmartBuildings Corp",
      duration: "7 months",
      team: "9 IoT specialists",
      overview: "SmartBuildings Corp wanted to create an intelligent building management system that could monitor and control thousands of IoT devices across multiple properties.",
      challenge: "Managing diverse IoT devices from different manufacturers, ensuring reliable communication, and providing actionable insights from sensor data.",
      solution: "We built a comprehensive IoT platform using MQTT for device communication, InfluxDB for time-series data storage, and React for the dashboard interface. The system includes real-time monitoring, automated controls, and predictive maintenance.",
      results: [
        "10K+ devices connected",
        "35% improvement in energy efficiency",
        "$1.2M in operational savings",
        "50% reduction in maintenance costs",
        "Real-time monitoring across all properties"
      ],
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      testimonial: {
        text: "The IoT platform has transformed our building operations. We now have complete visibility and control over all our systems.",
        author: "Robert Kim",
        position: "Operations Director, SmartBuildings Corp"
      }
    }
  }
];

export const categories = [
  "All Projects",
  "Web Development", 
  "Mobile Development",
  "AI & Analytics",
  "DevOps & Cloud",
  "Cybersecurity",
  "IoT & Automation"
];