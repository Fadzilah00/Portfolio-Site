export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  category: 'ui-ux' | 'testing' | 'development'
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  // UI/UX Projects
  {
    id: 1,
    title: 'QQlink App',
    description: 'Designed and refined the UI/UX for QQlink Crypto web and mobile platforms, focusing on modern visuals and an intuitive user experience.',
    longDescription: 'Designed and prototyped a comprehensive e-commerce mobile application focusing on user experience optimization. Created wireframes, user flows, and interactive prototypes using Figma.',
    category: 'ui-ux',
    image: '/images/UI1.PNG',
    techStack: ['Figma', 'Adobe XD', 'Principle', 'Sketch'],
    liveUrl: 'https://www.canva.com/design/DAGyvPT5Ch8/v6zwOMnSfL6qLWbEW-FDBA/edit?utm_content=DAGyvPT5Ch8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    featured: true
  },
  {
    id: 2,
    title: 'Food Recipe Website',
    description: 'Clean and accessible dashboard design for recipe professionals.',
    longDescription: 'Redesigned a complex healthcare dashboard to improve usability and accessibility. Conducted user research and implemented design system for consistency.',
    category: 'ui-ux',
    image: '/images/UI2.PNG',
    techStack: ['Figma', 'Adobe XD', 'Miro', 'User Research'],
    liveUrl: 'https://www.canva.com/design/DAG6qLP98P0/6cQJjtrf_fMAyD-RjrL1oA/edit?utm_content=DAG6qLP98P0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    featured: false
  },

  // Testing Projects
  {
    id: 3,
    title: 'MoneyMate Project Testing',
    description: 'Comprehensive testing of financial management application with full documentation.',
    longDescription: 'Conducted end-to-end testing for MoneyMate project including UAT (User Acceptance Testing), Integration Testing, and Functional Testing. Created detailed test documentation, test cases, and bug reports. Performed manual testing across all application features and ensured quality standards.',
    category: 'testing',
    image: '/images/TEST1.png',
    techStack: ['Manual Testing', 'UAT', 'Integration Testing', 'Test Documentation', 'Bug Tracking'],
    liveUrl: 'https://drive.google.com/drive/folders/1xyzOMJ-x3modR_6FIg3YsDA57UHBFBDF',
    featured: true
  },
  {
    id: 4,
    title: 'Manual System Testing',
    description: 'Client requirement validation and system functionality testing.',
    longDescription: 'Performed comprehensive testing for company system based on client requirements and specifications. Validated all functional requirements, conducted system testing, and ensured proper integration between modules. Created detailed test reports and documented all testing processes.',
    category: 'testing',
    image: '/images/TEST2.png',
    techStack: ['System Testing', 'Requirements Validation', 'Functional Testing', 'Integration Testing', 'Test Reporting'],
    liveUrl: 'https://docs.google.com/document/d/1yrd3QmLm44eyrmRYdWZ76Y9gDXOczijwQYFvO20oKqA/edit?usp=sharing',
    featured: false
  },

  // Development Projects
  {
    id: 5,
    title: 'MoneyMate App',
    description: 'Financial management mobile application for personal budgeting and expense tracking.',
    longDescription: 'Developed a comprehensive financial management app with features for budget tracking, expense management, financial analytics, and user-friendly interface. Built with modern mobile development practices and responsive design.',
    category: 'development',
    image: '/images/DEV1.png',
    techStack: ['Mobile Development', 'Financial APIs', 'Database Design', 'User Interface', 'Cross-Platform'],
    liveUrl: 'https://drive.google.com/file/d/1Lm4Y2S7C4qYvpNzgmASUJueEa15T2VmH/view?usp=drive_link',
    githubUrl: 'https://github.com/ainafadzilah/moneymate-app',
    featured: true
  },
  {
    id: 6,
    title: 'Glow Hockey Game',
    description: 'Interactive hockey game application with glowing effects and smooth gameplay.',
    longDescription: 'Developed an engaging hockey game app featuring glowing visual effects, smooth animations, and intuitive game controls. Implemented game physics, scoring system, and multiplayer functionality with modern game development techniques.',
    category: 'development',
    image: '/images/DEV2.png',
    techStack: ['Game Development', 'Mobile Gaming', 'Animation', 'Game Physics', 'Multiplayer'],
    liveUrl: 'https://drive.google.com/file/d/1Lm4Y2S7C4qYvpNzgmASUJueEa15T2VmH/view?usp=drive_link',
    githubUrl: 'https://github.com/ainafadzilah/glow-hockey-game',
    featured: false
  }
]

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}
