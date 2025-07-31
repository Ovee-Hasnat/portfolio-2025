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
        problem: "Mobile-Optimized Design",
        solution:
          "Crafted a responsive, touch-friendly layout using Tailwind CSS to ensure smooth gameplay across all devices inside Telegram's webview.",
        image: "bigfish_responsive_ui.png",
      },
      {
        problem: "Smooth, Interactive Experience",
        solution:
          "Built with React to deliver instant UI updates and fluid interactions, making every tap feel responsive and engaging.",
        image: "bigfish_interactive_ui.png",
      },
      {
        problem: "Reliable Game State Handling",
        solution:
          "Used Zustand for global state management, keeping track of user progress, balances, and upgrades in real-time without performance lag.",
        image: "bigfish_state_management.png",
      },
      {
        problem: "One-Click Telegram Login",
        solution:
          "Seamlessly integrated Telegram WebApp SDK for secure, frictionless login—no forms, no passwords, just instant access.",
        image: "bigfish_telegram_auth.png",
      },
      {
        problem: "Live Stats & Feedback",
        solution:
          "Displayed real-time balance updates, timers, and progress visuals with animated components for an engaging game flow.",
        image: "bigfish_interactive_ui.png",
      },
      {
        problem: "Daily Gameplay Mechanics",
        solution:
          "Implemented logic for daily resets, earnings, and cooldowns to keep users returning and boost long-term engagement.",
        image: "bigfish_state_management.png",
      },

      // "Responsive design, Reactive, State Management, Authorization, Real-time data visual, Daily game logic implementation",
    ],
  },
];

// url: "https://bsfmstu.solutionspin.com/", JSTU
