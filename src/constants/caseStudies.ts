export const caseStudies = [
  {
    title: "Smart Jute Information Software",
    description:
      "Smart Jute Information Software streamlines jute data management, trade tracking, and reporting for the Ministry of Textiles & Jute, Government of Bangladesh.",
    coverImage: "sjis_home_01.png",
    slug: "sjis",
    type: "Web Application",
    tech: "javascript, react.js, tailwind css, axios, chart.js, keep react ui",
    workScope: "Frontend",
    url: "https://sjis.dgjute.gov.bd/",
    problems: [
      // "Authentication, Role based authorization, Dashboard with real-time data visualization, Employee Management, User Profile, Master Data Management, Data entry forms, Data approval layers, various Report generation, searching and sorting, report on dynamic criterias, Report export to PDF and CSV fromat, Admin Panel ",
    ],
  },
  {
    title: "Alljobs by Teletalk",
    description:
      "A leading job portal for Bangladeshi public service sector and private businesses to connect with job seekers and recruiters.",
    coverImage: "alljobs_home.png",
    slug: "alljobs",
    type: "Web Application",
    tech: "javascript, typescript, react.js, redux, tailwind css, firebase, axios, chart.js, headless ui",
    workScope: "Frontend",
    url: "https://alljobs.teletalk.com.bd/",
    problems: [
      // "Notification, User Profiler, Multiple CV Options, Admin Panel- job posting, ",
    ],
  },
  {
    title: "Accounting Software for JSTU",
    description:
      "A powerful accounting software streamlining financial management and seamless reporting for a leading public university in Bangladesh.",
    coverImage: "jstu_home_01.png",
    slug: "jstu",
    type: "Web Application",
    tech: "php, laravel, javascript, mySQL, eloquent, bootstrap 5, jquery, yajra datatable",
    workScope: "Frontend & Backend",
    url: "https://bsfmstu.solutionspin.com/",
    problems: [
      {
        problem: "Manual bookkeeping & scattered data",
        solution:
          "We replaced manual records with a centralized digital ledger using Laravel Eloquent ORM and MySQL. All transactions are now stored securely with relational consistency, improving traceability and reducing human error.",
        image: "jstu_home_01.png",
      },
      {
        problem: "Lack of real-time reporting",
        solution:
          "We developed dynamic financial dashboards and custom report modules using Laravel Blade, Yajra Datatables, and AJAX. Reports can be filtered by date, department, or category, and exported in PDF or Excel format instantly.",
        image: "realtime_reports.png",
      },
      {
        problem: "Uncontrolled user access",
        solution:
          "Implemented a robust role-based access control (RBAC) system using Laravel Gates & Policies, ensuring that each user only sees and edits what's relevant to their role, increasing security and workflow efficiency.",
        image: "user_roles.png",
      },
      {
        problem: "Data validation issues",
        solution:
          "Added server-side and client-side validation using Laravel validation rules and Bootstrap 5 feedback UI. This prevents incorrect data entry and ensures consistent financial records across all modules.",
        image: "data_validation.png",
      },
      {
        problem: "Inefficient UI for large data handling",
        solution:
          "Optimized large table rendering using Yajra Datatables with server-side processing and pagination. This ensures smooth performance even with thousands of transaction records.",
        image: "datatable_optimization.png",
      },
    ],
  },
  {
    title: "Shippers' Council Bangladesh",
    description:
      "The website serves as the official platform of the Shippers' Council of Bangladesh. It provides information about the council's activities, news, publications, member services, and events, aiming to keep stakeholders updated and connected within the shipping and export community.",
    coverImage: "scb_home_01.png",
    slug: "scb",
    type: "Website",
    tech: "javascript, react.js, next.js, node.js, express.js, mySQL, prisma, tailwind css, axios",
    workScope: "Frontend & Backend",
    url: "https://scbdhk.org.bd/",
    problems: [
      // "Landing page, Company portfolio, Services & other pages, Contact Form & Newsletter subscription, Important documents archive, Image & video gallery",
    ],
  },
  {
    title: "Bigfish- Telegram Game",
    description:
      "Bigfish is a tap-to-earn crypto game on Telegram where you simulate running a crypto exchange.",
    coverImage: "bigfish_home_01.png",
    slug: "bigfish",
    type: "Webview Telegram App",
    tech: "javascript, typescript, react.js, zustand, tailwind css, axios, shadcn ui",
    workScope: "Frontend",
    url: null,
    problems: [
      {
        problem: "Persistent Game State with Zustand",
        solution:
          "We implemented a lightweight and efficient global state management system using Zustand. This ensures the player's game data—like balance, upgrades, and cooldowns—remains consistent throughout the session and across interactions. It provides a smooth and continuous gaming experience that keeps users engaged without interruptions.",
        image: "persistent_state.png",
      },
      {
        problem: "Responsive UI Inside Telegram Webview",
        solution:
          "Tailored the entire game interface to be fully responsive within Telegram's constrained webview environment. Leveraged Tailwind CSS with mobile-first design principles to ensure seamless usability across Android and iOS devices—critical for keeping casual players hooked from their first tap.",
        image: "responsive_design.png",
      },
      {
        problem: "Real-Time Feedback & Optimistic UI",
        solution:
          "Integrated Axios with optimistic UI patterns to provide instant feedback on actions like tapping, upgrading, and collecting earnings. This reduced perceived latency and created a snappy, game-like feel—boosting player satisfaction and retention.",
        image: "optimistic_ui.png",
      },
      {
        problem: "Animated Metrics & Visual Cues",
        solution:
          "Developed animated stat components using React and Shadcn UI to visualize key metrics like exchange balance growth, upgrade progress, and cooldowns. These visuals enhance user understanding and add energy to the gameplay, making complex actions feel intuitive and rewarding.",
        image: "animated_metrics.png",
      },
      {
        problem: "Seamless Telegram Login Integration",
        solution:
          "Used Telegram WebApp SDK for secure authentication, ensuring one-click login and identity verification. By storing session data efficiently, returning users can resume gameplay without friction—boosting re-engagement and reducing drop-offs.",
        image: "telegram_auth.png",
      },

      // "Responsive design, Reactive, State Management, Authorization, Real-time data visual, Daily game logic implementation",
    ],
  },
];

// url: "https://bsfmstu.solutionspin.com/", JSTU
