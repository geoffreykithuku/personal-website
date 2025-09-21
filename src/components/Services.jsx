import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  TrendingUp,
  Cog,
  GraduationCap,
  Globe,
  Database,
  Settings,
  Users,
  Search,
  BarChart3,
  Workflow,
  BookOpen,
} from "lucide-react";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const services = [
    {
      title: "Custom Web Application Development",
      description:
        "Full-stack solutions tailored to your business needs, from concept to deployment.",
      icon: Code2,
      color: "from-primary-500 to-primary-600",
      features: [
        { icon: Globe, text: "React.js & Next.js frontend development" },
        {
          icon: Database,
          text: "Node.js, Python Django, Ruby on Rails backends",
        },
        {
          icon: Settings,
          text: "API development and third-party integrations",
        },
        { icon: BarChart3, text: "Database design and optimization" },
      ],
    },
    {
      title: "Digital Transformation Consulting",
      description:
        "Strategic guidance to modernize your digital presence and optimize business processes.",
      icon: TrendingUp,
      color: "from-accent-500 to-accent-600",
      features: [
        { icon: Search, text: "WordPress optimization and maintenance" },
        { icon: TrendingUp, text: "SEO strategy and implementation" },
        {
          icon: BarChart3,
          text: "Landing page design and conversion optimization",
        },
        { icon: Workflow, text: "Workflow automation and process improvement" },
      ],
    },
    {
      title: "Business Process Automation",
      description:
        "Streamline operations and reduce manual work through intelligent automation solutions.",
      icon: Cog,
      color: "from-success-500 to-success-600",
      features: [
        { icon: BarChart3, text: "Asset tracking and management systems" },
        { icon: Users, text: "CRM integration and optimization" },
        {
          icon: Workflow,
          text: "Task automation using Monday.com and similar platforms",
        },
        { icon: Settings, text: "Quality assurance and testing strategies" },
      ],
    },
    {
      title: "Technical Training & Support",
      description:
        "Empower your team with technical knowledge and provide ongoing support for smooth operations.",
      icon: GraduationCap,
      color: "from-warning-500 to-warning-600",
      features: [
        { icon: Users, text: "Staff training on new technologies" },
        { icon: Code2, text: "Code review and best practices implementation" },
        { icon: Settings, text: "IT support and troubleshooting" },
        { icon: BookOpen, text: "Documentation and knowledge transfer" },
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            End-to-end services designed to accelerate your business growth
            through innovative technology and strategic digital transformation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${inView ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 h-full group hover:-translate-y-1">
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-soft group-hover:shadow-medium transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-secondary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="p-2 bg-secondary-100 rounded-lg">
                            <FeatureIcon className="w-4 h-4 text-secondary-600" />
                          </div>
                          <span className="text-secondary-700 font-medium">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-secondary-100">
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-semibold hover:underline transition-all duration-300`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let's have a conversation about your business goals and
              challenges. I'll recommend the best approach to achieve your
              objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-strong"
              >
                Schedule a Consultation
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary-50 text-secondary-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-secondary-200 hover:border-primary-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
