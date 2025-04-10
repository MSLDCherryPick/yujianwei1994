// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MSLDCherryPick', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/yujianwei1994/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  skills: [
    'Speech Recognition',
    'Speech Synthesis',
    'Speech Enhancement',
    'Muti-modality',
  ],
  experiences: [
    {
      company: 'Tencent AI Lab',
      position: 'Senior Researcher',
      from: 'September 2021',
      to: 'June 2024',
    },
    {
      company: 'Moonshot AI',
      position: 'Muti-modality Research Engineer',
      from: 'June 2024',
      to: 'February 2025',
    },
    {
      company: 'Microsoft',
      position: 'Senior Researcher',
      from: 'February 2025',
      to: 'Present',
    },
    
  ],
  educations: [
    {
      institution: 'Nanjing University',
      degree: 'Bachelor of Science in Physics',
      from: 'Sep 2013',
      to: 'Jun 2017',
    },
    {
      institution: 'The Chinese University of Hong Kong',
      degree: 'Ph.D. in Systems Engineering and Engineering Management',
      from: 'August 2017',
      to: 'July 2021',
    },
  ],
  publications: [
    {
      title: 'Audio-visual recognition of overlapped speech for the lrs2 dataset',
      conferenceName: 'ICASSP',
      journalName: '',
      authors: 'Jianwei Yu, Shi-Xiong Zhang, Jian Wu, Shahram Ghorbani, Bo Wu, Shiyin Kang, Shansong Liu, Xunying Liu, Helen Meng, Dong Yu',
      link: 'https://arxiv.org/pdf/2001.01656',
    },
    {
      title: 'Autoprep: An automatic preprocessing framework for in-the-wild speech data',
      conferenceName: 'ICASSP',
      journalName: '',
      authors: 'Jianwei Yu, Hangting Chen, Yanyao Bian, Xiang Li, Yi Luo, Jinchuan Tian, Mengyang Liu, Jiayi Jiang, Shuai Wang',
      link: 'https://arxiv.org/pdf/2309.13905',
    },
    {
      title: 'Audio-visual multi-channel integration and recognition of overlapped speech',
      conferenceName: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing',
      journalName: '',
      authors: 'Jianwei Yu, Shi-Xiong Zhang, Bo Wu, Shansong Liu, Shoukang Hu, Mengzhe Geng, Xunying Liu, Helen Meng, Dong Yu',
      link: 'https://arxiv.org/pdf/2011.07755',
    },
    {
      title: 'Development of the CUHK Dysarthric Speech Recognition System for the UA Speech Corpus.',
      conferenceName: 'INTERSPEECH',
      journalName: '',
      authors: 'Jianwei Yu*, Xurong Xie*, Shansong Liu, Shoukang Hu, Max WY Lam, Xixin Wu, Ka Ho Wong, Xunying Liu, Helen Meng',
      link: 'https://www.cs.ou.edu/~fagg/classes/aml_2019/papers/Dysarthric_speech_recogniton_systems.pdf',
    },
    {
      title: 'High fidelity speech enhancement with band-split rnn',
      conferenceName: 'INTERSPEECH',
      journalName: '',
      authors: 'Jianwei Yu*, Hangting Chen*,Yi Luo, Rongzhi Gu, Chao Weng',
      link: 'https://arxiv.org/pdf/2212.00406',
    },
    {
      title: 'Secap: Speech emotion captioning with large language model',
      conferenceName: 'AAAI',
      journalName: '',
      authors: 'Yaoxun Xu, Hangting Chen, Jianwei Yu, Qiaochu Huang, Zhiyong Wu, Shi-Xiong Zhang, Guangzhi Li, Yi Luo, Rongzhi Gu',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/download/29902/31577',
    },
    
    {
      title: 'Diffsound: Discrete diffusion model for text-to-sound generation',
      conferenceName: '',
      journalName: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing',
      authors: 'D Yang, J Yu, H Wang, W Wang, C Weng, Y Zou, D Yu',
      link: 'https://arxiv.org/pdf/2207.09983',
    },
    {
      title: 'Music source separation with band-split RNN',
      conferenceName: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing',
      journalName: '',
      authors: 'Yi Luo, Jianwei Yu',
      link: 'https://arxiv.org/pdf/2209.15174',
    },
  ],
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  enablePWA: true,
};

export default CONFIG;
