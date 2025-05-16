import { Project } from './types/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Tech Innovators Platform',
    shortDescription: 'AI-powered platform connecting tech talent with innovative projects globally',
    description: 'Tech Innovators Platform is revolutionizing how tech talent collaborates on innovative projects. Our AI-matching algorithm connects developers, designers, and product managers with projects that perfectly match their skills and interests. By removing geographical barriers, we\'re enabling global collaboration and driving innovation forward faster than ever before.\n\nOur platform features skill-based matching, real-time collaboration tools, and project management capabilities all in one seamless experience. We\'ve already connected over 5,000 tech professionals with exciting projects in just our beta phase.',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Technology',
    stage: 'Seed',
    location: 'San Francisco',
    founder: 'Sarah Chen',
    founderAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    technology: ['React', 'Node.js', 'TensorFlow', 'AWS'],
    problemStatement: 'Tech talent is distributed globally, but opportunities are concentrated in a few hubs, creating inefficiency in how innovation happens. Many skilled developers struggle to find projects matching their expertise, while startups can\'t find the right talent quickly.',
    solution: 'Our AI-powered platform uses advanced algorithms to match tech professionals with projects based on skills, interests, and working style. We\'ve built real-time collaboration tools that make remote work seamless, allowing talent from anywhere to contribute to innovative projects.',
    businessModel: 'We operate on a freemium subscription model. Basic matching is free, while premium features like advanced project management tools, larger team sizes, and priority matching require a subscription. We also take a 5% fee on successful project placements for full-time roles.',
    fundingGoal: 750000,
    minInvestment: 50000,
    equity: 10,
    fundingEndDate: 'May 15, 2025',
    foundedYear: '2023',
    revenue: 'Pre-revenue',
    teamSize: 8,
    team: [
      {
        name: 'Sarah Chen',
        role: 'Founder & CEO',
        bio: 'Former Google product manager with experience scaling global teams. Stanford MBA.',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      },
      {
        name: 'Alex Rodriguez',
        role: 'CTO',
        bio: 'Ex-Amazon engineer who led a team of 20+ developers. MS in Computer Science from MIT.',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Jessica Kim',
        role: 'Head of Product',
        bio: 'Product leader with experience at Stripe and Airbnb. Expert in building marketplace products.',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        linkedin: 'https://linkedin.com'
      }
    ],
    metrics: {
      activeUsers: 15000,
      userGrowthRate: 32,
      userGrowth: [
        { month: 'Jan', users: 5000 },
        { month: 'Feb', users: 7500 },
        { month: 'Mar', users: 10000 },
        { month: 'Apr', users: 12500 },
        { month: 'May', users: 15000 }
      ],
      revenue: 25000,
      revenueGrowthRate: 40,
      revenueGrowth: [
        { month: 'Jan', revenue: 5000 },
        { month: 'Feb', revenue: 10000 },
        { month: 'Mar', revenue: 15000 },
        { month: 'Apr', revenue: 20000 },
        { month: 'May', revenue: 25000 }
      ],
      retentionRate: 78,
      dailyActiveUsers: 8500,
      weeklyActiveUsers: 12000,
      customerAcquisitionCost: 18,
      lifetimeValue: 120,
      conversionRate: 8.5,
      churnRate: 3.2
    }
  },
  {
    id: '2',
    name: 'EcoSolutions App',
    shortDescription: 'Mobile app helping consumers track and reduce their carbon footprint through daily actions',
    description: 'EcoSolutions is a mobile application designed to empower individuals to take meaningful action against climate change. Our app provides personalized recommendations for reducing carbon footprint based on user lifestyle and location data. By gamifying sustainable choices and creating community challenges, we\'re making climate action accessible and engaging for everyday consumers.\n\nThe app tracks user activities across transportation, food consumption, home energy use, and purchasing decisions to provide a comprehensive view of personal environmental impact. Users can compete with friends, earn rewards from sustainable brands, and see the collective impact of their community.',
    coverImage: 'https://images.pexels.com/photos/3943726/pexels-photo-3943726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/5412432/pexels-photo-5412432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5412398/pexels-photo-5412398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Sustainability',
    stage: 'Series A',
    location: 'Boston',
    founder: 'Michael Johnson',
    founderAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    technology: ['React Native', 'Node.js', 'TensorFlow', 'AWS'],
    problemStatement: 'Climate change requires individual action, but most people don\'t know how their daily choices impact the environment or what specific changes would make the biggest difference given their lifestyle.',
    solution: 'Our app uses machine learning to analyze user behavior and provide personalized recommendations for reducing carbon footprint. We make climate action accessible by breaking it down into small, actionable steps and providing immediate feedback on the impact of choices.',
    businessModel: 'We operate on a freemium model with basic tracking available for free. Premium subscribers ($4.99/month) get detailed insights, advanced challenges, and exclusive brand partnerships. We also have a B2B revenue stream by licensing our carbon calculation API to businesses.',
    fundingGoal: 2500000,
    minInvestment: 100000,
    equity: 15,
    fundingEndDate: 'June 30, 2025',
    foundedYear: '2022',
    revenue: '$450,000 ARR',
    teamSize: 12,
    team: [
      {
        name: 'Michael Johnson',
        role: 'Founder & CEO',
        bio: 'Climate scientist turned entrepreneur. PhD in Environmental Science from Harvard.',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      },
      {
        name: 'Priya Sharma',
        role: 'CTO',
        bio: 'Former lead engineer at Tesla Energy. Expert in energy systems and mobile development.',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'David Wilson',
        role: 'Head of Sustainability',
        bio: 'Previously climate policy advisor for state government. Expert in carbon accounting.',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        linkedin: 'https://linkedin.com'
      }
    ],
    metrics: {
      activeUsers: 85000,
      userGrowthRate: 28,
      userGrowth: [
        { month: 'Jan', users: 45000 },
        { month: 'Feb', users: 55000 },
        { month: 'Mar', users: 65000 },
        { month: 'Apr', users: 75000 },
        { month: 'May', users: 85000 }
      ],
      revenue: 120000,
      revenueGrowthRate: 35,
      revenueGrowth: [
        { month: 'Jan', revenue: 45000 },
        { month: 'Feb', revenue: 65000 },
        { month: 'Mar', revenue: 85000 },
        { month: 'Apr', revenue: 100000 },
        { month: 'May', revenue: 120000 }
      ],
      retentionRate: 72,
      dailyActiveUsers: 45000,
      weeklyActiveUsers: 62000,
      customerAcquisitionCost: 4.5,
      lifetimeValue: 68,
      conversionRate: 12.5,
      churnRate: 4.8
    }
  },
  {
    id: '3',
    name: 'MedConnect',
    shortDescription: 'AI-powered platform connecting patients with specialized healthcare providers globally',
    description: 'MedConnect is bridging the gap between patients and specialized healthcare providers worldwide. Our platform uses AI to match patients with the right specialists based on their medical history, condition specificity, and preferences. This is particularly valuable for patients with rare diseases or those seeking second opinions from top specialists globally.\n\nThe platform includes secure video consultation capabilities, medical record sharing with end-to-end encryption, and automated follow-up systems to ensure continuity of care. We\'ve already facilitated over 10,000 consultations and have partnered with 500+ specialists across 12 countries.',
    coverImage: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Healthcare',
    stage: 'Series B',
    location: 'New York',
    founder: 'Dr. Amanda Rodriguez',
    founderAvatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technology: ['React', 'Python', 'TensorFlow', 'Google Cloud'],
    problemStatement: 'Patients with complex or rare conditions often struggle to find suitable specialists, especially in regions with limited healthcare infrastructure. The process of finding the right doctor, transferring medical records, and coordinating care is fragmented and inefficient.',
    solution: 'MedConnect uses AI to match patients with specialists based on medical needs and provides a secure platform for virtual consultations and data sharing. We\'ve removed geographical barriers to specialized care while ensuring all interactions meet regulatory requirements for telehealth across different jurisdictions.',
    businessModel: 'We operate on a transaction fee model, taking 15% of each consultation fee. We also offer subscription plans for healthcare systems and insurance companies to integrate our matching algorithm into their networks. Additional revenue comes from premium features like automated follow-up systems and specialized medical translation services.',
    fundingGoal: 12000000,
    minInvestment: 500000,
    equity: 8,
    fundingEndDate: 'August 15, 2025',
    foundedYear: '2021',
    revenue: '$3.8M ARR',
    teamSize: 42,
    team: [
      {
        name: 'Dr. Amanda Rodriguez',
        role: 'Founder & CEO',
        bio: 'Former Director of Telemedicine at Mayo Clinic. MD from Johns Hopkins and MBA from Wharton.',
        avatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      },
      {
        name: 'Dr. James Chen',
        role: 'Chief Medical Officer',
        bio: 'Neurologist with 15+ years of clinical experience. Previously led telehealth initiatives at Cleveland Clinic.',
        avatar: 'https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        linkedin: 'https://linkedin.com'
      },
      {
        name: 'Raj Patel',
        role: 'CTO',
        bio: 'Former engineering leader at Oscar Health. Expert in healthcare data security and compliance.',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    ],
    metrics: {
      activeUsers: 180000,
      userGrowthRate: 22,
      userGrowth: [
        { month: 'Jan', users: 120000 },
        { month: 'Feb', users: 135000 },
        { month: 'Mar', users: 150000 },
        { month: 'Apr', users: 165000 },
        { month: 'May', users: 180000 }
      ],
      revenue: 850000,
      revenueGrowthRate: 18,
      revenueGrowth: [
        { month: 'Jan', revenue: 650000 },
        { month: 'Feb', revenue: 700000 },
        { month: 'Mar', revenue: 750000 },
        { month: 'Apr', revenue: 800000 },
        { month: 'May', revenue: 850000 }
      ],
      retentionRate: 85,
      dailyActiveUsers: 75000,
      weeklyActiveUsers: 120000,
      customerAcquisitionCost: 28,
      lifetimeValue: 450,
      conversionRate: 9.8,
      churnRate: 2.2
    }
  },
  {
    id: '4',
    name: 'FinLiteracy',
    shortDescription: 'AI-powered financial education platform making investing accessible for beginners',
    description: 'FinLiteracy is democratizing financial education by creating personalized learning paths for individuals at any stage of their financial journey. Our platform combines interactive courses, simulation tools, and AI-powered coaching to teach everything from basic budgeting to advanced investment strategies.\n\nWhat makes us unique is our adaptive learning technology that adjusts content difficulty based on user comprehension and simulates real-world financial scenarios to provide practical experience without risk. We partner with financial institutions to offer users seamless pathways from learning to action.',
    coverImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/7821479/pexels-photo-7821479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8370594/pexels-photo-8370594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Fintech',
    stage: 'Seed',
    location: 'Chicago',
    founder: 'Marcus Williams',
    founderAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    technology: ['Vue.js', 'Python', 'Django', 'AWS'],
    problemStatement: 'Financial literacy is critically low worldwide, with many people lacking the knowledge to make informed financial decisions. Traditional financial education is often boring, generic, and disconnected from real-world application.',
    solution: 'Our platform uses AI to create personalized learning journeys that adapt to each user\'s knowledge level, goals, and learning style. We use gamification, simulation tools, and real-world scenarios to make financial education engaging and practical.',
    businessModel: 'We use a freemium model with basic courses available free. Premium subscriptions ($9.99/month) provide advanced courses, simulation tools, and personalized coaching. We also have B2B revenue through partnerships with financial institutions who pay to offer our platform to their customers with custom branding.',
    fundingGoal: 1200000,
    minInvestment: 75000,
    equity: 12,
    fundingEndDate: 'July 31, 2025',
    foundedYear: '2023',
    revenue: '$180,000 ARR',
    teamSize: 9,
    team: [
      {
        name: 'Marcus Williams',
        role: 'Founder & CEO',
        bio: 'Former financial advisor with 10+ years of experience. Passionate about making financial education accessible to everyone.',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      },
      {
        name: 'Lisa Chang',
        role: 'Chief Content Officer',
        bio: 'Former economics professor and author of bestselling personal finance books. Expert in translating complex concepts into accessible content.',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        linkedin: 'https://linkedin.com'
      },
      {
        name: 'Kevin Martinez',
        role: 'Head of Product',
        bio: 'Previously product lead at Khan Academy. Expert in educational technology and learning experience design.',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    ],
    metrics: {
      activeUsers: 32000,
      userGrowthRate: 45,
      userGrowth: [
        { month: 'Jan', users: 12000 },
        { month: 'Feb', users: 16000 },
        { month: 'Mar', users: 21000 },
        { month: 'Apr', users: 26000 },
        { month: 'May', users: 32000 }
      ],
      revenue: 65000,
      revenueGrowthRate: 50,
      revenueGrowth: [
        { month: 'Jan', revenue: 20000 },
        { month: 'Feb', revenue: 30000 },
        { month: 'Mar', revenue: 40000 },
        { month: 'Apr', revenue: 52000 },
        { month: 'May', revenue: 65000 }
      ],
      retentionRate: 68,
      dailyActiveUsers: 18000,
      weeklyActiveUsers: 25000,
      customerAcquisitionCost: 12,
      lifetimeValue: 85,
      conversionRate: 7.5,
      churnRate: 5.2
    }
  },
  {
    id: '5',
    name: 'CyberGuard Pro',
    shortDescription: 'Next-generation cybersecurity platform using AI to protect small businesses from evolving threats',
    description: 'CyberGuard Pro is making enterprise-grade cybersecurity accessible and manageable for small and medium-sized businesses. Our platform uses AI to continuously monitor network activity, identify potential threats, and automatically deploy countermeasures—all without requiring dedicated IT security staff.\n\nWhat sets us apart is our focus on simplicity and automation. Most SMBs can\'t afford dedicated security teams, so we\'ve built a solution that provides comprehensive protection with minimal configuration and maintenance. Our dashboard provides clear visibility into security status with actionable recommendations rather than overwhelming technical data.',
    coverImage: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5380593/pexels-photo-5380593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Technology',
    stage: 'Series A',
    location: 'Austin',
    founder: 'Elena Vasquez',
    founderAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technology: ['Python', 'TensorFlow', 'React', 'AWS'],
    problemStatement: 'Small and medium businesses face the same cybersecurity threats as large enterprises but lack the resources for sophisticated security operations. Most SMBs are underprotected and overwhelmed by complex security solutions designed for larger organizations.',
    solution: 'CyberGuard Pro provides enterprise-grade security in an SMB-friendly package. Our AI continuously learns from global threat data to identify emerging attack patterns and automatically deploy protective measures. The entire system is managed through an intuitive dashboard designed for non-technical users.',
    businessModel: 'We use a subscription model based on company size, starting at $499/month for up to 50 employees. This includes our core platform, automated threat response, and basic compliance reporting. Additional modules for advanced compliance, IoT security, and managed SOC services are available as add-ons.',
    fundingGoal: 5000000,
    minInvestment: 250000,
    equity: 12,
    fundingEndDate: 'September 30, 2025',
    foundedYear: '2022',
    revenue: '$1.2M ARR',
    teamSize: 18,
    team: [
      {
        name: 'Elena Vasquez',
        role: 'Founder & CEO',
        bio: 'Former CISO at a Fortune 500 company. 15+ years in cybersecurity leadership and SANS Institute instructor.',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      },
      {
        name: 'Omar Farooq',
        role: 'CTO',
        bio: 'Previously led security engineering at Cloudflare. Expert in AI-based threat detection and network security.',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Thomas Williams',
        role: 'Head of Customer Success',
        bio: 'Former IT director for a multi-location SMB. Specializes in translating security concepts for non-technical audiences.',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        linkedin: 'https://linkedin.com'
      }
    ],
    metrics: {
      activeUsers: 850,
      userGrowthRate: 32,
      userGrowth: [
        { month: 'Jan', users: 500 },
        { month: 'Feb', users: 600 },
        { month: 'Mar', users: 680 },
        { month: 'Apr', users: 750 },
        { month: 'May', users: 850 }
      ],
      revenue: 425000,
      revenueGrowthRate: 28,
      revenueGrowth: [
        { month: 'Jan', revenue: 280000 },
        { month: 'Feb', revenue: 320000 },
        { month: 'Mar', revenue: 360000 },
        { month: 'Apr', revenue: 390000 },
        { month: 'May', revenue: 425000 }
      ],
      retentionRate: 92,
      dailyActiveUsers: 780,
      weeklyActiveUsers: 820,
      customerAcquisitionCost: 2800,
      lifetimeValue: 42000,
      conversionRate: 18.5,
      churnRate: 1.8
    }
  }
];

export const mockConversations = [
  {
    id: "conv1",
    name: "Sarah Chen",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    lastMessage: "I'd like to learn more about your investment criteria",
    lastMessageTime: "2:30 PM",
    unreadCount: 2,
    isOnline: true
  },
  {
    id: "conv2",
    name: "Michael Johnson",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    lastMessage: "Thanks for your interest in EcoSolutions. When would be a good time to schedule a demo?",
    lastMessageTime: "Yesterday",
    unreadCount: 0,
    isOnline: false
  },
  {
    id: "conv3",
    name: "Dr. Amanda Rodriguez",
    avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    lastMessage: "I've attached the detailed metrics you requested",
    lastMessageTime: "Jul 15",
    unreadCount: 0,
    isOnline: true
  },
  {
    id: "conv4",
    name: "Marcus Williams",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    lastMessage: "Looking forward to our meeting tomorrow",
    lastMessageTime: "Jul 12",
    unreadCount: 0,
    isOnline: false
  },
  {
    id: "conv5",
    name: "Elena Vasquez",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    lastMessage: "Would you be interested in joining our beta program?",
    lastMessageTime: "Jul 8",
    unreadCount: 0,
    isOnline: false
  }
];

export const mockMessages = [
  {
    id: "msg1",
    conversationId: "conv1",
    senderId: "current-user",
    text: "Hi Sarah, I'm interested in learning more about Tech Innovators Platform.",
    timestamp: "2023-07-16T14:15:00Z",
    read: true
  },
  {
    id: "msg2",
    conversationId: "conv1",
    senderId: "other-user",
    text: "Hello! I'm glad to hear you're interested in our platform. What specific aspects would you like to know more about?",
    timestamp: "2023-07-16T14:20:00Z",
    read: true
  },
  {
    id: "msg3",
    conversationId: "conv1",
    senderId: "current-user",
    text: "I'm particularly interested in your growth metrics and how you're planning to scale the AI matching algorithm. Also, what kind of funding are you looking for?",
    timestamp: "2023-07-16T14:25:00Z",
    read: true
  },
  {
    id: "msg4",
    conversationId: "conv1",
    senderId: "other-user",
    text: "Great questions! We've seen 32% month-over-month growth in user registrations, and our matching algorithm is now at 92% satisfaction rating based on user feedback. We're raising $750K in seed funding to expand our engineering team and improve our AI capabilities.",
    timestamp: "2023-07-16T14:30:00Z",
    read: true
  },
  {
    id: "msg5",
    conversationId: "conv1",
    senderId: "other-user",
    text: "I'd like to learn more about your investment criteria and what you typically look for in early-stage startups.",
    timestamp: "2023-07-16T14:30:30Z",
    read: false
  },
  {
    id: "msg6",
    conversationId: "conv1",
    senderId: "other-user",
    text: "Would you be available for a demo call later this week?",
    timestamp: "2023-07-16T14:31:00Z",
    read: false
  },
  {
    id: "msg7",
    conversationId: "conv2",
    senderId: "other-user",
    text: "Hi there! I noticed you bookmarked our EcoSolutions project. I'd be happy to answer any questions you might have.",
    timestamp: "2023-07-15T10:15:00Z",
    read: true
  },
  {
    id: "msg8",
    conversationId: "conv2",
    senderId: "current-user",
    text: "Thanks Michael. I'm impressed by your user growth. Could you tell me more about your retention strategies and how you're monetizing the app?",
    timestamp: "2023-07-15T10:20:00Z",
    read: true
  },
  {
    id: "msg9",
    conversationId: "conv2",
    senderId: "other-user",
    text: "Absolutely! Our 30-day retention is currently at 72%, which we achieve through weekly challenges and community features. For monetization, we have our premium subscription at $4.99/month with a 12.5% conversion rate, plus brand partnerships for sustainable product recommendations.",
    timestamp: "2023-07-15T10:30:00Z",
    read: true
  },
  {
    id: "msg10",
    conversationId: "conv2",
    senderId: "current-user",
    text: "That's impressive retention for a consumer app. I'd love to see a demo of the product in action.",
    timestamp: "2023-07-15T10:35:00Z",
    read: true
  },
  {
    id: "msg11",
    conversationId: "conv2",
    senderId: "other-user",
    text: "Thanks for your interest in EcoSolutions. When would be a good time to schedule a demo?",
    timestamp: "2023-07-15T10:38:00Z",
    read: true
  }
];