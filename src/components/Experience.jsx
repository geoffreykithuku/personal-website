import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Calendar,
  TrendingUp,
  Target,
  Users,
  Award,
} from "lucide-react";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Web Developer & IT Support Specialist",
      company: "Molars Dental Hospital",
      location: "Nairobi",
      period: "January 2025 - August 2025",
      type: "Current Position",
      challenge:
        "Hospital needed improved online presence and streamlined operations",
      solution: "Comprehensive web optimization and system implementation",
      results: [
        "Increased organic traffic by 30% through SEO-optimized content strategy",
        "Improved page load times by 50% through performance optimization",
        "Boosted lead generation by 25% with strategic landing page design",
        "Reduced equipment loss by 90% with QR-based asset tracking system",
        "Saved 10+ hours weekly through Monday.com workflow automation",
        "Achieved 95% user satisfaction rate in IT support",
      ],
      icon: Building2,
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Technical Mentor",
      company: "eMobilis Technology Training Institute",
      location: "Nairobi",
      period: "October 2024 - December 2024",
      type: "Contract",
      challenge:
        "Students struggling with complex programming concepts and debugging",
      solution:
        "Structured mentorship program with hands-on debugging sessions",
      results: [
        "Improved student engagement by 25% through innovative teaching methods",
        "Increased successful code resolution rates by 30% using Chrome DevTools and Git",
        "Developed comprehensive progress tracking system for better outcomes",
        "Mentored 50+ students in full-stack development",
      ],
      icon: Users,
      color: "from-accent-500 to-accent-600",
    },
    {
      title: "Software Developer",
      company: "Nobilis Limited",
      location: "Nairobi",
      period: "July 2024 - September 2024",
      type: "Contract",
      challenge:
        "Building scalable, responsive web applications in Agile environment",
      solution: "Cross-functional collaboration and performance optimization",
      results: [
        "Delivered responsive React.js interfaces across multiple devices",
        "Implemented caching techniques that significantly improved load times",
        "Seamlessly integrated frontend with Ruby on Rails backend systems",
        "Collaborated with design team to achieve pixel-perfect implementations",
      ],
      icon: Target,
      color: "from-success-500 to-success-600",
    },
    {
      title: "Volunteer Software Developer",
      company: "TeckTick",
      location: "Remote",
      period: "January 2024 - April 2024",
      type: "Volunteer",
      challenge:
        "Startup needed professional web presence and secure blog platform",
      solution:
        "Built company website and blog application with modern tech stack",
      results: [
        "Built responsive company website using React.js",
        "Developed secure blog application using Django",
        "Implemented secure coding practices and authentication",
        "Created content management system for easy updates",
      ],
      icon: Award,
      color: "from-warning-500 to-warning-600",
    },
    {
      title: "Software Developer Intern",
      company: "Pamital",
      location: "Accra, Ghana",
      period: "May 2023 - August 2023",
      type: "Internship",
      challenge: "International collaboration on UI/UX implementation",
      solution:
        "Remote collaboration with design team for pixel-perfect components",
      results: [
        "Collaborated with international design team remotely",
        "Implemented pixel-perfect UI components using React.js",
        "Mastered Tailwind CSS for responsive design",
        "Gained experience in international development workflows",
      ],
      icon: Building2,
      color: "from-info-500 to-info-600",
    },
    {
      title: "Technical Trainer",
      company: "Experts Business College",
      location: "Nairobi",
      period: "February 2022 - July 2022",
      type: "Part-time",
      challenge: "Students needed practical technical skills for job market",
      solution: "Comprehensive training programs with hands-on projects",
      results: [
        "Developed and delivered comprehensive technical training programs",
        "Supported 100+ students in career development",
        "Created practical curriculum aligned with industry needs",
        "Achieved 85% student placement rate in tech roles",
      ],
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Current Position":
        return "bg-success-100 text-success-800";
      case "Contract":
        return "bg-primary-100 text-primary-800";
      case "Volunteer":
        return "bg-accent-100 text-accent-800";
      case "Internship":
        return "bg-info-100 text-info-800";
      case "Part-time":
        return "bg-warning-100 text-warning-800";
      default:
        return "bg-secondary-100 text-secondary-800";
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary-50">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Real Results for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A proven track record of delivering measurable improvements across
            healthcare, education, and technology sectors
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`${inView ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-soft`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-semibold text-secondary-900">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium text-primary-600 mt-1">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4 text-secondary-500" />
                            <span className="text-sm text-secondary-600">
                              {exp.period}
                            </span>
                          </div>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${getTypeColor(
                              exp.type
                            )}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent-600" />
                          Challenge
                        </h4>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                          {exp.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary-600" />
                          Solution
                        </h4>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                          {exp.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-success-600" />
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {exp.results.map((result, resultIndex) => (
                          <li
                            key={resultIndex}
                            className="flex items-start gap-2 text-sm text-secondary-600"
                          >
                            <div className="w-1.5 h-1.5 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help transform your business with proven
              strategies and cutting-edge technology solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-medium hover:shadow-strong"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
