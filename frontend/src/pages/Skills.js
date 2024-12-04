import React from "react";

function Skills() {
  const skills = [
    {
      category: "Frontend Developer",
      items: [
        {
          url: "https://img.icons8.com/color/48/html-5--v1.png",
          alt_title: "html-5--v1",
          technologie: "HTML5",
          level: "high"
        },
        {
          url: "https://img.icons8.com/color/48/css3.png",
          alt_title: "css3",
          technologie: "CSS3",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/color/48/sass-avatar.png",
          alt_title: "sass-avatar",
          technologie: "SASS",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/color/48/bootstrap--v2.png",
          alt_title: "bootstrap--v2",
          technologie: "Bootstrap",
          level: "high"
        },
        {
          url: "https://img.icons8.com/color/480/tailwindcss.png",
          alt_title: "tailwindcss",
          technologie: "Tailwind",
          level: "basic"
        },
        {
          url: "https://img.icons8.com/color/48/javascript--v1.png",
          alt_title: "javascript--v1",
          technologie: "Javascript",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/office/40/react.png",
          alt_title: "react",
          technologie: "React",
          level: "Intermediate"
        }
      ]
    },
    {
      category: "Backend Developer",
      items: [
        {
          url: "https://img.icons8.com/color/48/php.png",
          alt_title: "php",
          technologie: "PHP",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/nolan/48/laravel.png",
          alt_title: "laravel",
          technologie: "Laravel",
          level: "basic"
        },
        { url: "", alt_title: "", technologie: "", level: "" },
        {
          url: "https://img.icons8.com/color/48/sql.png",
          alt_title: "sql",
          technologie: "SQL",
          level: "intermediate"
        }
      ]
    },
    {
      category: "Others",
      items: [
        {
          url: "https://img.icons8.com/color/48/figma--v1.png",
          alt_title: "figma--v1",
          technologie: "Figma",
          level: "basic"
        },
        {
          url: "https://img.icons8.com/color/48/git.png",
          alt_title: "git",
          technologie: "Git",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/color/48/github--v1.png",
          alt_title: "github--v1",
          technologie: "Github",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
          alt_title: "java-coffee-cup-logo--v1",
          technologie: "Java",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/color/48/amazon-web-services.png",
          alt_title: "amazon-web-services",
          technologie: "AWS",
          level: "basic"
        },
        {
          url: "https://img.icons8.com/color/48/markdown.png",
          alt_title: "markdown",
          technologie: "Markdown",
          level: "intermediate"
        },
        {
          url: "https://img.icons8.com/color/48/json--v1.png",
          alt_title: "json--v1",
          technologie: "JSON",
          level: "intermediate"
        }
      ]
    },
    {
      category: "Languages",
      items: [
        {
          url: "https://img.icons8.com/color/48/spain-2-circular.png",
          alt_title: "spain-2-circular",
          technologie: "Spanish",
          level: "Native"
        },
        {
          url: "https://img.icons8.com/emoji/48/united-kingdom-emoji.png",
          alt_title: "united-kingdom-emoji",
          technologie: "English",
          level: "High"
        },
        {
          url: "https://img.icons8.com/color/48/france-circular.png",
          alt_title: "france-circular",
          technologie: "French",
          level: "Basic"
        },
        {
          url: "https://img.icons8.com/color/48/germany-circular.png",
          alt_title: "germany-circular",
          technologie: "German",
          level: "basic"
        },
        ,
        {
          url: "https://img.icons8.com/color/48/japan-circular.png",
          alt_title: "japan-circular",
          technologie: "Japanese",
          level: "basic"
        }
      ]
    }
  ];
  return (
    <article id="skills">
      <img src="" alt="" className="skills-icons" />
    </article>
  );
}
export default Skills;
