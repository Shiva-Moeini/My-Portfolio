/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shiva Moeini",
  title: "Hi all, I'm Shiva",
  subTitle: emoji(
    "I’m a tech enthusiast passionate about full-stack development, cloud technologies, and creating efficient workflows through DevOps and automation. I love solving problems and building innovative solutions that make an impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shiva-Moeini",
  linkedin: "https://www.linkedin.com/in/shivamoeini/",
  gmail: "shiva.moeini20@gmail.com",
  
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Payam Noor University",
      logo: require("./assets/images/Payame_Noor_University_Logo.png"),
      subHeader: "Management",
      duration: "2006 - 2011",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
     // ]
    },
    //{
      //schoolName: "Stanford University",
      //logo: require("./assets/images/stanfordLogo.png"),
      //subHeader: "Bachelor of Science in Computer Science",
      //duration: "September 2013 - April 2017",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
   /* {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },*/
  
    {
      role: "Linux System Administrator",
      company: "Lotus Network",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2021 - 2022",
      desc: "My tasks:",
      descBullets: [
        "Streamlined user administration by creating, managing, and securing user accounts according to security best practices.",
        "Enhanced operational efficiency by leveraging Ansible to automate repetitive tasks, reducing manual workload and improving consistency.",
        "Assisting with software installations and updates.",
      ]
    },
    {
      role: "IT Help Desk",
      company: "Lotus Network",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2020 - 2021",
      desc: "My tasks:",
      descBullets: [
        "Installed and configured computer hardware and software",
        "Handled tickets from our dealers and end users.",
        "Kept colleagues informed about the progress of reported issues and providing timely solutions.",
        "Analyzed and solved more complex IT problems for second-line support",
      ]
    },
    {
      role: "English teacher",
      company: "Goldis",
      companylogo: require("./assets/images/L-goldis-logo.png"),
      date: "2006 - 2019",
      desc: "Skills I gained:",
      descBullets: [
        "Lesson Plan Design",
        "Time Management",
        "Class Management",
        "Problem-Solving",
        "Collaboration",
        "Creativity in Lesson Planning",
        "Assessment and Feedback Skills",
        "Critical Thinking and Problem-Solving",
        
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Recipe-Collections",
      projectDesc: "The website is built using HTML, Bootstrap 5, and custom assets for a responsive and user-friendly experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Shiva-Moeini/Recipe-Collections"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Business-Card",
      projectDesc: "This is a simple and visually appealing digital business card built using Vue.js and Vuetify. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Shiva-Moeini/Business-Card"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  achievementsCards: [
    {
      title: "Azure Fundamentals",
      subtitle:
        "Issued by Microsoft on September 25, 2023",
      image: require("./assets/images/azure-fundamentals-e1725916375391.png"),
      imageAlt: "Microsoft Certified: Azure Fundamentals",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/shivamoeini-4966/1B283AEBE0E01439?sharingId=F6434C3170D24497"
        },
      ]
    },
    {
      title: "Azure Data Fundamentals",
      
      subtitle:
      "Issued by Microsoft on February 18, 2024",
      image: require("./assets/images/C_Microsoft_Certified__Azure_Data_Fundamentalsf0d14e2b-d9c9-eb11-bacc-000d3a21e9d7.png"),
      imageAlt: "Azure Data Fundamentals",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/shivamoeini-4966/C5682CA1FC5E16E7?sharingId=F6434C3170D24497"
        }
      ]
    },

    {
      title: " Certified Cloud Practitioner",
      subtitle: "Issued on July 31, 2023",
      image: require("./assets/images/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png"),
      imageAlt: "Certified Cloud Practitioner",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f2a0f86d-e63d-4c04-a467-6d3186187252/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+31623801278",
  email_address: "shiva.moeini@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
