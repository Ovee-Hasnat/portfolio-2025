export const caseStudies = [
  {
    title: "ERP for BRACNet Limited",
    description:
      "Smart Jute Information Software streamlines jute data management, trade tracking, and reporting for the Ministry of Textiles & Jute, Government of Bangladesh.",
    coverImage: "brac_erp_home.webp",
    slug: "bracerp",
    type: "ERP System",
    tech: "php, laravel, javascript, jquery, ajax, postgresql, eloquent",
    workScope: "Frontend & Backend",
    url: null,
    problems: [
      {
        problem: "My HR Dashboard (Employee HR Dashboard)",
        solution:
          "Employee HR Dashboard, serving as a central hub for workforce insights and quick actions. It displays key metrics such as total employees, pending approvals, and upcoming holidays, alongside visual analytics for attendance trends. Employees can quickly navigate to relevant modules, making HR data more accessible. Previously, employees and HR staff had to dig into separate menus to find relevant info, slowing down decision-making. The new dashboard centralizes KPIs, quick links, and charts, significantly reducing navigation time and improving workforce visibility.",
        image: "bracerp_my_hr.webp",
      },
      {
        problem: "Employee Attendance Management",
        solution:
          "A hybrid attendance management system that reads data from RFID machines and allows manual entry or updates by authorized users. Employees can request attendance adjustments, which are routed through a configurable approval chain. Before, attendance corrections required manual offline tracking and email approvals, causing delays and data mismatches. The new system provides a single, synchronized platform that validates attendance in real-time and maintains an audit trail.",
        image: "bracerp_daily_attendance.webp",
      },
      {
        problem: "Leave Management",
        solution:
          "A complete leave request and approval system that calculates leave balances automatically according to company policy. Employees can apply for various leave types, upload documents, and track approval status. Managers and HR can approve or reject requests with remarks. Previously, leave balances were manually tracked in spreadsheets, leading to errors and policy violations. The new module ensures compliance with company rules, automates balance updates, and improves transparency.",
        image: "bracerp_manage_leave.webp",
      },
      {
        problem: "Roster Management",
        solution:
          "A Department-wise roster creation and shift assignment tools. HR can assign default shifts, customize specific dates, and update schedules as needed. Employees can view their roster, which directly impacts attendance validation. Manual roster planning caused overlapping shifts, scheduling conflicts, and poor attendance tracking. The new system automates shift distribution, ensures compliance with labor rules, and links directly with attendance validation.",
        image: "bracerp_roster_view.webp",
      },
      {
        problem: "HR Master Data Configuration",
        solution:
          "The HR Master Data framework, ensuring all core configurations—like leave types, shift structures, bonus types, and deduction categories—are defined before HR operations begin. Without centralized master data, inconsistencies occurred across HR processes. The structured setup enforces standardization, making HR operations reliable and scalable.",
        image: "bracerp_hr_master.webp",
      },
      {
        problem: "HR Reports",
        solution:
          "A comprehensive HR reporting system covering employee, attendance, payroll, leave, tax, PF, and loan reports. Reports can be filtered, exported, and downloaded for compliance and decision-making. Previously, HR had to compile reports from multiple sources, delaying insights. Now, all reports are generated in real-time from a single database, ensuring accuracy and accessibility.",
        image: "bracerp_employee_report.webp",
      },
      {
        problem: "Attendance Summary & Payroll Adjustment",
        solution:
          "The Attendance Summary feature, which compiles monthly data on presence, absence, leave, overtime, and early leave. This summary directly feeds into payroll calculations, ensuring salary adjustments align with company policies. Salary adjustments were previously prone to manual errors due to incomplete attendance data. The automated summary eliminates discrepancies and ensures fair payroll processing.",
        image: "bracerp_attendance_summary.webp",
      },
      {
        problem: "Set Employee Salary",
        solution:
          "The salary configuration module that allows HR to set employee compensation according to company policy or manual adjustments when needed. The system captures all key salary components — basic pay, allowances, deductions, tax, PF, and bonuses — ensuring accuracy in payroll processing. Once the salary is configured, payroll automatically uses the latest records for disbursement. This replaced inconsistent manual setups with a centralized, standardized process that ensures salaries are calculated correctly every time.",
        image: "bracerp_set_salary.webp",
      },
      {
        problem: "Payroll Generation",
        solution:
          "A payroll generation system that processes HR-approved salaries for disbursement through multiple methods — bank transfers, cash payments, or a combination of both. It supports selective disbursement for specific employees, allowance-wise payments, and partial payouts. Each payroll run generates separate advice files for different payment modes, streamlining reconciliation for the finance department. This eliminated rigid, manual payment processes and introduced a flexible, automated system that adapts to real-world payroll needs.",
        image: "bracerp_set_payment.webp",
      },
      {
        problem: "Payment History",
        solution:
          "A payment history module that provides month-wise records of all salary disbursements with detailed breakdowns. The history is accessible to authorized roles for auditing, reporting, and quick references without having to manually compile logs. This ensures payroll transparency, simplifies financial tracking, and provides a single source of truth for historical salary data.",
        image: "bracerp_payment_history.webp",
      },
      {
        problem: "Disbursement History",
        solution:
          "The disbursement history system that stores all generated bank and cash advice documents for each payroll cycle. These records are categorized by payment type and are used by the finance team for bank reconciliation and financial reporting. This replaced scattered, manually stored records with a centralized, well-structured archive, improving traceability and compliance.",
        image: "bracerp_disbursement.webp",
      },
      {
        problem: "Payslip Generation",
        solution:
          "Developed an automated payslip generation feature that produces detailed salary breakdowns for individual employees each month. Payslips are available for download in an official, standardized format, serving as proof of payment for employees and meeting compliance requirements. This replaced manual payslip preparation with a fast, accurate, and consistent digital solution.",
        image: "bracerp_payslip.webp",
      },
    ],
  },
  {
    title: "Smart Jute Information Software",
    description:
      "Smart Jute Information Software streamlines jute data management, trade tracking, and reporting for the Ministry of Textiles & Jute, Government of Bangladesh.",
    coverImage: "sjis_home_01.webp",
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
    coverImage: "alljobs_home.webp",
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
    coverImage: "jstu_home_01.webp",
    slug: "jstu",
    type: "Web Application",
    tech: "php, laravel, javascript, mySQL, eloquent, bootstrap 5, jquery, yajra datatable",
    workScope: "Frontend & Backend",
    url: "https://bsfmstu.solutionspin.com/",
    problems: [
      // {
      //   problem: "Manual bookkeeping & scattered data",
      //   solution:
      //     "We replaced manual records with a centralized digital ledger using Laravel Eloquent ORM and MySQL. All transactions are now stored securely with relational consistency, improving traceability and reducing human error.",
      //   image: "jstu_home_01.webp",
      // },
      // {
      //   problem: "Lack of real-time reporting",
      //   solution:
      //     "We developed dynamic financial dashboards and custom report modules using Laravel Blade, Yajra Datatables, and AJAX. Reports can be filtered by date, department, or category, and exported in PDF or Excel format instantly.",
      //   image: "realtime_reports.webp",
      // },
      // {
      //   problem: "Uncontrolled user access",
      //   solution:
      //     "Implemented a robust role-based access control (RBAC) system using Laravel Gates & Policies, ensuring that each user only sees and edits what's relevant to their role, increasing security and workflow efficiency.",
      //   image: "user_roles.webp",
      // },
      // {
      //   problem: "Data validation issues",
      //   solution:
      //     "Added server-side and client-side validation using Laravel validation rules and Bootstrap 5 feedback UI. This prevents incorrect data entry and ensures consistent financial records across all modules.",
      //   image: "data_validation.webp",
      // },
      // {
      //   problem: "Inefficient UI for large data handling",
      //   solution:
      //     "Optimized large table rendering using Yajra Datatables with server-side processing and pagination. This ensures smooth performance even with thousands of transaction records.",
      //   image: "datatable_optimization.webp",
      // },
    ],
  },
  {
    title: "Shippers' Council Bangladesh",
    description:
      "The website serves as the official platform of the Shippers' Council of Bangladesh. It provides information about the council's activities, news, publications, member services, and events, aiming to keep stakeholders updated and connected within the shipping and export community.",
    coverImage: "scb_home.webp",
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
    coverImage: "bigfish_home_01.webp",
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
        image: "bigfish_responsive_ui.webp",
      },
      {
        problem: "Smooth, Interactive Experience",
        solution:
          "Built with React to deliver instant UI updates and fluid interactions, making every tap feel responsive and engaging.",
        image: "bigfish_interactive_ui.webp",
      },
      {
        problem: "Reliable Game State Handling",
        solution:
          "Used Zustand for global state management, keeping track of user progress, balances, and upgrades in real-time without performance lag.",
        image: "bigfish_state_management.webp",
      },
      {
        problem: "One-Click Telegram Login",
        solution:
          "Seamlessly integrated Telegram WebApp SDK for secure, frictionless login—no forms, no passwords, just instant access.",
        image: "bigfish_telegram_auth.webp",
      },
      {
        problem: "Live Stats & Feedback",
        solution:
          "Displayed real-time balance updates, timers, and progress visuals with animated components for an engaging game flow.",
        image: "bigfish_interactive_ui.webp",
      },
      {
        problem: "Daily Gameplay Mechanics",
        solution:
          "Implemented logic for daily resets, earnings, and cooldowns to keep users returning and boost long-term engagement.",
        image: "bigfish_state_management.webp",
      },
    ],
  },
];

// url: "https://bsfmstu.solutionspin.com/", JSTU
