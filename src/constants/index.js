import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    ifair,
    ingleswitch,
    skillg,
    innov8,
    urlshortener,
    chatapp,
    threejs,
    wordpress,
    christiana,
    jerry,
    oche,
    ecommerce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "WordPress Developer",
      icon: backend,
    },
    {
      title: "Voice Over Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "wordpress Developer",
      icon: wordpress,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Innov8 Hub",
      icon: innov8,
      iconBg: "#383E56",
      date: "May 2023 - July 2024",
      points: [
        "Created and improved the user interface and experience for the Innov8 Hub website, making it user-friendly and visually appealing",
        "Built responsive and interactive website components, ensuring compatibility across devices.",
        "Managed server-side tasks, handled databases, and maintained website infrastructure, implementing security measures and performance optimizations.",
        "Conducted regular audits and optimizations to enhance speed and performance, resolved technical issues, managed staff email accounts, and regularly updated website content.",
      ],
    },
    {
      title: "Web Developer & Web Manager",
      company_name: "i-FAIR",
      icon: ifair,
      iconBg: "#E6DEDD",
      date: "June 2023 - May 2024",
      points: [
        "Designed user-friendly and attractive interfaces at i-FAIR to enhance user experience.",
        "Developed and maintained the website's front-end, ensuring responsiveness and ease of use, while managing server operations and integrating back-end systems.",
        "Ensured database security and efficiency in data storage and retrieval, improving website security and performance for quick load times.",
        "Performed regular optimizations to maintain smooth operation, promptly fixed technical issues, and kept the website content updated and relevant.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Skill 'G' Nigeria Limited",
      icon: skillg,
      iconBg: "#383E56",
      date: "Dec 2023 - April 2024",
      points: [
        "Managed staff email systems for secure communication and kept website content up-to-date and engaging for visitors.",
        "Conducted regular website optimizations to enhance speed and user experience, resolving technical issues promptly.",
        "Ensured secure and effective database management, implementing measures to optimize security and performance.",
        "Created and maintained a responsive and visually appealing front-end for the Skill 'G' website, ensuring seamless integration and efficient data handling with the back-end.",
      ],
    },
    {
      title: "Full stack Software Engineer Intern",
      company_name: "IngleSwitch",
      icon: ingleswitch,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - March 2023",
      points: [
        "Collaborated with experienced developers and designers on projects using .NET, C#, MVC, jQuery, Angular, and Typescript.",
        "Developed and debugged application programs, often working independently.",
        "Ensured production-ready code and proficiently used both front-end and back-end frameworks.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Worked with web designers to create sleek and innovative UI designs for projects.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend Eseosa Imhariagbe as a web developer. I had the pleasure of working alongside her on several projects, and she consistently displayed excellent technical skills, collaborative spirit, and problem-solving abilities.",
      name: "Christiana Ogaba",
      designation: "Team Lead",
      company: "First Icon Group",
      image: christiana,
    },
    {
      testimonial:
        "Eseosa Imhariagbe is one of the most remarkable individuals you'd find out there. A team player, Imhariagbe possesses the technical know-how, work ethic and interpersonal skills needed to be of valuable service in any organization that requires her services.",
      name: "Oche Anejo",
      designation: "Head of Creative Media",
      company: "Innov8 Hub",
      image: oche,
    },
    {
      testimonial:
        "Eseosa is one stellar talent I will recommend for any team globally. Having supervised her for over a year, I can vouch for her ability to master concepts fast, and follow through on tasks with minimal supervision. Eseosa also has a knack for excellence in delivering every designated responsibility. ",
      name: "Jerry Uke",
      designation: "Senior Program Manager",
      company: "AltSchool Africa",
      image: jerry,
    },
  ];
  
  const projects = [
    {
      name: "Scissor URL Shortener and QR Code Generator",
      description:
        "Web-based application that simplifies content sharing and tracking. Users can effortlessly convert lengthy URLs into concise, shareable links and generate dynamic QR codes for immediate access.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: urlshortener,
      source_code_link: "https://github.com/koimasshiro/Scissor_URLShortener-Project.git",
    },
    {
      name: "Chat Application",
      description:
        "A chat application that enables users to engage in real-time conversations. Users can send and receive messages instantly. The app features a user-friendly interface, and secure messaging to enhance the overall communication experience.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/koimasshiro/HowFa_ChatApp.git",
    },
    {
      name: "eCommerce Platform",
      description:
        "An online marketplace that empowers businesses to reach a global audience by accepting cryptocurrency payments. Offering a seamless shopping experience, and allowing customers to purchase a wide range of products using their preferred digital currencies.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "web3js",
          color: "blue-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/koimasshiro/combat-inventory-eCommerce.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };