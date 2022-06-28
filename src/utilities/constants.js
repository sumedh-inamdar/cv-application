import uniqid from 'uniqid';

export const degreeTypes = [
  { label: 'High School Diploma', value: 'hsd' },
  { label: 'GED', value: 'ged' },
  { label: 'A.A.', value: 'aa' },
  { label: 'A.S.', value: 'as' },
  { label: 'B.A.', value: 'ba' },
  { label: 'B.S.', value: 'bs' },
  { label: 'M.A.', value: 'ma' },
  { label: 'M.S.', value: 'ms' },
  { label: 'MBA', value: 'mba' },
  { label: 'J.D.', value: 'jd' },
  { label: 'M.D.', value: 'md' },
  { label: 'Ph.D.', value: 'phd' },
  { label: 'CC', value: 'cc' },
  { label: 'EDD', value: 'edd' }
];

export const exampleData = {
  CVHeader: {
    firstName: localStorage.getItem('firstName') || 'Grace',
    lastName: localStorage.getItem('lastName') || 'Hopper',
    title: localStorage.getItem('title') || 'Software Engineer',
    website: localStorage.getItem('website') || 'theodinproject.com',
    github: localStorage.getItem('github') || 'github.com/TheOdinProject',
    linkedin:
      localStorage.getItem('linkedin') ||
      'linkedin.com/in/grace-hopper-8a027032/',
    email: localStorage.getItem('email') || 'grace_hopper@gmail.com',
    phone: localStorage.getItem('phone') || '480-555-1234',
    location: localStorage.getItem('location') || 'New York'
  },
  Profile: {
    profile:
      localStorage.getItem('profile') ||
      `Aspiring front-end developer well versed in software engineering fundamentals. Seeking to utilize broad background with excellent technical, communication, and collaboration skills to thrive as an entry-level software engineer.`
  },
  Skills: {
    skills: JSON.parse(localStorage.getItem('skills')) || [
      'Data structures & Algorithms',
      'Javascript (React)',
      'HTML / CSS',
      'Unit testing (Jest)',
      'NodeJS / Express',
      'MongoDB'
    ]
  },
  Experience: {
    jobs: [
      {
        id: uniqid(),
        title: 'Software Engineer',
        company: 'Apple',
        startDate: new Date(2018, 5),
        endDate: new Date(2022, 2),
        current: true,
        duties: [
          'Built React components for customer facing web app, improved user time on page by 2 minutes',
          'Collaborated with team of 6 to prioritize and scope features requests by impact / visibility using Agile methodology',
          'Wrote unit tests to cover all new features reducing bug rate by 20%',
          'Built data model and supporting pipelines which led to discovery of new site features, boosting web revenue by 15%',
          'Presented issues / status to senior management as required for critical product features and key milestones'
        ]
      },
      {
        id: uniqid(),
        title: 'Software Engineer Intern',
        company: 'Google',
        startDate: new Date(2017, 5),
        endDate: new Date(2018, 5),
        current: false,
        duties: [
          'Built back-end components for internal tool, improved developer efficiency by 30%',
          'Collaborated with team of 6 to prioritize and scope features requests by impact / visibility using Agile methodology',
          'Wrote unit tests to cover all new features reducing bug rate by 20%'
        ]
      }
    ]
  },
  Education: {
    degrees: [
      {
        startDate: new Date(1930, 8),
        endDate: new Date(1934, 4),
        school: 'Yale University',
        major: 'Mathematics',
        degree: 'Ph.D',
        id: uniqid(),
        current: false
      },
      {
        startDate: new Date(1928, 8),
        endDate: new Date(1930, 4),
        school: 'Yale University',
        major: 'Mathematics',
        degree: 'M.S.',
        id: uniqid(),
        current: false
      },
      {
        startDate: new Date(1924, 8),
        endDate: new Date(1928, 4),
        school: 'Vassar College',
        major: 'Mathematics, Physics',
        degree: 'B.S.',
        id: uniqid(),
        current: false
      }
    ]
  }
};
