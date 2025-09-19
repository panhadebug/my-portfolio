import {
  ArrowRight,
  ExternalLink,
  Facebook,
  Linkedin,
  Github,
  GithubIcon,
  Instagram,
  Youtube,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Material Webpage",
    description:
      "A beautiful material design webpage using React and Tailwind.",
    image: "/projects/project1.png",
    tag: ["React", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/",
    projectUrl: "https://example.com/project-one",
  },
  {
    id: 2,
    title: "SmartPhone Webpage",
    description:
      "A beautiful material design webpage using React and Tailwind.",
    image: "./projects/project2.png",
    tag: ["React", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/",
    projectUrl: "https://example.com/project-two",
  },
  {
    id: 3,
    title: "Food Webpage",
    description:
      "A beautiful material design webpage using React and Tailwind.",
    image: "./projects/project3.png",
    tag: ["React", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/",
    projectUrl: "https://example.com/project-three",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {""}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my featured projects showcasing innovative material designs,
          cutting-edge smartphone applications, and creative food concepts. Each
          project reflects my skills, creativity, and dedication to building
          meaningful, user-focused solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="max-h-full overflow-hidden">
                <img
                  src={project.image}
                  alt="{project.title}"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-sm text-muted-foreground  mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gab-2"
            href="https://github.com/"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
