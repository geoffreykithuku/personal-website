import React from "react";
import Express from "../assets/Express.svg";
import Git from "../assets/Git.png";
import Html from "../assets/html5.png";
import Js from "../assets/Js.png";
import Mongo from "../assets/Mongo.svg";
import Node from "../assets/Nodejs.svg";
import ReactImg from "../assets/React.svg";
import Rails from "../assets/Rails.svg";
import Ruby from "../assets/Ruby.svg";
import Tailwind from "../assets/Tailwind.svg";
import Python from "../assets/Python.svg";
import Django from "../assets/Django.svg";
import Nextjs from "../assets/Nextjs.svg";
import Bootstrap from "../assets/Bootstrap.png";
import Github from "../assets/Github.svg";
import Typescript from "../assets/TypeScript.svg";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "React", icon: ReactImg, projects: 8, articles: 0 },
        { name: "Next.js", icon: Nextjs, projects: 4, articles: 1 },
        { name: "JavaScript", icon: Js, projects: 12, articles: 2 },
        { name: "TypeScript", icon: Typescript, projects: 6, articles: 0 },
        { name: "HTML5", icon: Html, projects: 15, articles: 0 },
        { name: "Tailwind CSS", icon: Tailwind, projects: 10, articles: 1 },
        { name: "Bootstrap", icon: Bootstrap, projects: 5, articles: 0 },
      ],
    },
    {
      title: "Backend Development",
      color: "from-accent-500 to-accent-600",
      skills: [
        { name: "Node.js", icon: Node, projects: 7, articles: 1 },
        { name: "Express.js", icon: Express, projects: 6, articles: 0 },
        { name: "Python", icon: Python, projects: 6, articles: 2 },
        { name: "Django", icon: Django, projects: 3, articles: 1 },
        { name: "Ruby on Rails", icon: Rails, projects: 4, articles: 0 },
        { name: "Ruby", icon: Ruby, projects: 4, articles: 0 },
      ],
    },
    {
      title: "Tools & Technologies",
      color: "from-success-500 to-success-600",
      skills: [
        { name: "Git", icon: Git, projects: 20, articles: 0 },
        { name: "GitHub", icon: Github, projects: 20, articles: 0 },
        { name: "MongoDB", icon: Mongo, projects: 5, articles: 1 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Skills
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto"></div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-3 mb-8">
                  <div
                    className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}
                  ></div>
                  <h3 className="text-2xl font-heading font-semibold text-secondary-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group relative bg-secondary-50 hover:bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 border border-transparent hover:border-primary-200"
                    >
                      <div className="text-center space-y-3">
                        <div className="relative mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-soft group-hover:shadow-medium transition-all duration-300">
                          <img
                            src={skill.icon}
                            alt={`${skill.name} logo`}
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900 text-sm">
                            {skill.name}
                          </h4>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center justify-center gap-1">
                              <span className="text-sm font-medium text-primary-600">
                                {skill.projects}
                              </span>
                              <span className="text-xs text-secondary-500">
                                project{skill.projects !== 1 ? "s" : ""}
                              </span>
                            </div>
                            {skill.articles > 0 && (
                              <div className="flex items-center justify-center gap-1">
                                <span className="text-sm font-medium text-accent-600">
                                  {skill.articles}
                                </span>
                                <span className="text-xs text-secondary-500">
                                  article{skill.articles !== 1 ? "s" : ""}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-6 py-3 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Always learning and expanding my skillset
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
