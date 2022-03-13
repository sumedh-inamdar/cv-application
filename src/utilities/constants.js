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
  { label: 'other', value: 'other' }
];

export const exampleData = {
  CVHeader: {
    firstName: 'Sumedh',
    lastName: 'Inamdar',
    title: 'Software Engineer',
    website: 'github.com/sumedh-inamdar',
    linkedin: 'linkedin.com/in/sinamdar',
    email: 'sxxxxxxx@gmail.com',
    phone: '408-555-1234',
    location: 'San Francisco'
  },
  Profile: {
    profile: `Aspiring front-end developer well versed in software engineering fundamentals. 
    Seeking to utilize broad background with excellent technical, 
    communication, and collaboration skills to thrive as an entry-level software engineer.`
  },
  Skills: {
    skills: [
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
        endDate: new Date(2019, 5),
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
        startDate: new Date(2018, 5),
        endDate: new Date(2019, 5),
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
        startDate: new Date(2010, 8),
        endDate: new Date(2012, 4),
        school: 'UT Austin',
        major: 'Mechanical Engineering',
        degree: 'M.S.',
        id: uniqid()
      },
      {
        startDate: new Date(2005, 8),
        endDate: new Date(2009, 4),
        school: 'UC Berkeley',
        major: 'Mechanical Engineering',
        degree: 'B.S.',
        id: uniqid()
      }
    ]
  }
};
