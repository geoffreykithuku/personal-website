import React from "react";
import AboutImg from "../assets/About.svg";
import { useInView } from "react-intersection-observer";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: Code2,
      title: "2+ Years Experience",
      description: "Proven expertise in full-stack development",
    },
    {
      icon: Lightbulb,
      title: "Business Impact",
      description: "Measurable results across multiple industries",
    },
    {
      icon: Rocket,
      title: "100+ Students Trained",
      description: "Technical mentorship and knowledge transfer",
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "From startups to healthcare organizations",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
        {/* Content Section */}
        <div
          className={`space-y-8 ${inView ? "animate-slide-up" : "opacity-0"}`}
        >
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
              Proven Track Record of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Delivering Results
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"></div>
          </div>

          <div className="space-y-6 text-secondary-700 leading-relaxed">
            <p className="text-lg">
              I'm Geoffrey Kithuku, a{" "}
              <strong>
                Full Stack Software Developer and Digital Solutions Consultant
              </strong>{" "}
              with a passion for transforming business challenges into
              innovative digital solutions. Over the past 2 years, I've helped
              organizations across healthcare, education, and technology sectors
              achieve measurable improvements in efficiency, user engagement,
              and revenue growth.
            </p>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-xl border border-primary-100">
              <h3 className="font-semibold text-secondary-900 mb-4 text-lg">
                Key Achievements Highlight:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>30% increase in organic traffic</strong> through
                    strategic SEO optimization at Molars Dental Hospital
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>90% reduction in equipment loss</strong> by
                    implementing QR-based asset tracking systems
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>25% boost in lead generation</strong> through
                    high-converting landing page design
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>10+ hours weekly saved</strong> through workflow
                    automation for teams
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>
                    <strong>95% user satisfaction rate</strong> in IT support
                    and technical training
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-secondary-900 text-lg">
                What Sets Me Apart:
              </h3>
              <div className="grid gap-4">
                <div>
                  <h4 className="font-medium text-primary-600">
                    Business-Focused Development
                  </h4>
                  <p className="text-sm">
                    I don't just write code—I solve business problems. Every
                    line of code is written with your ROI in mind.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600">
                    Full-Stack Expertise
                  </h4>
                  <p className="text-sm">
                    From React frontends to Ruby on Rails backends, I handle
                    every aspect of your digital solution.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600">
                    Proven Mentor & Trainer
                  </h4>
                  <p className="text-sm">
                    Experience training 100+ students and staff, ensuring smooth
                    technology adoption and knowledge transfer.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600">
                    Results-Driven Approach
                  </h4>
                  <p className="text-sm">
                    My solutions deliver measurable results—increased traffic,
                    improved efficiency, and enhanced user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`flex justify-center lg:justify-end ${
            inView ? "animate-fade-in delay-300" : "opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl rotate-6 scale-105 opacity-20"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-strong">
              <img
                src={AboutImg}
                alt="Geoffrey Kithuku - About illustration showing software development"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
