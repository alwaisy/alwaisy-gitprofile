// gitprofile.config.js

const config = {
  github: {
    username: 'awaisalwaisy', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'alwaisy',
    twitter: 'alvaisy',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    dribbble: 'alwaisy',
    // behance: '',
    medium: 'awaisalwaisy',
    dev: 'awaisalwaisy',
    stackoverflow: '19009169/awais-al-waissy', // format: userid/username
    // skype: '',
    telegram: 'awaisalwaisy',
    // website: '',
    phone: '',
    email: 'alwaisy@outlook.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Prisma',
    'Next.js',
    'Git',
    'Docker/Nginx/PM2',
    'CSS/SCSS',
    'Antd/MUI',
    'Vuetify/Quasar/PrimeVue',
    'Tailwind/DaisyUI',
  ],
  experiences: [
    {
      company: 'Cryptum/MidChain Technologies · Full-time',
      position: 'Frontend ReactJs Developer',
      // Dec 2022 - May 2023 · 6 mos
      from: 'December 2022',
      to: 'May 2023',
      companyLink: 'https://mid-chaintechnologies.com/',
    },
    {
      company: 'LoopBrackets · Full-time',
      position: 'Frontend VueJs Developer',
      // Apr 2022 - Nov 2022 · 8 mos
      from: 'April 2022',
      to: 'November 2022',
      companyLink: 'https://www.loopbrackets.com/',
    },
    {
      company: 'SigmaEMP · Freelance',
      // Dec 2021 - Mar 2022 · 4 mos
      position: 'Frontend VueJs Developer',
      from: 'December 2021',
      to: 'March 2022',
      companyLink: 'http://www.sigmaemp.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    /* {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    }, */
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    /* {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    }, */
    {
      title: 'ProxyScrape - Loopbrackets',
      description: `There was a website stacked with traditional
        technologies like jQuery and PHP. My responsibility was to convert it into a
        modern stack using VueJs(version 3), and Typescript (scalability).`,
      imageUrl:
        'https://raw.githubusercontent.com/awaisalwaisy/lib/main/lb-prscp.ico',
      link: 'https://proxyscrape-d.netlify.app/home',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'awaisalwaisy', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
