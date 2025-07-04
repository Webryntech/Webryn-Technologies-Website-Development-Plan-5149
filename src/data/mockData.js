// Mock data for development - Replace with Supabase data
export const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Automation",
    excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for your organization.",
    content: "Artificial Intelligence is no longer a futuristic concept—it's here, transforming how businesses operate...",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "AI & Automation",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    tags: ["AI", "Business", "Automation", "Technology"]
  },
  {
    id: 2,
    title: "Cloud-Native Architecture: Best Practices",
    excerpt: "Learn the essential principles of building scalable, resilient cloud-native applications.",
    content: "Cloud-native architecture represents a fundamental shift in how we design and deploy applications...",
    author: "Michael Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "Cloud Computing",
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["Cloud", "Architecture", "DevOps", "Scalability"]
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of Remote Work",
    excerpt: "Essential security measures for protecting your business in a distributed work environment.",
    content: "The shift to remote work has fundamentally changed the cybersecurity landscape...",
    author: "Emily Johnson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "Cybersecurity",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    tags: ["Security", "Remote Work", "Privacy", "Compliance"]
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "AI-Powered Supply Chain Optimization",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    description: "Implemented machine learning algorithms to optimize supply chain logistics, reducing costs by 30% and improving delivery times.",
    challenge: "Complex multi-tier supply chain with frequent disruptions and inefficient inventory management.",
    solution: "Developed predictive analytics platform with real-time monitoring and automated decision-making capabilities.",
    results: ["30% reduction in logistics costs", "25% improvement in delivery times", "50% reduction in inventory waste"],
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    category: "AI & Machine Learning",
    duration: "8 months",
    teamSize: "12 members"
  },
  {
    id: 2,
    title: "Blockchain-Based Identity Management",
    client: "FinTech Innovation Ltd",
    industry: "Financial Services",
    description: "Built a secure, decentralized identity verification system for financial institutions.",
    challenge: "Traditional identity verification was slow, expensive, and vulnerable to fraud.",
    solution: "Implemented blockchain-based identity management with smart contracts and biometric verification.",
    results: ["99.9% fraud reduction", "70% faster verification", "60% cost savings"],
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop",
    category: "Blockchain & Web3",
    duration: "6 months",
    teamSize: "8 members"
  },
  {
    id: 3,
    title: "IoT Smart City Infrastructure",
    client: "Metropolitan City Council",
    industry: "Government",
    description: "Deployed comprehensive IoT network for smart city initiatives including traffic management and environmental monitoring.",
    challenge: "Aging infrastructure with limited real-time data and inefficient resource allocation.",
    solution: "Implemented city-wide IoT sensor network with edge computing and AI-powered analytics.",
    results: ["40% improvement in traffic flow", "35% reduction in energy consumption", "Real-time environmental monitoring"],
    technologies: ["IoT Sensors", "Edge Computing", "5G", "Azure", "Power BI"],
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=500&fit=crop",
    category: "IoT & Smart Cities",
    duration: "12 months",
    teamSize: "15 members"
  }
];

export const careers = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our engineering team to build next-generation web applications using cutting-edge technologies.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and modern JavaScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of database design and optimization",
      "Experience with CI/CD pipelines and DevOps practices"
    ],
    responsibilities: [
      "Develop and maintain scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and architecture decisions"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Latest technology equipment"
    ],
    postedAt: "2024-01-20",
    applicationDeadline: "2024-02-20"
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "Data Science",
    location: "New York, NY / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead the development of AI-powered solutions that drive business innovation and automation.",
    requirements: [
      "3+ years of experience in machine learning and AI",
      "Strong programming skills in Python and relevant ML libraries",
      "Experience with deep learning frameworks (TensorFlow, PyTorch)",
      "Knowledge of MLOps and model deployment",
      "Strong mathematical and statistical background"
    ],
    responsibilities: [
      "Design and implement machine learning models",
      "Optimize model performance and scalability",
      "Collaborate with product teams on AI features",
      "Research and implement cutting-edge AI techniques"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Conference and training budget",
      "Research publication opportunities"
    ],
    postedAt: "2024-01-18",
    applicationDeadline: "2024-02-18"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX / Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain robust, scalable infrastructure that powers our global platform.",
    requirements: [
      "4+ years of experience in DevOps and infrastructure",
      "Expertise in containerization (Docker, Kubernetes)",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Strong knowledge of CI/CD pipelines",
      "Experience with monitoring and logging tools"
    ],
    responsibilities: [
      "Design and implement scalable infrastructure",
      "Automate deployment and monitoring processes",
      "Ensure system reliability and performance",
      "Collaborate with development teams on platform optimization"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional certification support",
      "Latest technology stack"
    ],
    postedAt: "2024-01-15",
    applicationDeadline: "2024-02-15"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Sarah leads our technology vision with over 15 years of experience in enterprise software development. She previously served as VP of Engineering at several Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    expertise: ["Cloud Architecture", "AI/ML", "Team Leadership"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of AI Research",
    bio: "Michael drives our AI innovation initiatives with a PhD in Computer Science and 12 years of research experience. He has published over 50 papers in top-tier conferences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    expertise: ["Machine Learning", "Deep Learning", "Research"]
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "VP of Cybersecurity",
    bio: "Emily ensures our security standards with 10 years of experience in cybersecurity. She holds multiple security certifications and has led security for major financial institutions.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    expertise: ["Cybersecurity", "Compliance", "Risk Management"]
  }
];